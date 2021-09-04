import { ReactElement, useState } from "react";
import Link from "next/link";

import React from "react";

export default function Navbar(): ReactElement {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between py-3 bg-gray-900 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white">
                Ponto 7 Veículos
              </a>
            </Link>
            <button
              className="z-10 text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link href="/quemsomos">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400">
                    <span className="ml-2">Quem Somos</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/seminovos">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400">
                    <span className="ml-2">Semi Novos</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/contato">
                  <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-yellow-400">
                    <span className="ml-2">Contato</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
