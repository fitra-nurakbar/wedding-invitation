import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function Wishes() {
  return (
    <section id="wishes" className="bg-white py-12 px-8 ">
      <div className="min-h-120 p-5 rounded-lg bg-gray-100 border-2 border-white shadow-xl">
        <h3 className="font-extralight text-2xl font-yrsa text-center border-b border-gray-200 py-2 mt-5 text-gray-500">Friends Wishes</h3>
        <div className="py-10 mb-20">
          <CommentForm />
          <CommentsList />
        </div>
      </div>
    </section>
  )
}
