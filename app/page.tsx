import CommentList from "@/app/components/CommentsList";
import InvitationCover from "@/app/components/InvitationCover";
import CommentForm from "@/app/components/CommentForm";


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-8">
      <InvitationCover />
      <CommentForm />
      <CommentList />
    </div>
  )
}

