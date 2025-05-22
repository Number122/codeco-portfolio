"use client";

import Link from "next/link";

// تعریف آیتم‌های منو برای استفاده مجدد و مدیریت راحت‌تر
const menuItems = [
  { name: "Clients", href: "/clients" },
  { name: "Calendar", href: "/calendar" },
  { name: "Contact", href: "/contact" },
  { name: "About Me", href: "/about" },
  { name: "Price of Project", href: "/price", highlight: true },
];

interface NavMenuProps {
  position?: "left" | "right";
}

const NavMenu = ({ position = "left" }: NavMenuProps) => {
  const items =
    position === "left" ? menuItems.slice(0, 3) : menuItems.slice(3);

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-6">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`text-base font-medium transition-colors duration-200 hover:text-indigo-600 ${
                item.highlight ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
