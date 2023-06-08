import { useState, useRef, useEffect } from 'react';

import { Play, Pause } from '../../components';

type Props = {
  url: string;
};

export function VideoPlayer({ url }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoEl = ref.current;
    if (isPlaying) {
      videoEl?.play();
    } else {
      videoEl?.pause();
    }
    return () => videoEl?.pause();
  }, [isPlaying]);

  return (
    <div className="w-[500px] min-w-[250px] max-w-[500px] relative bg-gray-500">
      <video
        ref={ref}
        src={url}
        loop
        playsInline
        className="w-full h-full"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setIsPlaying(!isPlaying)}
      />

      {show && (
        <button
          onMouseEnter={() => setShow(true)}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`
          z-50 w-10 h-10 p-2
          bg-gray-300/50 rounded-full border border-white
          absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2
          `}
        >
          {isPlaying
            ? <Pause className="stroke-white fill-white" />
            : <Play className="stroke-white fill-white" />
          }
        </button>
      )}
    </div>
  );
}
