import InvitationCover from "@/app/components/InvitationCover";
import CommentForm from "@/app/components/CommentForm";
import CommentsList from "@/app/components/CommentsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-8">
      <InvitationCover />
      <CommentForm />
      <CommentsList />
    </div>
  )
}

