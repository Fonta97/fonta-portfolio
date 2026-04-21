import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found section-pad">
      <p className="eyebrow">404</p>
      <h1>Questa pagina non e nel sistema.</h1>
      <p>
        Il portfolio e ancora qui. Torna alla homepage e riprendi
        l&apos;esperienza principale da li.
      </p>
      <Link href="/">Return home</Link>
    </main>
  );
}
