export default function SoftBg() {
  // Soft background with blurred circles
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
