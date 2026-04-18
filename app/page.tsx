"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard"); // this is where the button goes
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Velora AI
        </h1>

        <p className="text-lg text-gray-400">
          Intelligent systems. Elevated execution.
        </p>

        <button
          onClick={handleClick}
          className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:opacity-80 transition"
        >
          Get Started
        </button>
      </div>
    </main>
  );
}