"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a356a] text-white py-8">
      <div
        className="
          max-w-6xl mx-auto px-4
          flex flex-col gap-8
          sm:flex-row sm:justify-between sm:items-start
        "
      >
        {/* Filters */}
        <div className="flex-1 min-w-[180px] mb-6 sm:mb-0">
          <div className="font-bold mb-3">Filters</div>
          <div className="mb-2 flex flex-wrap gap-3">
            <Link href="#" className="text-white no-underline hover:underline mr-3">
              All
            </Link>
            <Link href="#" className="text-white no-underline hover:underline">
             Electronics
            </Link>
          </div>
          <div className="text-sm mt-6">© 2024 American</div>
        </div>
        {/* About Us */}
        <div className="flex-1 min-w-[180px] mb-6 sm:mb-0">
          <div className="font-bold mb-3">About Us</div>
          <div className="mb-2 flex flex-col gap-1">
            <Link href="#" className="text-white no-underline hover:underline mb-1">
              About Us
            </Link>
            <Link href="#" className="text-white no-underline hover:underline">
              Contact
            </Link>
          </div>
        </div>
        {/* Follow Us */}
        <div className="flex-1 min-w-[180px]">
          <div className="font-bold mb-3">Follow Us</div>
          <div className="flex gap-5">
            <Link href="#" aria-label="Facebook" className="text-white text-2xl hover:text-blue-300 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Twitter" className="text-white text-2xl hover:text-blue-300 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.117 2.823 5.254a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/>
              </svg>
            </Link>
            <Link href="#" aria-label="Instagram" className="text-white text-2xl hover:text-blue-300 transition">
              <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.13 4.602.388 3.635 1.355 2.668 2.322 2.41 3.495 2.352 4.772.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.058 1.277.316 2.45 1.283 3.417.967.967 2.14 1.225 3.417 1.283C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.277-.058 2.45-.316 3.417-1.283.967-.967 1.225-2.14 1.283-3.417.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.058-1.277-.316-2.45-1.283-3.417-.967-.967-2.14-1.225-3.417-1.283C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}