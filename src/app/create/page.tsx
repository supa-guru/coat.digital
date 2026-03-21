export default function CreatePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="/herbowicz/coat-bw-herbowicz.jpeg" alt="Coat.digital Logo" className="h-10 w-auto rounded shadow-sm grayscale hover:grayscale-0 transition-all duration-300" />
            <span className="ml-3 text-xl font-bold text-gray-900">Coat.digital</span>
          </div>
          <nav className="flex space-x-4">
            <a href="/login" className="text-gray-700 hover:text-gray-900">Login</a>
            <a href="/signup" className="text-gray-700 hover:text-gray-900">Sign Up</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Your Digital Coat of Arms</h1>
          <div className="flex flex-col items-center mb-8">
            <img
              src="/herbowicz/coat-herbowicz.jpeg"
              alt="Herbowicz Heritage Seal"
              className="h-24 w-auto rounded-lg shadow-sm border border-gray-200 mb-4"
            />
            <p className="text-xl text-gray-600">Certified by Herbowicz lineage</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Design Your Coat of Arms</h2>
            <p className="text-gray-700 mb-6">
              Choose from a variety of symbols, colors, and designs to create your unique digital coat of arms.
            </p>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Select Symbols</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border border-gray-300 rounded-lg p-4 text-center">
                  <img src="/symbol1.png" alt="Symbol 1" className="h-16 w-16 mx-auto mb-2" />
                  <p>Lion</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 text-center">
                  <img src="/symbol2.png" alt="Symbol 2" className="h-16 w-16 mx-auto mb-2" />
                  <p>Eagle</p>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 text-center">
                  <img src="/symbol3.png" alt="Symbol 3" className="h-16 w-16 mx-auto mb-2" />
                  <p>Shield</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-2">Choose Colors</h3>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-red-500 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
                <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Generate Coat of Arms
            </button>
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