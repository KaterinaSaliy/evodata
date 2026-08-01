import { Container } from "@/components/layout/Container";
import { TopicList } from "@/components/ui/TopicList";
import { home } from "@/content/en/home";

const { roadmaps } = home;
const active = roadmaps.activePhase;

/**
 * «AI Implementation Roadmaps» — node 9314:371.
 * Ліворуч список фаз (перша активна, кольору бренду), праворуч розкритий контент.
 *
 * Макет розкриває контент лише першої фази, тому список поки статичний.
 * Структура (масив `phases` + контент фази) готова до перемикання вкладками,
 * щойно надійдуть тексти решти фаз.
 */
export function Roadmaps() {
  return (
    <section className="bg-surface relative overflow-hidden py-16 lg:py-24">
      {/* Декоративний 3D-об'єкт (node 9330:4593) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/glass-roadmap.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-[509px] -left-[151px] hidden size-[654px] max-w-none rotate-90 lg:block"
      />

      <Container className="relative flex flex-col gap-10 lg:gap-[72px]">
        <h2 className="text-ink lg:text-display-2xl max-w-[940px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
          {roadmaps.title}
        </h2>

        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Список фаз */}
          <TopicList
            items={roadmaps.phases}
            className="shrink-0 lg:w-[459px]"
          />

          {/* Контент активної фази */}
          <div className="flex flex-col gap-[30px]">
            <p className="flex items-center gap-2 text-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icon-calendar.svg"
                alt=""
                aria-hidden="true"
                className="size-5"
              />
              <span className="font-medium text-black">
                {active.durationLabel}
              </span>
              <span className="text-body">{active.duration}</span>
            </p>

            <div className="text-body flex flex-col gap-5 text-lg lg:text-xl">
              {active.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            {active.groups.map((group) => (
              <div key={group.title} className="flex flex-col gap-[14px]">
                <h3 className="text-ink text-lg font-semibold lg:text-xl">
                  {group.title}
                </h3>
                <ul className="flex flex-col gap-[14px]">
                  {group.items.map((item) => (
                    <li key={item.text} className="flex items-start gap-4">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/images/icon-bullet.svg"
                        alt=""
                        aria-hidden="true"
                        className="mt-2 h-[18px] w-[6px] shrink-0"
                      />
                      <p className="text-body text-lg lg:text-xl">
                        {item.lead ? (
                          <span className="font-semibold">{item.lead}</span>
                        ) : null}
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
