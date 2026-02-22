type SuiteCardItem = {
  title: string;
  subtitle: string;
  imageClass: string;
};

type SuitesSectionProps = {
  items: SuiteCardItem[];
};

export default function SuitesSection({ items }: SuitesSectionProps) {
  return (
    <section className="suite-cards suite-cards-square reveal">
      {items.map((item) => (
        <article key={item.title} className={`suite-card ${item.imageClass}`}>
          <h3>{item.title}</h3>
          <p>{item.subtitle}</p>
        </article>
      ))}
    </section>
  );
}
