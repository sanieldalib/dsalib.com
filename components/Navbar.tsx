import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Socials } from "./Socials";
import Account from "./Account";

type NavbarProps = {
  crypto?: boolean
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/experience" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Crypto", href: "/crypto" },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = ({crypto} : NavbarProps) => {
  const router = useRouter();
  let isCrypto = crypto;

  if (!crypto) {
    isCrypto = router.pathname.includes('/crypto');
  }

  const [open, setOpen] = useState(false);
  return (
    <Disclosure
      as="nav"
      className="sticky z-40 top-0 w-full mx-auto blur-3xl bg-opacity-95  bg-white dark:bg-shadow-black py-3"
    >
      {({ open }) => (
        <>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-grow items-center divide-x divide-gray-500">
              {/* Logo */}
              <div className="text-4xl text-green-800 dark:text-green-600 dark:hover:text-green-500 hover:text-green-900 font-semibold pl-4 pr-4 handwriting">
                <Link href="/">DS</Link>
              </div>
              {/* Items */}
              <div className="hidden md:block">
                <div className="space-x-2 flex flex-row pl-4">
                  {navigation.map((item) => (
                    <Link href={item.href} key={item.name}>
                      <div
                        className={classNames(
                          item.href === router.pathname
                            ? "bg-gray-100 dark:bg-gray-800 text-green-900 dark:text-green-600"
                            : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-900 dark:hover:text-green-600",
                          "px-2 py-1 rounded-md text-sm font-medium cursor-pointer"
                        )}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center mx-2">
              <div className="hidden md:block">
                {isCrypto ? (
                  <div className="space-x-4 flex flex-row items-center">
                    <div className="hidden lg:block">
                      <Socials />
                    </div>
                    <Account />
                  </div>
                ) : <Socials />}
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="flex items-center justify-center p-1 rounded-full text-green-900 focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="md:hidden">
            <div className="flex flex-col px-2 pt-2 pb-2 space-y-1 text-center">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.href === router.pathname
                    ? "bg-gray-100 dark:bg-gray-800 text-green-900 dark:text-green-600"
                    : "text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-green-900 dark:hover:text-green-600",
                    "px-2 py-1 rounded-md text-sm font-medium cursor-pointer"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <Socials center />
              {isCrypto && (
                <Account />
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
