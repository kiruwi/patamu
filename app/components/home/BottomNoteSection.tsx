const getCurrentYear = () => new Date().getFullYear();

export default function BottomNoteSection() {
  const currentYear = getCurrentYear();

  return (
    <section className="bottom-note">
      <p>
        Copyright © {currentYear} Patamu Restaurants | Design by{" "}
        <a href="https://iancheruiyot.work/" target="_blank" rel="noreferrer">
          Ian K Cheruiyot
        </a>
      </p>
    </section>
  );
}
