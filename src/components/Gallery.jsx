import RevealImage from "./RevealImage";

export default function Gallery() {
  return (
    <section className="py-[30vh] px-10 md:px-24 grid md:grid-cols-3 gap-12">
      <RevealImage src="/g1.jpg" />
      <RevealImage src="/g2.jpg" />
      <RevealImage src="/g3.jpg" />
    </section>
  );
}
