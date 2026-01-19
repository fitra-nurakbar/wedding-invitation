'use client'

import Cover from "@/components/cover/Cover";
import Footer from "@/components/Footer";
import InvitationCoverClient from "@/components/InvitationCoverClient";
import Menu from "@/components/Menu";
import MusicButton from "@/components/music/MusicButton";
import Wishes from "@/components/wishes/Wishes";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center select-none bg-white">
      {/* FRAME */}
      <div
        className="
          w-full max-w-sm
          sm:rounded-xl sm:border-4 sm:border-primary
          overflow-hidden
          sm:my-4
          sm:h-[calc(100vh-2rem)]
        "
      >
        {/* SCROLL AREA */}
        <div className="max-w-sm sm:max-h-screen sm:overflow-y-auto relative">
          <Suspense fallback={null}>
            <InvitationCoverClient />
          </Suspense>
          <div id="content">
            <Cover />
            <Wishes />
          </div>
          <Footer />
          <MusicButton />
        </div>
        <Menu />
      </div>
    </div>
  );
}