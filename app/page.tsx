import InvitationCover from "@/components/InvitationCover";
import CommentForm from "@/components/CommentForm";
import CommentsList from "@/components/CommentsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-8">
      <InvitationCover />
      <CommentForm />
      <CommentsList />
    </div>
  )
}

