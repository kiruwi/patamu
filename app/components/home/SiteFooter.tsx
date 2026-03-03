import SiteLogo from "./SiteLogo";

export default function SiteFooter() {
  return (
    <footer className="gem-footer reveal">
      <div>
        <a href="/menu">Menu</a>
        <a href="#accommodation">Stay</a>
        <a href="#welcome">Story</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer-center">
        <SiteLogo className="footer-logo" />
        <div aria-hidden="true">
          <span>◌</span>
          <span>◌</span>
          <span>◌</span>
        </div>
      </div>

      <div>
        <a href="tel:+255620600100">+255 620 600 100</a>
        <a href="tel:+255762413810">+255 762 413 810</a>
        <a href="#">Karatu Town, Tanzania</a>
        <a href="mailto:reservations@patamurestaurants.com">reservations@patamurestaurants.com</a>
      </div>
    </footer>
  );
}
