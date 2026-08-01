import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { DragScroller } from "@/components/ui/DragScroller";
import { home } from "@/content/en/home";

const { automation } = home;

/**
 * «We develop and implement custom AI solutions…» — node 9165:260193.
 * Заголовок + горизонтальна стрічка карток (950×600) із перетягуванням мишею.
 *
 * Розбіжність макета: у картці case study текст заданий білим на білій картці
 * (node 9165:260211) — нечитабельно, тому використано основний колір тексту.
 */
export function AutomationCarousel() {
  return (
    <section className="bg-surface-2 py-16 lg:py-24">
      <Container className="flex flex-col gap-8 lg:gap-12">
        <h2 className="text-ink lg:text-display-2xl max-w-[1013px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] whitespace-pre-line sm:text-[52px]">
          {automation.title.before}
          <em className="text-brand italic">{automation.title.accent}</em>
          {automation.title.after}
        </h2>
        <hr className="border-t border-gray-300" />
      </Container>

      <DragScroller
        ariaLabel={automation.feature.title}
        className="mt-10 flex gap-[23px] px-5 sm:px-8 lg:mt-16 lg:px-16"
      >
        {/* Картка case study */}
        <article className="flex h-[600px] w-[950px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src={automation.caseStudy.image}
            alt=""
            width={419}
            height={600}
            sizes="419px"
            className="h-full w-[419px] shrink-0 object-cover"
          />
          <div className="flex w-[428px] flex-col justify-between px-[54px] py-[42px]">
            <p className="text-lg font-medium text-gray-400">
              {automation.caseStudy.meta}
            </p>
            <div className="flex flex-col gap-12">
              <p className="text-ink lg:text-display-xs text-[20px] leading-8 font-medium">
                {automation.caseStudy.text}
              </p>
              <div className="flex flex-col gap-12">
                <hr className="border-t border-gray-300" />
                <ul className="flex gap-2">
                  {automation.caseStudy.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-2xl border-[1.5px] border-gray-500 px-3 py-1 text-sm font-medium text-gray-500"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>

        {/* Картка напряму */}
        <article className="flex h-[600px] w-[950px] shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-white">
          <Image
            src={automation.feature.image}
            alt=""
            width={419}
            height={600}
            sizes="419px"
            className="h-full w-[419px] shrink-0 object-cover"
          />
          <div className="flex w-[428px] flex-col gap-6 px-[54px] py-[42px]">
            <h3 className="text-ink font-serif text-[44px] leading-[1.15] tracking-[-1.2px] lg:text-[60px] lg:leading-[72px]">
              {automation.feature.title}
            </h3>
            <p className="text-body text-xl font-medium">
              {automation.feature.description}
            </p>
          </div>
        </article>

        {/* Картка-підказка «DRAG» */}
        <div className="relative h-[600px] w-[419px] shrink-0 overflow-hidden rounded-xl shadow-sm">
          <Image
            src={automation.dragImage}
            alt=""
            width={419}
            height={600}
            sizes="419px"
            className="h-full w-full object-cover"
          />
          <span
            aria-hidden="true"
            className="absolute top-[226px] left-[47px] flex size-24 items-center justify-center rounded-full bg-white text-lg font-semibold text-black"
          >
            {automation.dragHint}
          </span>
        </div>
      </DragScroller>
    </section>
  );
}
