interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({ tag, title, subtitle, centered = false }: SectionHeaderProps) {
  return (
    <div style={{ textAlign: centered ? "center" : "left" }}>
      <span
        style={{
          display: "inline-block",
          padding: "0.25rem 0.75rem",
          fontSize: "0.7rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--color-brand-600)",
          backgroundColor: "var(--color-brand-50)",
          border: "1px solid rgba(95,116,248,0.2)",
          borderRadius: "9999px",
          marginBottom: "1rem",
        }}
      >
        {tag}
      </span>
      <h2
        style={{
          fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
          fontWeight: 800,
          marginBottom: "1rem",
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1.0625rem",
            opacity: 0.6,
            lineHeight: 1.7,
            maxWidth: centered ? "40rem" : "36rem",
            margin: centered ? "0 auto" : "0",
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
