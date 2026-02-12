export default function Card({
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
