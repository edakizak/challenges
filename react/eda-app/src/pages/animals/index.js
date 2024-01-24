import Head from "next/head";
import animals from "../../data/animals.json";

export default function Animals() {
  return (
    <>
      <Head>
        <title>animals</title>
      </Head>
      {/* head and title add name website sekmesi */}
      <main>
        <h1>list of animals</h1>
        <section>
          {animals.map((animal, i) => (
            <div key={i}>
              <a href={`/animals/${animal.name.toLowerCase()}`}>
                <h1>{animal.name}</h1>
              </a>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
console.log(animals);
