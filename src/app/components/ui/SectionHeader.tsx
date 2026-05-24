interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-950/50 border border-brand-200 dark:border-brand-800/50 rounded-full mb-4">
        {tag}
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}