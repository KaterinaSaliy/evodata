"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { NavItem } from "@/config/site";
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
        <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]">
          {/* Section card */}
          <div className="bg-surface-2 shrink-0 p-5">
            <div className="flex h-full w-[240px] flex-col gap-6 rounded-lg p-3">
              <Image
                src={item.menu.image}
                alt=""
                width={480}
                height={272}
                sizes="240px"
                className="h-[136px] w-[240px] rounded-md object-cover"
              />
              <div className="flex flex-1 flex-col justify-between gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-ink text-base font-semibold">
                    {item.menu.title}
                  </p>
                  <p className="text-body text-sm">{item.menu.description}</p>
                </div>

                <Link
                  href="/about#contact"
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

          {/* List of submenu items */}
          <ul className="flex flex-col gap-3 px-5 py-6">
            {item.menu.items.map((subItem) => (
              <li key={subItem}>
                <Link
                  href={item.href}
                  className="hover:text-ink text-base font-semibold whitespace-nowrap text-gray-500 transition-colors"
                >
                  {subItem}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
