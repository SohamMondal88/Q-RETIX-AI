import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80dvh] flex items-center justify-center bg-[#F8FAFB] px-4">
      <div className="text-center max-w-lg">
        <h1 className="text-6xl sm:text-8xl font-bold text-[#2C4D78] mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#33415C] mb-4">
          Page Not Found
        </h2>
        <p className="text-[#5A6B82] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us help you find your way back.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C4D78] text-white rounded-xl font-semibold hover:bg-[#1a3a5c] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2C4D78]/50"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
