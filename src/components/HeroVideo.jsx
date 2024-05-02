import { useRef, useState } from "react";

export const HeroVideo = () => {
  const [isMute, setIsMute] = useState(true);
  const videoRef = useRef(null)
  function handleClick() {
    videoRef.current.muted = !isMute
    setIsMute(!isMute)
  }
  return (
    <div className="relative group">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={isMute}
        loop
        preload="metadata"
        poster="/intro-poster.webp"
        className="w-full object-cover object-center aspect-[16/8]"
      >
        <source src="/intro-video.webm" type="video/webm" />
        <source src="/intro-video.mp4" type="video/mp4" />
      </video>
      <button
        aria-label="mute/unmute"
        className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-[opacity] duration-200"
        onClick={handleClick}
      >
        <svg
          data-bbox="5.726 5.999 21.997 18.001"
          data-type="shape"
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          aria-hidden="true"
        >
          <defs>
            <filter id="a" height="200%" width="200%" y="-50%" x="-50%">
              <feOffset result="out-offset" in="SourceAlpha" />
              <feGaussianBlur
                result="out-blur"
                in="out-offset"
                stdDeviation="2"
              />
              <feColorMatrix
                result="out-matrix"
                in="out-blur"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.40 0"
              />
              <feMerge>
                <feMergeNode in="out-matrix" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          {isMute ? (
            <path
              filter="url(#a)"
              d="M27.39 17.535a.48.48 0 0 1 .306.615v.001a.51.51 0 0 1-.641.292L6.074 12.471a.48.48 0 0 1-.325-.605.505.505 0 0 1 .661-.302zm-6.211.375c1.911-.377 1.812 2.001 1.813 2.001 0 1.273-.986 2.713-3.235 2.713-2.009 0-2.515-1.345-2.515-2.252 0-1.117.646-2.258 2.519-2.258.671-.001 1.095-.141 1.418-.204m-8.427-1.643v.013h.001l-.005 5.007c0 1.273-.985 2.713-3.233 2.713C7.506 24 7 22.655 7 21.748c0-1.117.646-2.258 2.519-2.258 1.696 0 1.972-.427 1.972-1.319l.001-1.934a.513.513 0 0 1 .512-.477h.23c.285 0 .518.228.518.507m-.537-4.642a.67.67 0 0 1-.506-.141.61.61 0 0 1-.22-.468l.006-2.86c0-.304.227-.562.535-.609l10.238-1.54a.63.63 0 0 1 .726.609L23 13.591c0 .013-.006.024-.007.036a.5.5 0 0 1-.094.248.52.52 0 0 1-.416.222h-.229a.51.51 0 0 1-.517-.505l-.004-3.479z"
            />
          ) : (
            <path
              filter="url(#4e358e3c-c4cc-411c-8da6-747bbbb99bfa_audioOn-comp-kz3svji7)"
              d="M23 6.616a.625.625 0 0 0-.727-.609l-10.241 1.54a.62.62 0 0 0-.535.609l-.006 10.016c0 .892-.276 1.319-1.971 1.319C7.646 19.49 7 20.631 7 21.748 7 22.655 7.507 24 9.516 24c2.249 0 3.236-1.44 3.236-2.713l.006-9.719 8.98-1.454v6.87c-.045.763-.401 1.13-1.973 1.13-1.874 0-2.52 1.141-2.52 2.258 0 .907.507 2.252 2.516 2.252 2.249 0 3.236-1.44 3.236-2.713L23 6.616z"
            ></path>
          )}
        </svg>
      </button>
    </div>
  );
};
