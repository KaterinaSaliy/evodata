import { Container } from "@/components/layout/Container";
import { home } from "@/content/en/home";

/**
 * Блок «evodata in numbers» — node 9406:50219.
 * Макет: білий фон, py 96, gap 64; 4 колонки з верхньою лінією (Gray/300),
 * підпис 24/32 зверху та число 96/90 кольору бренду знизу.
 */
export function Metrics() {
  return (
    <section className="bg-surface py-16 lg:py-24">
      <Container className="flex flex-col gap-10 lg:gap-16">
        <h2 className="text-ink lg:text-display-2xl max-w-[732px] font-serif text-[36px] leading-[1.1] tracking-[-0.02em] sm:text-[52px]">
          {/* «evo» — гротеск кольору бренду, «data» — курсивна антиква */}
          <span className="text-brand font-sans font-medium">evo</span>
          <span className="italic">data</span>
          {home.metrics.titleSuffix}
        </h2>

        <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {home.metrics.items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-6 border-t border-gray-300 pt-[21px] lg:gap-[31px]"
            >
              <dt className="lg:text-display-xs text-[20px] leading-7 font-medium text-black">
                {item.label}
              </dt>
              <dd className="text-brand font-serif text-[64px] leading-[0.94] tracking-[-1.92px] lg:text-[96px] lg:leading-[90px]">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
