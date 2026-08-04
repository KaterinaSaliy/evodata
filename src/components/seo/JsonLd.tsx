import type { Thing, WithContext } from "schema-dts";

type JsonLdProps<T extends Thing> = {
  data: WithContext<T>;
};

/**
 * Renders Schema.org structured data (JSON-LD) as a <script>.
 * `<` is escaped to avoid XSS through the data.
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
