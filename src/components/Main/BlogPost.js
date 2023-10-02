
import "../../styles/blogPost.css";
import postCover from "../../images/postCoverTwo.webp";

const BlogPost = ({ post }) => {
    return (
        <article className="postUnit">
            <img src={postCover} alt="post image" className="postCoverImage"/>
            <h3>{post.title}</h3>
            <p>{post.place}</p>
        </article>
    )
}

export default BlogPost;