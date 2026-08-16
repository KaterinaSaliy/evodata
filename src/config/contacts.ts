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
 * One rule: a value must not contain "~", "^" or "*" — `scramble` uses those
 * three as stand-ins for "@", "." and "+".
 */
const email = "dh@evo-data.com";

export const contacts = {
  email,
  /** Data controller, named in the Privacy Policy — the same mailbox today. */
  dataProtectionEmail: email,
  phone: "+43 670 1835013",
  /** Dial string for the `tel:` link — digits and a leading plus only. */
  phoneHref: "+436701835013",
  /** Shown under the contacts in the footer. */
  city: "Vienna",
} as const;

export { scramble } from "@/lib/scramble";
