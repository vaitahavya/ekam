import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F7F4] px-4">
      <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] mb-2">
        Page not found
      </h1>
      <p className="text-[#1A1A1A]/70 mb-6 text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#C6A15B] text-[#111111] font-semibold hover:bg-[#C6A15B]/95 transition-all"
      >
        Back to home
      </Link>
    </div>
  );
}
