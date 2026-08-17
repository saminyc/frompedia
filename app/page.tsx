export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-400">
          FROMpedia
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          A living wiki for the town that won’t let you leave.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Explore characters, locations, episodes, symbols, theories, and AI-powered lore connections from the show FROM.
        </p>
      </section>
    </main>
  );
}