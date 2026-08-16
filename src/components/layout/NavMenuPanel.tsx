import Link from "next/link";
import Image from "next/image";
import type { NavMenu } from "@/config/site";
import { cn } from "@/lib/utils";

type NavMenuPanelProps = {
  menu: NavMenu;
  /**
   * Where the submenu items lead. The design gives them no pages of their own,
   * so they all point at the section the menu belongs to.
   */
  href: string;
  /**
   * `row` — the desktop dropdown, card to the left of the list
   * (nodes 9247:100973 and 9254:101016).
   * `stacked` — the same two parts one under the other inside the burger menu
   * (node 9413:92974).
   */
  layout?: "row" | "stacked";
  /** The burger menu closes on any click inside the panel. */
  onNavigate?: () => void;
  className?: string;
};

/**
 * The white panel behind a main-menu item: a list of the section's topics and
 * a card with a picture, a line about the section and a way to get in touch.
 * Both layouts are the same content — only the direction and the size of the
 * picture differ, which is why they share this component.
 */
export function NavMenuPanel({
  menu,
  href,
  layout = "row",
  onNavigate,
  className,
}: NavMenuPanelProps) {
  const stacked = layout === "stacked";

  const list = (
    <ul className="flex flex-col gap-3 px-5 py-6">
      {menu.items.map((entry) => {
        const item =
          typeof entry === "string" ? { label: entry, href } : entry;

        return (
          <li key={item.label}>
            <Link
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "hover:text-ink text-base font-semibold text-gray-500 transition-colors",
                // The list is what sets the width of the desktop panel, so it
                // is capped: the topics of the design fit on one line under
                // that cap (the widest is 341), a longer one wraps instead of
                // stretching the panel across the window.
                !stacked && "block max-w-[360px]",
              )}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );

  const card = (
    <div className={cn("bg-surface-2", stacked ? "p-4" : "shrink-0 p-5")}>
      <div
        className={cn(
          "flex flex-col rounded-lg",
          // 264 is the card of node 9247:100975; its own 12px padding is what
          // leaves the picture the 240 it is drawn at.
          stacked ? "gap-6" : "h-full w-[264px] gap-6 p-3",
        )}
      >
        {/* The frame is the design's, the renders behind it come in whatever
            proportion they were made — hence `fill`, which crops them to it
            instead of asking each one for its own size. */}
        <div
          className={cn(
            "relative overflow-hidden rounded-md",
            stacked ? "aspect-337/200 w-full" : "h-[136px] w-[240px]",
          )}
        >
          <Image
            src={menu.image}
            alt=""
            fill
            sizes={stacked ? "(max-width: 640px) 100vw, 337px" : "240px"}
            // The renders are covered in a fine pattern of dots, which AVIF at
            // the default 75 turns to mush — see README, «Якість зображень».
            quality={90}
            className="object-cover"
          />
        </div>

        <div
          className={cn(
            "flex flex-col",
            stacked ? "gap-10" : "flex-1 justify-between gap-6",
          )}
        >
          <div className="flex flex-col gap-1">
            <p className="text-ink text-base font-semibold">{menu.title}</p>
            <p className="text-body text-sm">{menu.description}</p>
          </div>

          <Link
            href="/about#contact"
            onClick={onNavigate}
            className="group inline-flex w-[122px] flex-col gap-1 text-black"
          >
            <span className="inline-flex items-center gap-1.5 text-lg font-medium">
              Contact Us
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/icon-arrow-right.svg"
                alt=""
                aria-hidden="true"
                className="size-5 transition-transform group-hover:translate-x-1"
              />
            </span>
            <span className="h-px w-full bg-black" />
          </Link>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={cn(
        "flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]",
        stacked && "flex-col",
        className,
      )}
    >
      {stacked ? (
        <>
          {list}
          {card}
        </>
      ) : (
        <>
          {card}
          {list}
        </>
      )}
    </div>
  );
}
