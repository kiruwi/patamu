import SiteLogo from "./SiteLogo";
import TopMiniNav from "./TopMiniNav";

export default function HeroSection() {
  const googleReviewsUrl =
    "https://www.google.com/travel/search?q=patamu%20restaurant%20%26%20lodge&g2lb=4965990%2C72471280%2C72560029%2C72573224%2C72647020%2C72686036%2C72803964%2C72882230%2C72958624%2C73059275%2C73064764&hl=en-KE&gl=ke&cs=1&ssta=1&ts=CAEaRwopEicyJTB4MTgzNDNkMDAwZDgzYmNhOToweDU5YzVlZTg4Njk1MjdjNzMSGhIUCgcI6g8QAxgFEgcI6g8QAxgGGAEyAhAA&qs=CAEyE0Nnb0k4X2pKeW9iUi0tSlpFQUU4AkIJCXN8UmmI7sVZQgkJc3xSaYjuxVk&ap=ugEHcmV2aWV3cw&ictx=111&ved=0CAAQ5JsGahcKEwjw2ZGb04OTAxUAAAAAHQAAAAAQBw";

  return (
    <header className="hero-wrap" id="home">
      <a
        className="hero-global-rating"
        href={googleReviewsUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View Patamu Restaurant and Lodge Google rating of 4.2 from 94 reviews"
      >
        <span className="hero-global-rating__google" aria-hidden="true">
          <svg viewBox="0 0 533.5 544.3" role="presentation" focusable="false">
            <path
              fill="currentColor"
              d="M533.5 278.4c0-18.5-1.5-37-4.7-55.2H272v104.5h147.1c-6.1 33.1-24.9 61.1-53 79.8v66h85.8c50.2-46.2 81.6-114.4 81.6-195.1Z"
            />
            <path
              fill="currentColor"
              d="M272 544.3c73.6 0 135.6-24.4 180.8-66.1l-85.8-66c-23.9 16.3-54.4 25.9-95 25.9-72.9 0-134.7-49.2-156.8-115.3H26.6v68.1c46.2 91.9 141.3 153.4 245.4 153.4Z"
            />
            <path
              fill="currentColor"
              d="M115.2 322.8c-10.4-30.9-10.4-64.5 0-95.4V159.3H26.6c-38.6 76.9-38.6 167.9 0 244.8l88.6-68.1Z"
            />
            <path
              fill="currentColor"
              d="M272 107.7c42 0 79.7 14.5 109.4 42.9l81.8-81.8C407.5 24.4 345.6 0 272 0 167.9 0 72.8 61.5 26.6 159.3l88.6 68.1C137.3 156.9 199.1 107.7 272 107.7Z"
            />
          </svg>
        </span>
        <span className="hero-global-rating__text">
          <strong>4.2</strong> on Google from <strong>94 reviews</strong>
        </span>
        <span className="hero-global-rating__stars" aria-hidden="true">
          ★★★★☆
        </span>
      </a>

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
