<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# EvoData — project context

Статичний корпоративний сайт (AI/data-послуги) за ТЗ «Evo Data V1.1 **без CMS**».
Верстка 1:1 з Figma (Pixel Perfect).

## Стек

- **Next.js 16** (App Router, Turbopack за замовчуванням), **React 19**, **TypeScript**, **Tailwind CSS v4**.
- Tailwind v4 — CSS-first: дизайн-токени в `src/app/globals.css` через `@theme` (немає `tailwind.config`).
- ESLint + Prettier (`npm run lint` / `npm run format` / `npm run typecheck`).

## Обмеження ТЗ (чого НЕ має бути)

Без CMS, адмінки, бекенду, БД, PHP, форм зворотного зв'язку, реєстрації/авторизації,
кабінетів, магазину, каталогу. Мультимовність — лише **архітектурна підтримка**
(активна одна локаль `en`; тексти винесені в `src/content/<locale>/`).

## Структура

- `src/app/` — маршрути, `layout.tsx` (шрифти, metadata, Header/Footer/Analytics), `sitemap.ts`, `robots.ts`.
- `src/components/` — `layout/` (Header, Footer, Container, Logo), `sections/<page>/` (блоки сторінок),
  `ui/` (кнопки, іконки, LanguageSwitcher), `seo/` (JsonLd), `analytics/`.
- `src/config/` — `site.ts` (бренд, контакти, навігація), `i18n.ts`.
- `src/content/<locale>/` — усі тексти (основа мультимовності).
- `src/lib/` — `utils.ts` (`cn`), `schema.ts` (Schema.org).
- Ассети — локально в `public/{images,videos,fonts}`.

Кожен блок — окремий перевикористовуваний компонент; дублювання не допускається.

## Дизайн Figma

Файл `44TVtukpuNUgx33r2UvHBa`. Desktop Home = node `9149:61734`.
**Доступ до Figma MCP обмежений** (View seat, 6 читань/місяць — вичерпано). Точні
токени/ассети підтягуються з Figma по мірі відновлення доступу; місця, що цього
потребують, позначені `TODO(figma)`.

## Git

Без `Co-Authored-By` / будь-якої AI-атрибуції в комітах.
