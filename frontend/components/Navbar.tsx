import Link from "next/link";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Socials } from "./Socials";
import Account from "./Account";

type NavbarProps = {
  crypto?: boolean;
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Freelance", href: "/freelance" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "mailto:danielsalib98@gmail.com", external: true },
  { name: "Resume", href: "/daniel-salib-resume.pdf", external: true },
];

const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const Navbar = ({ crypto }: NavbarProps) => {
  const router = useRouter();
  let isCrypto = crypto;

  if (!crypto) {
    isCrypto = router.pathname.includes("/crypto");
  }

  const [open, setOpen] = useState(false);
  return (
    <Disclosure
      as="nav"
      className="sticky z-40 top-0 w-full mx-auto blur-3xl bg-opacity-95  bg-shadow-black py-3"
    >
      {({ open }) => (
        <>
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-grow items-center divide-x divide-gray-500">
              {/* Logo */}
              <div className="text-4xl text-green-500 hover:text-green-400 font-semibold pl-4 pr-4 logo-font">
                <Link href="/" passHref>
                  <a>DS</a>
                </Link>
              </div>
              {/* Items */}
              <div className="hidden md:block">
                <div className="space-x-2 flex flex-row pl-4">
                  {navigation.map((item) =>
                    item.external ? (
                      <a href={item.href} key={item.name} target="_blank">
                        <div
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-800 text-green-500"
                              : "text-gray-400 hover:bg-gray-800 hover:text-green-500",
                            "px-2 py-1 rounded-md text-md font-medium cursor-pointer"
                          )}
                        >
                          {item.name}
                        </div>
                      </a>
                    ) : (
                      <Link href={item.href} key={item.name} passHref>
                        <a
                          className={classNames(
                            item.href === router.pathname
                              ? "bg-gray-800 text-green-500"
                              : "text-gray-400 hover:bg-gray-800 hover:text-green-500",
                            "px-2 py-1 rounded-md text-md font-medium cursor-pointer"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    )
                  )}
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
                ) : (
                  <Socials />
                )}
              </div>
              <div className="md:hidden">
                <Disclosure.Button className="flex items-center justify-center p-1 rounded-full text-green-500 hover:text-green-400 focus:outline-none">
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
            <div className="flex flex-col px-2 pt-2 pb-2 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.href === router.pathname
                      ? "bg-gray-800 text-green-600"
                      : "text-gray-400 hover:bg-gray-800 hover:text-green-600",
                    "px-2 py-1 rounded-md text-md font-medium cursor-pointer"
                  )}
                >
                  {item.name}
                </a>
              ))}
              <div className="ml-1 pt-2">
                <Socials />
              </div>
              {isCrypto && (
                <div className="ml-1 pt-2">
                  <Account />
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
