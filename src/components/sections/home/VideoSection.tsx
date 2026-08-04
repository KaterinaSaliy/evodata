import Image from "next/image";
import { home } from "@/content/en/home";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * Video block — node 9150:71967 (full width 1440×620, poster + play button).
 *
 * While `home.video.src` is empty (the client supplies the file), only the
 * poster renders — without the interactive button, so there is no dead control.
 * As soon as the config gets a file path, the block becomes a full player with
 * no markup changes.
 */
export function VideoSection() {
  const videoSrc: string = home.video.src;

  return (
    <section className="bg-surface-2">
      <div className="relative mx-auto h-[220px] w-full max-w-[1440px] overflow-hidden sm:h-[380px] lg:h-[620px]">
        {videoSrc ? (
          <VideoPlayer
            src={videoSrc}
            poster={home.video.poster}
            label={home.video.playLabel}
          />
        ) : (
          <>
            <Image
              src={home.video.poster}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
            <span
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 size-32 -translate-x-1/2 -translate-y-1/2 backdrop-blur-[9.6px]"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/play-button.svg" alt="" className="size-full" />
            </span>
          </>
        )}
      </div>
    </section>
  );
}
