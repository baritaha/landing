export default function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 text-sm text-slate-700">
      <span className="mt-[7px] h-2 w-2 rounded-full bg-blue-600/80" />
      <span className="leading-6">{children}</span>
    </li>
  );
}
