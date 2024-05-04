export const BlogCard = ({pitems}) => {
  return (
    <div className="col-lg-6 p-3 border-4 w-56 h-auto bg-slate-400">
        <h1 className="color: bg-red-400">userID: {pitems.userId}</h1>
        <h1>ID: {pitems.id}</h1>
        <p>title: {pitems.title}</p>
        <p>body: {pitems.body}</p>
    </div>
  )
}
