import type { Thing, WithContext } from "schema-dts";

type JsonLdProps<T extends Thing> = {
  data: WithContext<T>;
};

/**
 * Рендерить структуровані дані Schema.org (JSON-LD) як <script>.
 * Символ `<` екрануємо, щоб уникнути XSS через дані.
 */
export function JsonLd<T extends Thing>({ data }: JsonLdProps<T>) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
