import Link from "next/link";
import { introduction } from "../../resources/lib/data.js";

export default function Volumes() {
  return (
    <>
      <h1> Lord of the Rings </h1>
      <p> {introduction} </p>
      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">
            The Fellowship of the Ring
          </Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">The Two Towers</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">
            The Return of the King
          </Link>
        </li>
      </ul>
    </>
  );
}
