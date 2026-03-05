import HomeAnimations from "./home-animations";
import {
  BottomNoteSection,
  DualOutlineBand,
  FeatureSection,
  HeroSection,
  LunchInTheWildSection,
  ServicesSection,
  SiteFooter,
  SocialSection,
  StayIntroSection,
  SuitesSection,
} from "./components/home";
import {
  serviceItems,
  suiteCards,
  topMarqueeText,
} from "./components/home/homeData";

export default function Home() {
  return (
    <div className="gem-shell">
      <HomeAnimations />

      <HeroSection />

      <DualOutlineBand topText={topMarqueeText} bottomText={topMarqueeText} />

      <FeatureSection />

      <LunchInTheWildSection />

      <ServicesSection items={serviceItems} />

      <StayIntroSection />

      <SuitesSection items={suiteCards} />

      <SocialSection />

      <SiteFooter />

      <BottomNoteSection />
    </div>
  );
}
