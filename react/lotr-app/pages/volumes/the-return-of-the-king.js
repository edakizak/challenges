import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function VolumeThree() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-return-of-the-king"
  );
  const volume = volumes[volumeIndex];
  const { description, cover, title, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1> The Return of the King</h1>
      <p> {description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}
            {title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`${title}`} width={140} height={230} />
    </>
  );
}
