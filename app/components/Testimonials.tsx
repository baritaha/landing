import Card from "./Card";
import { TESTIMONIALS } from "../constants";

export default function Testimonials() {
  return (
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
  );
}
