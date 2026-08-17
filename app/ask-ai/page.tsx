export default function AskAiPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.4em] text-red-400">
          Ask AI
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          Ask the wiki to connect the clues.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Search lore, compare theories, and surface connections across FROM.
        </p>
      </section>
    </main>
  );
}
