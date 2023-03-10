import React from "react";
import Head from "next/head";
import Link from "next/link";

interface Props {
  title?: string;
}

const Layout: React.FC<Props> = ({ children, title = "My Blog" }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>

      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <Link className="text-lg font-bold text-gray-800" href="/">
              My Blog
            </Link>

            <div>
              <Link
                className="mx-2 text-gray-800 hover:text-blue-600"
                href="/blog"
              >
                Blog
              </Link>
              <Link
                className="mx-2 text-gray-800 hover:text-blue-600"
                href="/about"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
