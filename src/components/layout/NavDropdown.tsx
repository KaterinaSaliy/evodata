"use client";

import { useEffect, useId, useRef, useState } from "react";
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
  const panelId = useId();

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
        hidden={!open}
        className="absolute top-full left-1/2 z-50 -translate-x-1/2 pt-4"
      >
        <NavMenuPanel menu={item.menu} href={item.href} />
      </div>
    </div>
  );
}
