import { Link } from "react-router-dom";

const links = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact Us", to: "/contact-us" },
];

export default function NavBar({ cartItemCount }) {
    return (
        <header className="grid grid-cols-[1fr_auto_1fr] items-center border-b border-[#d1e7e5] px-2 py-3 sm:px-5">
            <Link
                className="justify-self-start text-lg font-bold text-[#0f766e]"
                to="/"
            >
                Store
            </Link>
            <nav className="flex items-center gap-0 justify-self-center sm:gap-2">
                {links.map((link) => (
                    <Link
                        className="px-1.5 py-2 text-[13px] text-neutral-700 hover:text-[#0f766e] sm:px-3 sm:text-sm"
                        key={link.to}
                        to={link.to}
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
            <Link
                className="flex items-center gap-1.5 justify-self-end text-[#0f766e]"
                to="/cart"
            >
                <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    viewBox="0 0 24 24"
                >
                    <path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 1.9-1.4L22 7H6" />
                    <circle cx="10" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                </svg>
                <span className="inline-flex h-[22px] min-w-[22px] items-center justify-center rounded-full bg-[#0f766e] px-[5px] text-xs text-white">
                    {cartItemCount}
                </span>
            </Link>
        </header>
    );
}
