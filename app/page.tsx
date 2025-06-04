import HeroSection from "./component/HeroSection";
import PayoutSection from "./component/Payouts";
import SubHeader from "./component/SubHeader";
import TradeAILanding from "./component/TrustSection";
import VertcalProgress from "./component/VertcalProgress";

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-0 pb-10">
      <main className="h-full pt-24">
        <SubHeader
          bText="Our Process"
          titleStart="Become a"
          higlishtText="Abcd Pro"
          titleEnd="in sec…"
          subTitle="🚀 Sign up. Fund. Trade."
        />
        <VertcalProgress />
        <SubHeader
          bText="Compare Plans"
          titleStart="Compare your"
          higlishtText="Abcd"
          titleEnd="plan"
          subTitle="Flexible Deposits for Every Trader"
        />
        <HeroSection />
        <PayoutSection />
        <TradeAILanding />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
