import Card from "./Card";

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

export default function Features() {
  return (
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
  );
}
