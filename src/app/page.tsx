import {
  AddressSection,
  ContactSection,
  FounderSection,
  Header,
  HeroSection,
  MetricsSection,
  SuccessSection,
  ServicesSection,
  WhyUsSection,
  FocusAreasSection,
} from "@/components/home";

export default function HomePage() {
  return (
    <main className="page-flat min-h-screen text-white">
      <Header />

      <div className="page-flat mx-auto max-w-[1400px] px-4 pb-8 pt-[96px] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1184px]">
          <HeroSection />
          <MetricsSection />
          <SuccessSection />
          <ServicesSection />
          <WhyUsSection />
          <ContactSection />
          <FocusAreasSection />
          <FounderSection />
          <AddressSection />
        </div>
      </div>
    </main>
  );
}
