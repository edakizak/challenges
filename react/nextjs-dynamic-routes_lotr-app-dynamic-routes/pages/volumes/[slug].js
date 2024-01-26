import { useRouter } from "next/router";
import { volumes } from "../../lib/data.js";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function volumeDetail() {
  const router = useRouter();
  console.log(router);
  console.log(volumes);
  const currentVolume = volumes.find(
    (volume) => volume.slug === router.query.slug
  );

  const { volumeData } = router.query;

  if (!currentVolume) {
    return (
      <>
        <h1>This volume does not exist.</h1>
        <Link href="/volumes">← Back to all volumes</Link>
      </>
    );
  }

  const volumeIndex = volumes.findIndex(
    (volume) => volume.slug === router.query.slug
  );

  return (
    <>
      <h1>Volume Title: {volumeData.title}</h1>
      <p>Volume Description: {volumeData.description}</p>
    </>
  );
}
