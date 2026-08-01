import Image from "next/image";
import { home } from "@/content/en/home";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

/**
 * Відеоблок — node 9150:71967 (повна ширина 1440×620, постер + кнопка play).
 *
 * Поки `home.video.src` порожній (файл відео надає замовник), рендериться лише
 * постер — без інтерактивної кнопки, щоб не було «мертвого» елемента керування.
 * Щойно у конфігу з'явиться шлях до файла, блок стає повноцінним плеєром без
 * будь-яких змін у розмітці.
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
