import React from "react";
export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center p-4">
      <p>&copy; {new Date().getFullYear()} Open Austin Landlord Map</p>
    </footer>
  );
}
