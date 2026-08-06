/**
 * Generic renderer of text blocks for tabs and expanded sections.
 * The designs (What We Do 9325:1161, Industries 9329:4329) combine the same set
 * of block types in different orders, so the content is described as an array.
 */
export type RichBlock =
  /** Small heading 24/32 */
  | { type: "kicker"; text: string }
  /** Large serif heading 48/60 */
  | { type: "heading"; text: string }
  /** Subheading inside a block 24/32 */
  | { type: "subheading"; text: string }
  /** Semibold line under a kicker 20/30 */
  | { type: "lead"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: readonly string[] }
  | { type: "definitions"; items: readonly { title: string; text: string }[] };

export function RichBlocks({ blocks }: { blocks: readonly RichBlock[] }) {
  return (
    <div className="flex flex-col gap-6">
      {blocks.map((block, index) => {
        switch (block.type) {
          case "kicker":
            return (
              <p
                key={index}
                className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8"
              >
                {block.text}
              </p>
            );

          case "heading":
            return (
              <h3
                key={index}
                className="text-ink font-serif text-[28px] leading-[1.15] tracking-[-0.02em] sm:text-[36px] lg:text-[48px] lg:leading-[60px]"
              >
                {block.text}
              </h3>
            );

          case "subheading":
            return (
              <h4
                key={index}
                className="text-ink text-xl font-semibold lg:text-[24px] lg:leading-8"
              >
                {block.text}
              </h4>
            );

          case "lead":
            return (
              <p
                key={index}
                className="text-ink text-lg font-semibold lg:text-xl"
              >
                {block.text}
              </p>
            );

          case "paragraph":
            return (
              <p key={index} className="text-body text-lg lg:text-xl">
                {block.text}
              </p>
            );

          case "bullets":
            return (
              <ul key={index} className="flex flex-col gap-[14px]">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/images/icon-bullet.svg"
                      alt=""
                      aria-hidden="true"
                      className="mt-2 h-[18px] w-[6px] shrink-0"
                    />
                    <span className="text-body text-lg lg:text-xl">{item}</span>
                  </li>
                ))}
              </ul>
            );

          case "definitions":
            return (
              <dl key={index} className="flex flex-col gap-6">
                {block.items.map((item) => (
                  <div key={item.title} className="flex flex-col gap-1">
                    <dt className="text-ink text-lg font-semibold lg:text-xl">
                      {item.title}
                    </dt>
                    <dd className="text-body text-lg lg:text-xl">
                      {item.text}
                    </dd>
                  </div>
                ))}
              </dl>
            );
        }
      })}
    </div>
  );
}
