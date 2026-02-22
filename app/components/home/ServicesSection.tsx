type ServicesSectionProps = {
  items: string[];
};

export default function ServicesSection({ items }: ServicesSectionProps) {
  return (
    <section className="menu-split reveal">
      <article className="menu-list-wrap">
        <p className="section-label">Our Services</p>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </article>

      <article className="menu-photo image-bar" aria-hidden="true" />
    </section>
  );
}
