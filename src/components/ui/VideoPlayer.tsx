"use client";

import { useState } from "react";
import Image from "next/image";

type VideoPlayerProps = {
  src: string;
  poster: string;
  label: string;
};

/**
 * Постер із кнопкою відтворення; за кліком підміняється нативним <video>.
 * Саме відео не завантажується, поки користувач не натисне play — це тримає
 * вагу першого екрана низькою (вимога Lighthouse ≥ 90).
 */
export function VideoPlayer({ src, poster, label }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <video
        src={src}
        poster={poster}
        controls
        autoPlay
        playsInline
        className="size-full object-cover"
      />
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={() => setPlaying(true)}
      className="group relative block size-full cursor-pointer"
    >
      <Image src={poster} alt="" fill sizes="100vw" className="object-cover" />
      <span className="absolute top-1/2 left-1/2 size-32 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[9.6px] transition-transform group-hover:scale-105">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/play-button.svg" alt="" className="size-full" />
      </span>
    </button>
  );
}
