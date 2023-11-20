import Head from "next/head";
import React from "react";
import LiveClock from "./LiveClock";
import Menu from "./Menu";
import { Category } from "~/data/type";

interface LayoutProps {
  children: React.ReactNode;
  categories: Category[];
}

const Layout: React.FC<LayoutProps> = ({ children, categories }) => {
  return (
    <>
      <Head>
        <title>TubeBoxy</title>
        <meta name="description" content="TubeBoxy " />
        <link rel="icon" href="/tubeboxy_logo.ico" />
      </Head>

      {/* Background Image */}
      <img
        className="fixed inset-0 -z-10 h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1554147090-e1221a04a025?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Background"
      />

      {/* Blur Overlay */}
      <div className="-z-9 fixed inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 min-h-screen">
        <header className="mb-10 h-16 sm:h-24">
          <nav
            className="mx-auto flex items-center p-6 lg:px-8"
            aria-label="Global"
          >
            <LiveClock />
            <div className="inline-flex w-full  items-center">
              <div className="mx-auto">
                <Menu categories={categories} />
              </div>
            </div>
          </nav>
        </header>
        <main className="mx-auto sm:px-6 lg:px-8">{children}</main>
      </div>
    </>
  );
};

export default Layout;
