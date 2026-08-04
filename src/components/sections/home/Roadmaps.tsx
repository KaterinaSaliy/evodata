import { Container } from "@/components/layout/Container";
import { Tabs } from "@/components/ui/Tabs";
import { home } from "@/content/en/home";

const { roadmaps } = home;

type Phase = (typeof roadmaps.phases)[number];

/** Content of one phase: duration, paragraphs and grouped lists. */
function PhasePanel({ phase }: { phase: Phase }) {
  return (
    <div className="flex flex-col gap-[30px]">
      <p className="flex items-center gap-2 text-lg">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/icon-calendar.svg"
          alt=""
          aria-hidden="true"
          className="size-5"
        />
        <span className="font-medium text-black">{roadmaps.durationLabel}</span>
        <span className="text-body">{phase.duration}</span>
      </p>

      <div className="text-body flex flex-col gap-5 text-lg lg:text-xl">
        {phase.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {phase.groups.map((group) => (
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
  );
}

/**
 * "AI Implementation Roadmaps" — node 9314:371.
 * List of phases on the left, content of the selected one on the right
 * (the design expands the first phase only).
 *
 * Panels are server-rendered and toggled by the client `Tabs` wrapper, so the
 * copy of all five phases stays in the HTML.
 */
export function Roadmaps() {
  return (
    <section className="bg-surface relative overflow-hidden py-16 lg:py-24">
      {/* Decorative 3D object (node 9330:4593) */}
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

        <Tabs
          listClassName="lg:w-[459px]"
          items={roadmaps.phases.map((phase) => ({
            label: phase.label,
            panel: <PhasePanel phase={phase} />,
          }))}
        />
      </Container>
    </section>
  );
}
