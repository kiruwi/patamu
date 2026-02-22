type SuiteCardItem = {
  imageClass: string;
};

type SuitesSectionProps = {
  items: SuiteCardItem[];
};

export default function SuitesSection({ items }: SuitesSectionProps) {
  return (
    <section className="suite-cards suite-cards-scroll reveal">
      <div className="suite-track">
        {items.map((item) => (
          <article key={item.imageClass} className={`suite-card ${item.imageClass}`} aria-hidden="true" />
        ))}
      </div>
    </section>
  );
}
