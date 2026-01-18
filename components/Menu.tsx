'use client';

import { useCallback } from "react";
import { IconProps } from "@/utils/types/icons";
import {
  CoupleIcon,
  CoverIcon,
  EventIcon,
  GalleryIcon,
  WhishesIcon,
} from "@/components/IconsMenu";

export default function Menu() {
  return (
    <div className="fixed w-full max-w-sm sm:sticky bottom-0 z-20">
      <nav className="bg-linear-to-b from-[#be6462] to-[#913736] rounded-t-lg w-full">
        <div className="grid grid-cols-5 divide-x-2 text-center text-xs">
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

function MenuItem({
  label,
  target,
  icon: Icon,
}: {
  label: string;
  target: string;
  icon: React.FC<IconProps>;
}) {
  const handleClick = useCallback(() => {
    const el = document.getElementById(target);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // optional: update hash (tanpa ganggu scroll)
    history.replaceState(null, "", `#${target}`);
  }, [target]);

  return (
    <button
      onClick={handleClick}
      className={`
        flex flex-col gap-1 justify-center items-center
        text-white cursor-pointer transition-colors py-1 capitalize w-full
        hover:bg-linear-to-b from-[#f78280] to-[#fc6260]
        ${label === "cover" ? "rounded-tl-lg" : ""}
        ${label === "wishes" ? "rounded-tr-lg" : ""}
      `}
    >
      <Icon className="w-6 h-6 fill-white" />
      <span>{label}</span>
    </button>
  );
}
