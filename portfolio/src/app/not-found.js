
"use client";
import { useEffect, useState } from "react";

export default function Custom404() {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + "." : ""));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-green-500 font-mono h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl mb-4">404</h1>
      <p className="text-xl mb-2">SYSTEM ERROR: 404 NOT FOUND{dots}</p>
      <p className="text-green-400">↳ Access Denied.</p>
      <a
        href="/"
        className="mt-6 text-green-200 border border-green-500 px-4 py-2 rounded hover:bg-green-500 hover:text-black transition"
      >
        RETURN 
      </a>
    </div>
  );
}
