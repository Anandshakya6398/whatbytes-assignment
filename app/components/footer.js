"use client";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react";

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
            <Link href="https://www.facebook.com/" target="_blank" aria-label="Facebook" className="text-white text-2xl hover:text-blue-300 transition">
              <Facebook size={22} />
            </Link>
            <Link href="https://x.com/?lang=en-in" target="_blank" aria-label="Twitter" className="text-white text-2xl hover:text-blue-300 transition">
              <Twitter size={22} />
            </Link>
            <Link href="https://www.instagram.com/" target="_blank" aria-label="Instagram" className="text-white text-2xl hover:text-blue-300 transition">
              <Instagram size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}