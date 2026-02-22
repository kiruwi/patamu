type DualOutlineBandProps = {
  topText: string;
  bottomText: string;
  alt?: boolean;
};

export default function DualOutlineBand({ topText, bottomText, alt = false }: DualOutlineBandProps) {
  return (
    <section className={`outline-band outline-band-dual reveal${alt ? " alt" : ""}`} aria-hidden="true">
      <p className="outline-line outline-top">{topText}</p>
      <p className="outline-line outline-bottom">{bottomText}</p>
    </section>
  );
}
