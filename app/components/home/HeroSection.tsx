import SiteLogo from "./SiteLogo";
import TopMiniNav from "./TopMiniNav";

export default function HeroSection() {
  return (
    <header className="hero-wrap" id="home">
      <a className="site-logo site-logo--hero" href="#home" aria-label="Patamu home">
        <SiteLogo className="site-logo__image" priority />
      </a>

      <article className="hero-image image-arch" aria-hidden="true" />

      <article className="hero-content">
        <TopMiniNav />

        <h1>
          Patamu
          <span>Restaurant & Lodge</span>
        </h1>

        <p>
          Celebrated for its facilities, atmosphere and service, Patamu Restaurant & Bar offers a
          tranquil setting for business and leisure guests in Karatu, Tanzania.
        </p>

        <p className="hero-symbols">✤ ✤</p>
      </article>
    </header>
  );
}
