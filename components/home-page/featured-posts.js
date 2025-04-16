import PostsGrid from "../posts/posts-grid";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts(props) {
  const { posts } = props;
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
