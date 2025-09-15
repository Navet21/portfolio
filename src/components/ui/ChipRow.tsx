interface Props { items: string[] }

const ChipRow = ({ items }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((it) => (
        <span
          key={it}
          className="px-3 py-1.5 rounded-full text-sm
                     bg-white/5 border border-white/10 text-neutral-200
                     shadow-[0_0_20px_-8px_rgba(255,255,255,0.2)]"
        >
          {it}
        </span>
      ))}
    </div>
  );
};

export default ChipRow;
