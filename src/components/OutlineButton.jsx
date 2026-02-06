export default function OutlineButton({ children }) {
  return (
    <button className="
      border border-purple-500 px-6 py-3 rounded-lg
      transition-all duration-300
      hover:bg-purple-500
      hover:-translate-y-[2px]
      hover:shadow-[0_0_25px_rgba(168,85,247,0.35)]
    ">
      {children}
    </button>
  );
}
