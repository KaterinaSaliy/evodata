import { home } from "@/content/en/home";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * Video block — node 9150:71967 (full width 1440×620, poster + play button).
 *
 * Hidden while `home.video.src` is empty: the poster in the design is a stock
 * placeholder, so there is nothing to show yet. Setting a file path in the home
 * copy brings the block back on every page that renders it.
 */
export function VideoSection() {
  if (!home.video.src) return null;

  return (
    <section className="bg-surface-2">
      <div className="relative mx-auto h-[220px] w-full max-w-[1440px] overflow-hidden sm:h-[380px] lg:h-[620px]">
        <VideoPlayer
          src={home.video.src}
          poster={home.video.poster}
          label={home.video.playLabel}
        />
      </div>
    </section>
  );
}
