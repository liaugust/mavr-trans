"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren, useState } from "react";

const links = [
  { pathname: "/admin/dashboard/leads", label: "Leads" },
  { pathname: "/admin/dashboard/clients", label: "Clients" },
  { pathname: "/admin/settings", label: "Settings" },
];

export default function AdminLayout({ children }: PropsWithChildren) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="relative">
        <div
          className={`fixed  overflow-hidden left-0 top-0 bottom-0 bg-white shadow-[0px_4px_14px_0px_rgba(0,0,0,0.20)] z-[100] ${
            open ? "w-full lg:w-[340px]" : "w-0 lg:w-0"
          } flex flex-col items-center pt-[25px]`}
        >
          <div className="overflow-hidden">
            <Link className="mb-[60px] block" href="/">
              <img src="/logo.svg" alt="Mavt Trans" />
            </Link>

            <ul className="grid gap-y-[30px]">
              {links.map((link) => (
                <li key={link.pathname}>
                  <Link
                    href={link.pathname}
                    className={
                      pathname === link.pathname
                        ? "font-medium relative before:absolute before:h-[1px] before:w-1/2 before:bottom-0 before:left-0 before:bg-primary"
                        : ""
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <button
        className="relative z-[110] left-[15px] top-[15px]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="22"
          viewBox="0 0 36 22"
          fill="none"
          className="text-primary"
        >
          <rect width="36" height="2" fill="currentColor" />
          <rect y="10" width="30" height="2" fill="currentColor" />
          <rect y="20" width="36" height="2" fill="currentColor" />
        </svg>
      </button>
      {children}
    </>
  );
}
