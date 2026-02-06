import { useState } from "react";

export default function RippleButton({ children }) {
  const [ripples, setRipples] = useState([]);

  function createRipple(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = rect.width;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = { x, y, id: Date.now() };
    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((r) => r.slice(1));
    }, 600);
  }

  return (
    <button
      onClick={createRipple}
      className="relative overflow-hidden bg-purple-500 px-6 py-3 rounded-lg text-white"
    >
      {ripples.map((r) => (
        <span
          key={r.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            width: "200px",
            height: "200px",
            left: r.x,
            top: r.y,
          }}
        />
      ))}
      {children}
    </button>
  );
}
