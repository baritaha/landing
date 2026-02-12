import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

export default function Header() {
  return (
    <header className="relative z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo (image+text) */}
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/logo.png"
            alt="NovaAI"
            width={110}
            height={32}
            priority
            className="h-8 w-auto"
          />
        </div>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-slate-700 hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_14px_28px_-18px_rgba(37,99,235,0.65)] hover:opacity-95"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile CTA only */}
        <a
          href="#"
          className="md:hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
