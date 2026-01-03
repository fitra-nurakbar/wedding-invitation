import CommentForm from "@/app/components/commentForm";
import CommentList from "@/app/components/commentsList";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 space-y-8">
      <CommentForm />
      <CommentList />
    </div>
  )
}
