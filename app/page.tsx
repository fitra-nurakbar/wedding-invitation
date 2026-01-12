import InvitationCover from "@/components/InvitationCover";
import CommentForm from "@/components/CommentForm";
import CommentsList from "@/components/CommentsList";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center bg-gray-200">
      {/* FRAME */}
      <div
        className="
          w-full max-w-sm
          rounded-xl sm:border-4 border-primary bg-white
          overflow-hidden
          sm:my-4
          sm:h-[calc(100vh-2rem)]
        "
      >
        {/* SCROLL AREA */}
        <div className="sm:max-h-screen sm:overflow-y-auto p-5">
          <InvitationCover />
          <Header />
          <CommentForm />
          <CommentsList />
        </div>
      </div>
    </div>
  );
}