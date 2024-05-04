import { Blog } from "../Data/Blog"
import { BlogCard } from "./BlogCard"

export const CardSection = () => {
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {Blog.map((v,i) => {
                return (
                    <BlogCard pitems = {v} key = {i} />
                )
            })}

        </div>
    )
}
