'use client'

import Couple from "@/components/couple/Couple";
import Cover from "@/components/cover/Cover";
import Event from "@/components/event/Event";
import Footer from "@/components/Footer";
import InvitationCoverClient from "@/components/InvitationCoverClient";
import Menu from "@/components/Menu";
import MusicButton from "@/components/music/MusicButton";
import Story from "@/components/story/Story";
import Wishes from "@/components/wishes/Wishes";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="font-poppins min-h-screen flex justify-center select-none bg-white">
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
          <Cover />
          <Couple />
          <Event />

          <Story />
          <Wishes />
          <Footer />
          <MusicButton />
        </div>
        <Menu />
      </div>
    </div>
  );
}