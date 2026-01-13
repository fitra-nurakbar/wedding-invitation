'use client';

import Link from "next/link";

export default function Menu() {
  return (
    <div className="sticky bottom-0 z-20">
      <nav className="bg-linear-to-b from-[#be6462] to-[#913736] rounded-t-lg w-full">
        <div className="linear grid grid-cols-5 divide-x-2 text-center text-xs font-medium">
          <MenuItem label="cover" target="cover" />
          <MenuItem label="couple" target="couple" />
          <MenuItem label="event" target="event" />
          <MenuItem label="gallery" target="gallery" />
          <MenuItem label="wishes" target="wishes" />
        </div>
      </nav>
    </div>
  );
}

function MenuItem({ label, target }: { label: string; target: string }) {


  return (
    <Link href={`#${label}`} className="border-white">
      <button  className="text-white cursor-pointer hover:text-primary transition-colors py-3 capitalize">
          {label}
        </button>
    </Link>
  );
}


