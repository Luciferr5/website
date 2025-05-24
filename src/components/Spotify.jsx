import { useState, useEffect } from 'react';

export const SpotifyPlayer = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [accessToken, setAccessToken] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // Spotify App credentials (you'll need to create a Spotify app)
  const CLIENT_ID = 'e32d509f8d2b4d06bc6202721ff7d35f'; // Replace with your Client ID
  const REDIRECT_URI = window.location.origin; // Current domain
  const SCOPES = 'user-read-currently-playing user-read-playback-state user-modify-playback-state';

  // Generate random string for PKCE
  const generateRandomString = (length) => {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return result;
  };

  // Base64 URL encode
  const base64URLEncode = (str) => {
    return btoa(String.fromCharCode.apply(null, new Uint8Array(str)))
      .replace(/\+/g, '-')
      .replace(/\//g, '_')
      .replace(/=/g, '');
  };

  // Generate PKCE challenge
  const generateCodeChallenge = async (codeVerifier) => {
    const encoder = new TextEncoder();
    const data = encoder.encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return base64URLEncode(digest);
  };

  // Start Spotify authentication
  const authenticateSpotify = async () => {
    setIsConnecting(true);
    
    const codeVerifier = generateRandomString(128);
    const codeChallenge = await generateCodeChallenge(codeVerifier);
    
    // Store code verifier (in a real app, use secure storage)
    sessionStorage.setItem('code_verifier', codeVerifier);
    
    const authUrl = new URL('https://accounts.spotify.com/authorize');
    authUrl.searchParams.append('client_id', CLIENT_ID);
    authUrl.searchParams.append('response_type', 'code');
    authUrl.searchParams.append('redirect_uri', REDIRECT_URI);
    authUrl.searchParams.append('scope', SCOPES);
    authUrl.searchParams.append('code_challenge_method', 'S256');
    authUrl.searchParams.append('code_challenge', codeChallenge);
    
    window.location.href = authUrl.toString();
  };

  // Exchange authorization code for access token
  const getAccessToken = async (authCode) => {
    const codeVerifier = sessionStorage.getItem('code_verifier');
    
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: REDIRECT_URI,
        code_verifier: codeVerifier,
      }),
    });
    
    const data = await response.json();
    if (data.access_token) {
      setAccessToken(data.access_token);
      // Clean up URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  };

  // Fetch currently playing track
  const getCurrentTrack = async () => {
    if (!accessToken) return;
    
    try {
      const response = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      
      if (response.ok && response.status !== 204) {
        const data = await response.json();
        setCurrentTrack(data);
        setIsPlaying(data.is_playing);
      } else {
        setCurrentTrack(null);
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('Error fetching current track:', error);
    }
  };

  // Check for auth code in URL on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get('code');
    
    if (authCode) {
      getAccessToken(authCode);
    }
  }, []);

  // Fetch current track when access token is available
  useEffect(() => {
    if (accessToken) {
      getCurrentTrack();
      // Poll every 10 seconds for updates
      const interval = setInterval(getCurrentTrack, 10000);
      return () => clearInterval(interval);
    }
  }, [accessToken]);

  // Format track duration
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds.padStart(2, '0')}`;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Now Playing</h3>
      </div>
      
      <div className="flex-1 flex flex-col">
        {!accessToken ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <button
              onClick={authenticateSpotify}
              disabled={isConnecting}
              className="bg-green-500 hover:bg-green-600 disabled:bg-green-700 text-white px-6 py-3 rounded-full font-bold transition-colors mb-4"
            >
              {isConnecting ? 'Connecting...' : 'Connect Spotify'}
            </button>
            <p className="text-gray-400 text-xs text-center">
              Connect to see your currently playing track
            </p>
          </div>
        ) : currentTrack && currentTrack.item ? (
          <>
            {/* Album Art and Song Info */}
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-lg mr-4 overflow-hidden">
                <img
                  src={currentTrack.item.album.images[0]?.url || '/placeholder-album.png'}
                  alt={`${currentTrack.item.album.name} cover`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-sm truncate">
                  {currentTrack.item.name}
                </p>
                <p className="text-gray-400 text-xs truncate">
                  {currentTrack.item.artists.map(artist => artist.name).join(', ')}
                </p>
                <p className="text-gray-500 text-xs truncate">
                  {currentTrack.item.album.name}
                </p>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-1 mb-2">
              <div 
                className="bg-green-500 h-1 rounded-full transition-all duration-1000"
                style={{ 
                  width: `${(currentTrack.progress_ms / currentTrack.item.duration_ms) * 100}%` 
                }}
              />
            </div>
            
            <div className="flex justify-between text-xs text-gray-400 mb-4">
              <span>{formatDuration(currentTrack.progress_ms)}</span>
              <span>{formatDuration(currentTrack.item.duration_ms)}</span>
            </div>
            
            {/* Status */}
            <div className="flex items-center justify-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-green-500' : 'bg-gray-500'}`} />
              <p className="text-gray-400 text-xs">
                {isPlaying ? 'Playing' : 'Paused'}
              </p>
            </div>
          </>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center">
            <div className="w-16 h-16 bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <p className="text-gray-400 text-xs text-center">
              No music playing
            </p>
            <button
              onClick={getCurrentTrack}
              className="text-green-500 text-xs mt-2 hover:text-green-400 transition-colors"
            >
              Refresh
            </button>
          </div>
        )}
      </div>
    </div>
  );
};