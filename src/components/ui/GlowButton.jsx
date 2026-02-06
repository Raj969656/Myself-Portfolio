export default function GlowButton({ children, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const primary =
    "bg-purple-500 text-white hover:text-purple-300 hover:shadow-[0_0_35px_rgba(168,85,247,0.6)]";

  const outline =
    "border border-purple-500 text-white hover:text-purple-300 hover:bg-purple-500 hover:shadow-[0_0_35px_rgba(168,85,247,0.55)]";

  return (
    <button
      className={`${base} ${variant === "primary" ? primary : outline}`}
    >
      {children}
    </button>
  );
}
