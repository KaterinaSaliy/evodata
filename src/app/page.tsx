import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { Intro } from "@/components/sections/home/Intro";
import { BusinessSolutions } from "@/components/sections/home/BusinessSolutions";
import { Metrics } from "@/components/sections/home/Metrics";
import { AutomationCarousel } from "@/components/sections/home/AutomationCarousel";
import { Roadmaps } from "@/components/sections/home/Roadmaps";
import { Quote } from "@/components/sections/home/Quote";
import { TechnologyLeaders } from "@/components/sections/home/TechnologyLeaders";
import { VideoSection } from "@/components/sections/home/VideoSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { home } from "@/content/en/home";
import { organizationSchema, websiteSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

/** Home page — section order follows Home-Desktop (node 9149:61734). */
export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={websiteSchema()} />

      <Hero />
      <Intro />
      <BusinessSolutions />
      <Metrics />
      <AutomationCarousel />
      <Roadmaps />
      <Quote />
      <TechnologyLeaders />

      {/* Hidden until the client supplies the video: the poster in the design is
          a stock placeholder. Set `video.src` in the home copy to bring it back. */}
      {home.video.src ? <VideoSection /> : null}
    </>
  );
}
