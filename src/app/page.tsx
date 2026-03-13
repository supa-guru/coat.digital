import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-green-800 text-white">
      <header className="bg-green-900 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Coat.digital Logo" className="h-8 w-auto" />
            <span className="ml-3 text-xl font-bold text-gold-500">Coat.digital</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="/login" className="text-gold-300 hover:text-gold-100">Login</Link>
            <Link href="/signup" className="text-gold-300 hover:text-gold-100">Sign Up</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gold-400 mb-4">Digital Coats of Arms</h1>
          <p className="text-xl text-gold-300 mb-8">Certified by Herbowicz lineage</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-700 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gold-400 mb-4">Coat of Arms Creator</h2>
              <div className="space-y-4 text-gold-200">
                <p>
                  The surname <strong>Herbowicz</strong> translates literally to "Son of the Herb"—the Polish word for a Coat of Arms, distinct from the English term for a plant. In the Polish-Lithuanian Commonwealth, my ancestors were the architects of Heraldry for Nobles, working within a unique system known as Heraldic Clans (<em>Rody herbowe</em>).
                </p>
                <p>
                  Unlike in England or France, where a shield usually belongs to a single family, a Polish Herb was a shared symbol of dozens, sometimes hundreds, of families bound by a common identity and code of honor. As the custodians of this shared shield, the Herbowicz were the original registrars of reputation. They ensured that every mark of honor was a verified testament to a group's standing and its adherence to the laws of the Commonwealth. This was a system where identity was a contract of integrity, verified by lineage and law.
                </p>
                <p>
                  Today, the Herbowicz lineage continues its legacy in the digital age through Coat Digital, a platform dedicated to creating Coats of Arms online. This mission honors our ancestral heritage while embracing modern technology to bring heraldry into the digital frontier. define the ethical 'Coat of Arms' for the world's most influential brands, helping global leaders navigate the complex intersection of economic impact and technological governance. Having delivered high-impact projects for major accounts such as Adidas, BMW, Credit-Suisse, Goldman Sachs, Procter & Gamble, Smart AG, and Tauron, I ensure that your technological "Shield" is not only powerful but built on a foundation of transparency and advanced ethical alignment.
                </p>
                <p>
                  Just as a 16th-century noble required a verified Herb to navigate society, a modern corporation requires a framework of Responsible AI to navigate the global market.
                </p>
                <p>
                  <strong>Is your AI built on a foundation of integrity?</strong>
                </p>
              </div>
            </div>

            <div className="bg-green-700 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gold-400 mb-4">Herbowicz Lineage</h2>
              <div className="space-y-4 text-gold-200">
                <p>
                  The Herbowicz lineage is steeped in history, tracing back to the Polish-Lithuanian Commonwealth where they played a pivotal role in the creation and maintenance of Heraldic Clans. These clans were not just symbols but a system of identity and honor, binding families together under a shared emblem and code of conduct.
                </p>
                <p>
                  As the original registrars of reputation, the Herbowicz ensured that every Coat of Arms was a verified testament to a group's standing and adherence to the laws of the Commonwealth. This legacy of integrity and verification continues today, as we bring the art of heraldry into the digital age.
                </p>
                <p>
                  At Coat Digital, we honor this heritage by creating digital Coats of Arms that embody the same principles of integrity and transparency. Our platform is designed to help modern corporations and individuals navigate the complexities of the digital world with a foundation of ethical alignment and responsible governance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-700 p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gold-400 mb-6">Create Your Digital Coat of Arms</h2>
            <p className="text-gold-200 mb-4">Join us in celebrating this fusion of history and technology, and let's build a future where integrity and transparency are at the forefront of the digital world!</p>
            <Link
              href="/create"
              className="inline-block bg-gold-500 text-green-900 px-6 py-3 rounded-lg hover:bg-gold-400 transition-colors font-semibold"
            >
              Get Started
            </Link>
          </div>
        </div>
      </main>

      <footer className="bg-green-900 border-t border-green-600 mt-12 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gold-300">
          <p>© {new Date().getFullYear()} Coat.digital. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}