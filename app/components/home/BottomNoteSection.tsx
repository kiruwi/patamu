type BottomNoteSectionProps = {
  points: string[];
};

export default function BottomNoteSection({ points }: BottomNoteSectionProps) {
  return (
    <section className="bottom-note reveal">
      <p>Bush hot lunch highlights: {points.join(" • ")}</p>
    </section>
  );
}
