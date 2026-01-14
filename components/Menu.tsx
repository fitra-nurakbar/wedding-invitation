'use client';

import Link from "next/link";
import { IconProps } from "@/utils/types/icons";
import { CoupleIcon, CoverIcon, EventIcon, GalleryIcon, WhishesIcon } from "@/components/IconsMenu";

export default function Menu() {
  return (
    <div className="sticky bottom-0 z-20">
      <nav className="bg-linear-to-b from-[#be6462] to-[#913736] rounded-t-lg w-full">
        <div className="linear grid grid-cols-5 divide-x-2 text-center text-xs">
          <MenuItem label="cover" target="cover" icon={CoverIcon} />
          <MenuItem label="couple" target="couple" icon={CoupleIcon} />
          <MenuItem label="event" target="event" icon={EventIcon} />
          <MenuItem label="gallery" target="gallery" icon={GalleryIcon} />
          <MenuItem label="wishes" target="wishes" icon={WhishesIcon} />
        </div>
      </nav>
    </div>
  );
}

function MenuItem({ label, target, icon: Icon, }: { label: string; target: string; icon: React.FC<IconProps>; }) {


  return (
    <Link href={`#${target}`} className="border-white">
      <button className="text-white cursor-pointer hover:text-primary transition-colors pt-1 pb-2 capitalize">
        <Icon className="w-10 h-10 fill-white" />
        <span>{label}</span>
      </button>
    </Link>
  );
}


