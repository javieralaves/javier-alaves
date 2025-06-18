import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col p-6 sm:p-8 max-w-3xl mx-auto">
      <header className="mt-10">
        <h1 className="text-3xl font-bold">Javier Alaves</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Staff Product Designer
        </p>
        <p className="mt-2">Bringing the world to new standards.</p>
      </header>
      <main className="flex-grow mt-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Articles</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="/articles/reflecting-on-plume-mainnet"
                className="text-blue-600 hover:underline"
              >
                Reflecting on Plume Mainnet
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
