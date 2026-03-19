import Image from "next/image";

type RouteBannerProps = {
  title: string;
};

export function RouteBanner({ title }: RouteBannerProps) {
  return (
    <section className="relative left-1/2 w-screen max-w-[1400px] -translate-x-1/2 overflow-hidden bg-[#212225]">
      <div className="relative h-[258px] overflow-hidden bg-[#212225]">
        <div className="absolute inset-x-[-24px] bottom-[-188px] h-[420px] rounded-[50%] border border-[#2a2b2e] bg-transparent" />
        <div className="absolute inset-x-[-24px] bottom-[-208px] h-[430px] rounded-[50%] border border-[#2b2c30] bg-transparent opacity-70" />

        <Image
          src="/patentvc/footer-logo-mark.png"
          alt=""
          width={118}
          height={176}
          className="absolute left-[74px] top-[-6px] opacity-[0.12]"
        />
        <Image
          src="/patentvc/footer-logo-mark.png"
          alt=""
          width={118}
          height={176}
          className="absolute right-[88px] top-[6px] opacity-[0.12]"
        />

        <div className="relative z-10 flex h-full flex-col items-center justify-center pt-[6px]">
          <h1 className="font-gilroy-bold text-[32px] leading-[38.4px] tracking-[-0.01em] text-white">{title}</h1>
          <div className="mt-[9px] h-[8px] w-[141px] rotate-[1deg] bg-[#f5744c]" />
        </div>
      </div>
    </section>
  );
}
