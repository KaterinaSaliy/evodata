"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import type { NavItem } from "@/config/site";
import { NavMenuPanel } from "./NavMenuPanel";
import { ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

type NavDropdownProps = {
  item: NavItem & { menu: NonNullable<NavItem["menu"]> };
  isActive: boolean;
};

/**
 * Main-menu item with a dropdown — Figma nodes 9247:100973 (What We Do)
 * and 9254:101016 (Industries).
 *
 * The panel opens on hover and focus (keyboard), and closes on Escape, on a
 * click outside and on blur. The item itself stays a link to the section.
 */
export function NavDropdown({ item, isActive }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  /**
   * The panel hangs centred under its item, which runs it off the window for
   * the items at the ends of the menu. Nudged back by however much it sticks
   * out — written straight to the node, since this is the browser's own
   * geometry rather than anything React needs to know about.
   */
  useLayoutEffect(() => {
    const el = panelRef.current;
    if (!el) return;

    if (!open) {
      el.style.transform = "";
      return;
    }

    const margin = 16;
    el.style.transform = "translateX(-50%)";
    const { left, right } = el.getBoundingClientRect();
    const over = right - (window.innerWidth - margin);
    const under = margin - left;
    const delta = over > 0 ? -over : under > 0 ? under : 0;
    if (delta) el.style.transform = `translateX(calc(-50% + ${delta}px))`;
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) {
          setOpen(false);
        }
      }}
    >
      <div className="flex items-center gap-1">
        <Link
          href={item.href}
          aria-current={isActive ? "page" : undefined}
          className={cn(
            "text-base font-semibold transition-opacity hover:opacity-80",
            isActive && "underline underline-offset-8",
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${item.label} submenu`}
          onClick={() => setOpen((value) => !value)}
          onFocus={() => setOpen(true)}
          className="cursor-pointer p-1"
        >
          <ChevronDownIcon
            className={cn("size-4 transition-transform", open && "rotate-180")}
          />
        </button>
      </div>

      {/* Submenu panel */}
      <div
        id={panelId}
        ref={panelRef}
        hidden={!open}
        // `w-max`: an absolute box is otherwise offered only the width of the
        // menu item it hangs from, and the list would wrap to nothing.
        className="absolute top-full left-1/2 z-50 w-max -translate-x-1/2 pt-4"
      >
        <NavMenuPanel menu={item.menu} href={item.href} />
      </div>
    </div>
  );
}
