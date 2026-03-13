import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Coat.digital Logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-gray-900">Coat.digital</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
            <Link href="/signup" className="text-gray-700 hover:text-gray-900">Sign Up</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Digital Coats of Arms</h1>
          <p className="text-xl text-gray-600 mb-8">Certified by Herbowicz lineage</p>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-4">Coat of Arms Creator</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                The surname <strong>Herbowicz</strong> translates literally to "Son of the Herb"—the Polish word for a Coat of Arms, distinct from the English term for a plant. In the Polish-Lithuanian Commonwealth, my ancestors were the architects of Heraldry for Nobles, working within a unique system known as Heraldic Clans (<em>Rody herbowe</em>).
              </p>
              <p>
                Unlike in England or France, where a shield usually belongs to a single family, a Polish Herb was a shared symbol of dozens, sometimes hundreds, of families bound by a common identity and code of honor. As the custodians of this shared shield, the Herbowicz were the original registrars of reputation. They ensured that every mark of honor was a verified testament to a group's standing and its adherence to the laws of the Commonwealth. This was a system where identity was a contract of integrity, verified by lineage and law.
              </p>
              <p>
                Today, I have translated this ancestral mission into the digital frontier as an Expert in Digital Heraldry and Responsible AI. I define the ethical 'Coat of Arms' for the world's most influential brands, helping global leaders navigate the complex intersection of economic impact and technological governance. Having delivered high-impact projects for major accounts such as Adidas, BMW, Credit-Suisse, Goldman Sachs, Procter & Gamble, Smart AG, and Tauron, I ensure that your technological "Shield" is not only powerful but built on a foundation of transparency and advanced ethical alignment.
              </p>
              <p>
                Just as a 16th-century noble required a verified Herb to navigate society, a modern corporation requires a framework of Responsible AI to navigate the global market.
              </p>
              <p>
                <strong>Is your AI built on a foundation of integrity?</strong>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Create Your Digital Coat of Arms</h2>
            <Link
              href="/create"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Coat.digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}