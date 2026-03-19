import type { Metadata } from "next"

import {
  AddressSection,
  ContactSection,
  FounderSection,
  HeroSection,
  MetricsSection,
  SuccessSection,
  ServicesSection,
  WhyUsSection,
  FocusAreasSection,
} from "@/components/home"

export const metadata: Metadata = {
  title: "PatentVC",
  description: "PatentVC co-invests with startups and incubators while helping teams build durable patent and trademark assets.",
  alternates: {
    canonical: "/",
  },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <SuccessSection />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <FocusAreasSection />
      <FounderSection />
      <AddressSection />
    </>
  )
}
