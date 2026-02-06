export default function PrimaryButton({ children }) {
  return (
    <button className="
      bg-purple-500 px-6 py-3 rounded-lg
      transition-all duration-300
      hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]
      hover:-translate-y-[2px]
      active:translate-y-0
    ">
      {children}
    </button>
  );
}
