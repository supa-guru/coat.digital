import Link from 'next/link';
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-gray-900 animate-gradient">
      <header className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/herbowicz/coat-bw-herbowicz.jpeg" alt="Coat.digital Logo" className="h-10 w-auto rounded" />
            <span className="ml-3 text-xl font-bold text-indigo-600">Coat.digital</span>
          </div>
          <nav className="flex space-x-4">
            <Link href="/login" className="text-indigo-600 hover:text-indigo-800">Login</Link>
            <Link href="/signup" className="text-indigo-600 hover:text-indigo-800">Sign Up</Link>
          </nav>
        </div>
      </header>

      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-indigo-900 mb-4 tracking-tight">The Architect of Digital Identity</h1>
          <p className="text-xl text-gray-600 font-medium">Verified by the Herbowicz Lineage</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-indigo-800 mb-6">The Herbowicz Legacy</h2>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                The surname <strong>Herbowicz</strong> translates literally to <em>"Son of the Herb"</em>—referring to the Polish term for a Coat of Arms. In the Polish-Lithuanian Commonwealth, this lineage served as the architects of a unique heraldic system: the <strong>Heraldic Clan (Rody herbowe)</strong>. 
              </p>
              <p>
                Unlike Western European heraldry, where a shield is typically restricted to a single family, a Polish <em>Herb</em> was a communal symbol. It represented a brotherhood of noble families, often numbering in the hundreds, bound not by blood but by a shared identity and a collective code of honor. This system treated identity as a social contract of integrity, where the shield was a verified testament to a group's standing.
              </p>
              <p>
                Today, Coat Digital translates this ancestral role into the modern era. We define the ethical "Shield" for influential entities, ensuring that technological governance and digital identity are built upon a foundation of transparency and verified alignment. Just as a 16th-century noble required a verified Herb to navigate the Commonwealth, a modern organization requires a framework of Responsible AI to navigate the global digital market.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <div className="flex flex-col sm:flex-row gap-6 mb-8">
                <div className="flex-1">
                  <img
                    src="/herbowicz/coat-herbowicz.jpeg"
                    alt="Herbowicz Coat of Arms in Color"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="/herbowicz/coat-bw-herbowicz.jpeg"
                    alt="Herbowicz Coat of Arms in Black and White"
                    className="w-full h-auto rounded-xl shadow-md"
                  />
                </div>
              </div>

              <div className="bg-indigo-900 text-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4 border-b border-indigo-700 pb-2 italic">Official Blazonry</h3>
                <div className="space-y-4 font-serif text-sm">
                  <p>
                    <span className="font-bold text-indigo-300 uppercase tracking-wider">Shield:</span> Vert, a central Cross Patonce Or, between four Crosses Patonce of the same in the cantons.
                  </p>
                  <p>
                    <span className="font-bold text-indigo-300 uppercase tracking-wider">Crest:</span> On a Polish noble's coronet Or, an Eagle's head erased Or. The coronet is further ensigned with a sixth Cross Patonce at the summit.
                  </p>
                  <div className="mt-4 pt-4 border-t border-indigo-700 leading-relaxed text-indigo-200">
                    <p>
                      The <strong>Six Crosses</strong> constitute the "Seal of the Registrar." Five crosses on the shield represent the four corners of the world unified by a central pillar of truth. The sixth cross, positioned atop the noble's crown, signifies the divine oversight of reputation—a literal "signature" of the Herbowicz as the custodians of heraldic law.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-3xl p-12 text-center text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Forge Your Digital Shield</h2>
            <p className="text-indigo-100 mb-8 max-w-2xl mx-auto text-lg">
              Bring the integrity of classical heraldry into the digital age. Create a verified mark of honor that reflects your organization's ethical alignment and technological governance.
            </p>
            <Link
              href="/create"
              className="inline-block bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all font-bold shadow-lg text-lg"
            >
              Get Started
            </Link>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('/herbowicz/coat-bw-herbowicz.jpeg')] bg-repeat bg-[length:100px_100px]"></div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Coat.digital. All rights reserved. The Herbowicz heraldic system is a protected historical legacy.</p>
        </div>
      </footer>

    </div>
  );
}