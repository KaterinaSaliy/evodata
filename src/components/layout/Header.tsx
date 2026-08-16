"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { NavDropdown } from "./NavDropdown";
import { NavMenuPanel } from "./NavMenuPanel";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { MenuIcon, CloseIcon, ChevronDownIcon } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

/**
 * Site header — Figma node 9137:50051 (height 80, transparent over the hero).
 * The active item is underlined. Below lg — burger menu (node 9419:1182).
 */
export function Header() {
  const [open, setOpen] = useState(false);
  /** href of the item whose submenu is expanded in the mobile menu. */
  const [expanded, setExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  // Lock page scrolling while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      {/* Header height: 72 on mobile (node 9406:50031), 80 on desktop */}
      <div className="mx-auto flex h-[72px] w-full max-w-[1440px] items-center justify-between pr-3 pl-4 sm:px-8 lg:h-20 lg:pr-8 lg:pl-[59px]">
        <Link
          href="/"
          aria-label={siteConfig.name}
          onClick={() => setOpen(false)}
        >
          <Logo className="w-[104px]" />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) =>
            item.menu ? (
              <NavDropdown
                key={item.href}
                item={{ ...item, menu: item.menu }}
                isActive={isActive(item.href)}
              />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-base font-semibold transition-opacity hover:opacity-80",
                  isActive(item.href) && "underline underline-offset-8",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitcher />
        </div>

        {/* Burger (mobile/tablet) */}
        <button
          type="button"
          className="rounded-lg p-2 lg:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="size-6" />
        </button>
      </div>

      {/* Mobile menu (node 9419:1182) */}
      {open ? (
        <div className="bg-brand fixed inset-0 z-50 flex flex-col overflow-hidden text-white lg:hidden">
          {/* Decorative 3D object on the right, as in the design */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/hero-glass.webp"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute top-[12%] -right-[35%] w-[110%] max-w-none"
          />

          <div className="relative flex h-[72px] items-center justify-between pr-3 pl-4 sm:px-8">
            <Logo className="w-[104px]" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <CloseIcon className="size-7" />
            </button>
          </div>

          {/* Mobile navigation: items with a submenu expand (node 9413:92974) */}
          <nav className="no-scrollbar relative flex flex-1 flex-col gap-6 overflow-y-auto px-4 pt-6 sm:px-8">
            {siteConfig.nav.map((item) => (
              <div key={item.href} className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "text-base font-semibold",
                      // The design underlines the item whose submenu is open
                      // as well as the one for the current page.
                      (isActive(item.href) || expanded === item.href) &&
                        "underline underline-offset-8",
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.menu ? (
                    <button
                      type="button"
                      aria-expanded={expanded === item.href}
                      aria-label={`${item.label} submenu`}
                      onClick={() =>
                        setExpanded(expanded === item.href ? null : item.href)
                      }
                      className="cursor-pointer p-1"
                    >
                      <ChevronDownIcon
                        className={cn(
                          "size-5 transition-transform",
                          expanded === item.href && "rotate-180",
                        )}
                      />
                    </button>
                  ) : null}
                </div>

                {item.menu && expanded === item.href ? (
                  <NavMenuPanel
                    menu={item.menu}
                    href={item.href}
                    layout="stacked"
                    onNavigate={() => setOpen(false)}
                    // The panel is inset 12px from the screen in the design,
                    // the items around it 16px — hence the pull outwards.
                    className="-mx-1"
                  />
                ) : null}
              </div>
            ))}
          </nav>

          <div className="relative px-4 pt-10 sm:px-8">
            <LanguageSwitcher variant="panel" />
          </div>
        </div>
      ) : null}
    </header>
  );
}
