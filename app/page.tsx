import Image from "next/image";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Support", href: "#support" },
];

const FEATURE_CARDS = [
  {
    title: "AI Writing Assistance",
    desc: "Write faster with smart AI",
    icon: "✍️",
  },
  { title: "Image Generation", desc: "Create stunning images", icon: "🖼️" },
  { title: "AI Chatbot", desc: "Get instant answers anytime", icon: "💬" },
];

const HOW_IT_WORKS = [
  { n: 1, title: "Sign Up", desc: "Create your account instantly" },
  { n: 2, title: "Customize", desc: "Set preferences in seconds" },
  { n: 3, title: "Generate Results", desc: "Get outputs fast and easy" },
];

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Startup Founder",
    quote: "NovaAI transformed our workflow. Highly recommended",
  },
  {
    name: "David L.",
    role: "Marketing Director",
    quote: "NovaAI saved our time daily. Super smooth results",
  },
  {
    name: "Emily R.",
    role: "Product Manager",
    quote: "NovaAI boosted our productivity. Very impressive",
  },
];

const FAQS = [
  {
    q: "How does the free trial work",
    a: "You can try NovaAI with no card required and cancel anytime.",
  },
  {
    q: "Can I cancel anytime",
    a: "Yes. You can cancel from your billing settings in a few clicks.",
  },
  {
    q: "Is customer support available 24/7",
    a: "Yes, support is available around the clock.",
  },
  {
    q: "Do you offer team discounts",
    a: "Yes. Contact us for team and enterprise pricing.",
  },
];

function SoftBg() {
  // نفس فكرة الخلفية “الناعمة” في تصميمك (دوائر ضبابية)
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full bg-sky-200/35 blur-3xl" />
      <div className="absolute right-[-180px] top-[-120px] h-[520px] w-[520px] rounded-full bg-indigo-200/35 blur-3xl" />
      <div className="absolute left-1/2 top-[260px] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-100/40 blur-3xl" />
    </div>
  );
}

