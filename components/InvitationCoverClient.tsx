'use client'

import { useSearchParams } from "next/navigation";
import InvitationCover from "./InvitationCover";
import { Suspense } from "react";

function InvitationCoverInner() {
  const searchParams = useSearchParams();
  const guestName = searchParams.get("to") ?? "Tamu";

  return <InvitationCover guestName={decodeURIComponent(guestName)} />;
}

export default function InvitationCoverClient() {
  return (
    <Suspense fallback={null}>
      <InvitationCoverInner />
    </Suspense>
  );
}
