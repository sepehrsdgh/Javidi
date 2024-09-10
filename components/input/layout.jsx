import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <nav className="container mx-auto flex justify-between">
          <div className="text-2xl font-bold">MyApp</div>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