function Card({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      id={id}
      className={[
        "rounded-[22px] border border-slate-200/70 bg-white/80 backdrop-blur",
        "shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}



function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700">
      <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600/80" />
      <span className="leading-6">{children}</span>
    </li>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F7FAFF] text-slate-900">
      <SoftBg />

      {/* NAVBAR (Features / Pricing / Support / Get Started) */}
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

          {/* Mobile CTA only (مثل ما بنعمل لاحقًا hamburger إذا بدك) */}
          <a
            href="#"
            className="md:hidden rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-sm font-semibold text-white"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden">
        {/* الخلفية */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-indigo-50" />
        <div className="absolute -right-48 top-[-120px] h-[520px] w-[520px] rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute right-40 top-32 h-[420px] w-[420px] rounded-full bg-indigo-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-14">
          <div className="grid items-center gap-10 md:grid-cols-2">
            {/* النص */}
            <div>
              <h1 className="text-[52px] leading-[1.05] font-extrabold tracking-tight text-slate-900">
                Supercharge your <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Workflow
                </span>{" "}
                with{" "}
                <span className="bg-gradient-to-r from-indigo-400 to-sky-400 bg-clip-text text-transparent">
                  AI Power
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-lg text-slate-600">
                The #1 AI toolkit to boost your productivity and creativity
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
                  href="#"
                >
                  Get Started
                </a>

                <a
                  className="flex items-center gap-3 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                  href="#"
                >
                  <span className="h-3 w-3 rounded-full bg-blue-600" />
                  Watch Demo
                </a>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <span className="text-slate-900">✓</span>
                <span>No Card Required</span>
              </div>

              <p className="mt-10 text-sm font-semibold text-slate-500">
                Trusted by over <span className="text-slate-900">5,000+</span>{" "}
                teams worldwide
              </p>

      

<div className="mt-4 flex flex-wrap items-center gap-8">
  <Image
    src="/assets/images/google logo.png"
    alt="Google"
    width={110}
    height={32}
    className="h-5 w-auto object-contain"
  />
  <Image
    src="/assets/images/slack.png"
    alt="Slack"
    width={110}
    height={32}
    className="h-5 w-auto object-contain"
  />
  <Image
    src="/assets/images/dropbox.png"
    alt="Dropbox"
    width={125}
    height={32}
    className="h-5 w-auto object-contain"
  />
  <Image
    src="/assets/images/zapier.png"
    alt="Zapier"
    width={110}
    height={32}
    className="h-5 w-auto object-contain"
  />
</div>

            </div>

            {/* الصورة */}
            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-indigo-200/30 blur-3xl" />

              <div className="relative ml-auto w-[560px] max-w-full">
                <div className="overflow-hidden rounded-[24px] bg-white shadow-[0_40px_80px_-55px_rgba(2,6,23,0.55)]">
                  <Image
                    src="/assets/images/AI.png"
                    alt="NovaAI hero"
                    width={1200}
                    height={800}
                    className="w-full -rotate-2 object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MID GRID: Left (Features + How it works) | Right (Pricing + CTA) */}
      <section id="features" className="relative z-10 pb-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          {/* Left big card */}
          <Card className="p-6 md:p-7">
            <h2 className="text-lg font-extrabold text-slate-900">
              Explore Our Powerful Features
            </h2>

            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {FEATURE_CARDS.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.5)]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                    <span className="text-lg">{f.icon}</span>
                  </div>
                  <div className="mt-3 text-sm font-bold">{f.title}</div>
                  <div className="mt-1 text-xs text-slate-600">{f.desc}</div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <h3 className="text-lg font-extrabold text-slate-900">
                How It Works
              </h3>
              <div className="mt-4 grid gap-4 md:grid-cols-3">
                {HOW_IT_WORKS.map((s) => (
                  <div
                    key={s.title}
                    className="rounded-2xl border border-slate-200/70 bg-white p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600/10 text-sm font-extrabold text-blue-700">
                        {s.n}
                      </span>
                      <span className="text-sm font-extrabold">{s.title}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-slate-600">
                      {s.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right big card */}
          <Card id="pricing" className="p-6 md:p-7">
            <h2 className="text-lg font-extrabold text-slate-900">
              How It Works
            </h2>

            {/* Pricing cards row */}
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {/* Basic */}
              <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.5)]">
                <div className="text-sm font-extrabold">Basic</div>
                <div className="mt-3 flex items-end gap-2">
                  <div className="text-2xl font-extrabold">$ 19</div>
                  <div className="pb-[2px] text-xs text-slate-500">/ month</div>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  Essential features
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-blue-600 px-4 text-sm font-bold text-white hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>

              {/* Pro */}
              <div className="rounded-2xl border border-slate-200/70 bg-white p-4 shadow-[0_10px_24px_-20px_rgba(15,23,42,0.5)]">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-extrabold">Pro</div>
                  <span className="rounded-full bg-blue-600 px-3 py-1 text-[11px] font-bold text-white">
                    Most Popular
                  </span>
                </div>
                <div className="mt-3 flex items-end gap-2">
                  <div className="text-2xl font-extrabold">$ 39</div>
                  <div className="pb-[2px] text-xs text-slate-500">/ month</div>
                </div>
                <div className="mt-2 text-xs text-slate-600">
                  All features & priority support
                </div>
                <a
                  href="#"
                  className="mt-4 inline-flex h-10 w-full items-center justify-center rounded-full bg-slate-900 px-4 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Get Started
                </a>
              </div>
            </div>

            {/* CTA bar */}
            <div className="mt-6 rounded-2xl bg-slate-900 p-4 text-white">
              <div className="text-sm font-extrabold">
                Get NovaAI and level up your business!
              </div>
              <a
                href="#"
                className="mt-3 inline-flex h-10 items-center justify-center rounded-full bg-white px-5 text-sm font-bold text-slate-900 hover:bg-slate-100"
              >
                Buy Now
              </a>
            </div>
          </Card>
        </div>
      </section>

      {/* LOWER GRID: Testimonials | FAQ + Stats */}
      <section className="relative z-10 pb-10">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2">
          {/* Testimonials */}
          <Card className="p-6 md:p-7">
            <h2 className="text-lg font-extrabold">Testimonials</h2>
            <p className="mt-2 text-sm text-slate-600">
              Trusted by teams worldwide—here’s what our customers think about
              NovaAI
            </p>

            <div className="mt-5 grid gap-4">
              {TESTIMONIALS.map((t) => (
                <div
                  key={t.name}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/70 bg-white p-4"
                >
                  {/* avatar placeholder */}
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-extrabold">
                    {t.name.split(" ")[0][0]}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="text-sm text-slate-700">{t.quote}</div>
                    <div className="mt-2 text-xs text-slate-500">
                      <span className="font-semibold text-slate-800">
                        {t.name}
                      </span>{" "}
                      — {t.role}
                    </div>
                  </div>

                  <div className="grid h-7 w-7 place-items-center rounded-full bg-blue-600/10 text-blue-700">
                    ✓
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* FAQ + Stats */}
          <Card className="p-6 md:p-7">
            <h2 className="text-lg font-extrabold">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Quick answers to common questions about NovaAI
            </p>

            <div className="mt-5 grid gap-3">
              {FAQS.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-slate-200/70 bg-white px-4 py-3"
                >
                  <summary className="cursor-pointer list-none text-sm font-semibold text-slate-800">
                    {f.q}
                    <span className="float-right text-slate-400 transition group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>

            {/* Stats row */}
            <div className="mt-5 grid grid-cols-3 gap-3 rounded-2xl border border-slate-200/70 bg-white p-4">
              <div className="text-center">
                <div className="text-lg font-extrabold">5,000+</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Teams Worldwide
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">98%</div>
                <div className="mt-1 text-[11px] text-slate-500">
                  Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-extrabold">24/7</div>
                <div className="mt-1 text-[11px] text-slate-500">Support</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="support"
        className="relative z-10 mt-2 bg-gradient-to-b from-purple-100/60 to-indigo-100/40 backdrop-blur"
      >
        <div className="mx-auto max-w-6xl px-5 py-12">
          {/* Main Grid: Logo + Services + Quick Links + Support + Newsletter (5 columns) */}
          <div className="grid gap-10 md:grid-cols-5">
            {/* left brand */}
            <div>
              <Image
                src="/assets/images/logo.png"
                alt="NovaAI"
                width={120}
                height={34}
                className="h-8 w-auto"
              />
              <p className="mt-4 text-sm text-slate-700">
                Supercharge your workflow <br />
                with AI-powered tools
              </p>
              <p className="mt-2 text-sm text-slate-500">
                Trusted by 5,000+ teams worldwide
              </p>

              <div className="mt-5 flex items-center gap-3">
                <a
                  className="grid h-9 w-9 place-items-center rounded-full bg-blue-600 text-white"
                  href="#"
                >
                  f
                </a>
                <a
                  className="grid h-9 w-9 place-items-center rounded-full bg-black text-white"
                  href="#"
                >
                  X
                </a>
                <a
                  className="grid h-9 w-9 place-items-center rounded-full bg-[#0A66C2] text-white"
                  href="#"
                >
                  in
                </a>
                <a
                  className="grid h-9 w-9 place-items-center rounded-full text-white"
                  style={{
                    background:
                      "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
                  }}
                  href="#"
                >
                  ig
                </a>
              </div>

              <p className="mt-6 text-xs text-slate-400">
                © 2026 NovaAI. All rights reserved
              </p>
            </div>

            {/* services */}
            <div>
              <h4 className="border-b-2 border-blue-600 pb-2 text-sm font-extrabold text-slate-900 inline-block">
                Our Services
              </h4>
              <ul className="mt-4 space-y-3">
                <Bullet>AI Writing Assistant</Bullet>
                <Bullet>Image Generation</Bullet>
                <Bullet>Templates</Bullet>
                <Bullet>AI Chatbot</Bullet>
              </ul>
            </div>

            {/* quick links */}
            <div>
              <h4 className="border-b-2 border-blue-600 pb-2 text-sm font-extrabold text-slate-900 inline-block">
                Quick Links
              </h4>
              <ul className="mt-4 space-y-3">
                <Bullet>Features</Bullet>
                <Bullet>Pricing</Bullet>
                <Bullet>Testimonials</Bullet>
                <Bullet>FAQs</Bullet>
              </ul>
            </div>

            {/* support */}
            <div>
              <h4 className="border-b-2 border-blue-600 pb-2 text-sm font-extrabold text-slate-900 inline-block">Support</h4>
              <ul className="mt-4 space-y-3">
                <Bullet>Help Center</Bullet>
                <Bullet>Documentation</Bullet>
                <Bullet>Privacy Policy</Bullet>
                <Bullet>Terms & Conditions</Bullet>
              </ul>
            </div>

            {/* Newsletter as 5th column */}
            <div>
              <h4 className="border-b-2 border-blue-600 pb-2 text-sm font-extrabold text-slate-900 inline-block">
                Subscribe to our newsletter
              </h4>
              <p className="mt-4 text-sm text-slate-600">
                Get product updates, AI tips, and exclusive offers
              </p>

              <div className="mt-3 flex items-center overflow-hidden rounded-full border border-slate-200 bg-white shadow-sm">
                <input
                  className="h-10 w-full px-4 text-sm outline-none"
                  placeholder="Enter your email"
                />
                <button className="h-10 shrink-0 bg-gradient-to-r from-purple-500 to-indigo-600 px-4 text-sm font-bold text-white hover:opacity-90">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Divider and Bottom Stats */}
          <div className="mt-10 border-t border-slate-300/40 pt-6">
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="font-semibold text-slate-700">Privacy Policy</span>
              <span>|</span>
              <span className="font-semibold text-slate-700">Terms of Service</span>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-lg font-bold text-blue-600 shadow-sm">
                  ✓
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">5,000+</div>
                  <div className="text-[11px] text-slate-500">Teams Worldwide</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-lg font-bold shadow-sm">
                  😊
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">98%</div>
                  <div className="text-[11px] text-slate-500">Satisfaction</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-lg font-bold text-blue-600 shadow-sm">
                  ⚡
                </div>
                <div>
                  <div className="font-extrabold text-slate-900">24/7</div>
                  <div className="text-[11px] text-slate-500">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
