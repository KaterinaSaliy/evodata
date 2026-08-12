import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Сучасні формати зображень (вимога ТЗ: WebP / AVIF). next/image віддає їх
  // автоматично; AVIF додаємо явно першим у списку пріоритету.
  images: {
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves qualities listed here (75 is the default). 90 is for
    // the client's 3D renders: their halftone dot pattern is fine detail that
    // AVIF at 75 smears into blotches — see the About Us slider.
    qualities: [75, 90],
  },

  // Базові безпекові заголовки (покращують Lighthouse Best Practices).
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
