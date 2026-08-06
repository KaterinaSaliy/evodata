/**
 * Phone and e-mail, kept out of `siteConfig` on purpose.
 *
 * Address-harvesting bots work in two ways: they read the served HTML looking
 * for `mailto:` and anything shaped like an address, and they grep the JS
 * bundles. So this module must stay **server-side only** — importing it from a
 * `"use client"` component would ship the plain values to the browser and undo
 * the whole thing. Server components pass the scrambled form to `ContactLink`,
 * which puts the real value back together in the browser.
 *
 * To change a contact, edit the readable value here — nothing else to update.
 */
export const contacts = {
  email: "hello@evodata.com",
  phone: "(123) 098-654",
  /** Dial string for the `tel:` link — digits and a leading plus only. */
  phoneHref: "+123098654",
  address: "Warschauer Platz 11-13, 10245 Berlin",
} as const;

export { scramble } from "@/lib/scramble";
