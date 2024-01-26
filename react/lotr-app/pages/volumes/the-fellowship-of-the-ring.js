import Image from "next/image";
import Link from "next/link";
import { volumes } from "../../resources/lib/data.js";

export default function VolumeOne() {
  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  const volume = volumes[volumeIndex];
  const { description, cover, title, books } = volume;

  return (
    <>
      <Link href="/volumes">← All Volumes</Link>
      <h1> The Fellowship of the Ring</h1>
      <p> {description}</p>
      <ul>
        {books.map(({ ordinal, title }) => (
          <li key={title}>
            {ordinal}:{title}
          </li>
        ))}
      </ul>
      <Image src={cover} alt={`${title}`} width={140} height={230} />
    </>
  );
}
