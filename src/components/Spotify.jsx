import { useState, useEffect, useRef } from 'react';
// Import both the image and audio file
import albumCover from '../images/albumn-cover.jpeg';
import audioFile from '../images/I-Adore-You.mp3';

export const SpotifyPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);

  // Song information
  const songInfo = {
    title: "I Adore You",
    artist: "HUGEL, Topic, Arash",
    coverImage: albumCover,  // Use imported image
    audioFile: audioFile,    // Use imported audio
    spotifyProfileUrl: "https://open.spotify.com/user/31csrama45a5sgynxrob676f73ve"
  };

  // Handle audio events
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Update progress percentage
  useEffect(() => {
    if (duration > 0) {
      setProgress((currentTime / duration) * 100);
    }
  }, [currentTime, duration]);

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(e => console.log('Audio play failed:', e));
    }
    setIsPlaying(!isPlaying);
  };

  // Skip functions
  const skipPrevious = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = 0;
    }
  };

  const skipNext = () => {
    const audio = audioRef.current;
    if (audio) {
      audio.currentTime = audio.duration;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        preload="metadata"
        src={songInfo.audioFile}
      />

      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <h3 className="text-lg font-bold text-white">Music 🎧</h3>
      </div>

      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
      Music is a big part of my life. Back in high school, I used to play the 🎹 and 🥁. 
      These days, I’m really into house music—check out the song that’s currently stuck in my head below.
      </p>
    
      {/* Main Player Card */}
      <div className="flex-1 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl p-6 border border-white/10">
        <div className="flex gap-6 h-full">
          
          {/* Album Cover - Left Side */}
          <div className="flex-shrink-0 transform translate-y-10">
            <div className="w-43 h-43 lg:w-48 lg:h-48 rounded-lg overflow-hidden shadow-2xl">
              <img
                src={songInfo.coverImage}
                alt="Album Cover"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Song Info & Controls - Right Side */}
          <div className="flex-1 flex flex-col transform translate-y-10 justify-between">
            
            {/* Song Info */}
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                {songInfo.title}
              </h2>
              <p className="text-gray-400 text-lg mb-6">
                {songInfo.artist}
              </p>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 transform -translate-y-7">
              <div className="w-full bg-gray-700 rounded-full h-1 mb-3">
                <div 
                  className="bg-white h-1 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center transform -translate-y-20 justify-center gap-4 mb-6">
            <button
                onClick={skipPrevious}
                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                {/* Fixed rewind icon - double triangles pointing left */}
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z"/>
                </svg>
            </button>

            <button
                onClick={togglePlayPause}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl"
            >
                {isPlaying ? (
                <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                ) : (
                <svg className="w-8 h-8 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                </svg>
                )}
            </button>

            <button
                onClick={skipNext}
                className="w-8 h-8 rounded-full border-2 border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                {/* Skip forward icon - double triangles pointing right */}
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z"/>
                </svg>
            </button>
            </div>

            {/* Spotify Profile Link */}
            <div className="text-center transform -translate-y-26">
              <a 
                href={songInfo.spotifyProfileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 text-sm transition-colors inline-flex items-center gap-2"
              >
                <span>@prakharsaxena on</span>
                <span className="font-bold">spotify</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"/>
                  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"/>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};