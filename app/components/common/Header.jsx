import React from "react";
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 text-xl font-semibold shadow flex justify-between">
      <div>Open Austin Landlord Map</div>
      <nav>
        <a href="/" className="mr-4 hover:underline">
          Home
        </a>
        <a href="/about" className="hover:underline">
          About Us
        </a>
      </nav>
    </header>
  );
}
