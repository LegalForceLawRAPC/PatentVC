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
} from "@/components/home";

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
  );
}
