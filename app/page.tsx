import InvitationCover from "@/components/InvitationCover";
import CommentForm from "@/components/CommentForm";
import CommentsList from "@/components/CommentsList";
import Cover from "@/components/Cover";
import Menu from "@/components/Menu";
import PageWrapper from "@/components/PageWrapper";
import Wishes from "@/components/Wishes";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center select-none">
      {/* FRAME */}
      <div
        className="
          w-full max-w-sm
          rounded-xl sm:border-4 sm:border-primary
          sm:overflow-hidden
          sm:my-4
          sm:h-[calc(100vh-2rem)]
        "
      >
        {/* SCROLL AREA */}
        <div className="sm:max-h-screen sm:overflow-y-auto">
          <InvitationCover />
          <PageWrapper>
            <Cover />
           <Wishes />
          </PageWrapper>
          <Footer />
        </div>
        <Menu />
      </div>
    </div>
  );
}