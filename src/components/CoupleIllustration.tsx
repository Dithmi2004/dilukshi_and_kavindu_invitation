import { wedding } from '../data/wedding';

export function CoupleIllustration() {
  const { couple } = wedding.images;

  return (
    <figure className="couple-arch">
      <div className="couple-arch-inner">
        <img src={couple.src} alt={couple.alt} />
      </div>
      <figcaption className="sr-only">{couple.alt}</figcaption>
    </figure>
  );
}
