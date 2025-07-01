import { Typography } from "@material-tailwind/react";

const BlogPost = ({ blogPost, type }: IBlogPostProps) => {
  return (
    <div
      className={`flex ${
        type === "large"
          ? "flex-col w-[85%] items-center"
          : "even:flex-row-reverse even:text-end gap-x-6"
      }`}
    >
      <div
        className={`relative ${
          type === "small" ? (blogPost.id % 2 === 1 ? "rotate-6" : "") : ""
        }`}
      >
        <img src={blogPost.image} className="pointer-events-none" />
        <span className="absolute top-4 left-4 bg-white text-black text-[0.6rem] py-1 px-2 outline outline-1 outline-black">
          {blogPost.createdAt}
        </span>
      </div>
      {type === "large" ? (
        <div className="border-b-2 border-gray-500 h-[1px] w-full mt-5 mb-2"></div>
      ) : (
        ""
      )}
      <div
        className={`flex flex-col gap-y-6  ${
          type === "large" ? "text-center" : "justify-center"
        }`}
      >
        <Typography variant="h6" className="font-normal font-noto-sans">
          {blogPost.title}
        </Typography>
        <Typography
          variant="small"
          color="black"
          className="underline font-bold font-noto-sans text-[0.7rem]"
        >
          <a href="#">Read More</a>
        </Typography>
      </div>
    </div>
  );
};
const BlogPosts = ({ blogPosts }: IBlogPostsProps) => {
  return (
    <>
      <div className="flex flex-col items-center gap-y-10 mb-20">
        {/* ----- READ OUR BLOG POSTS ----- */}
        <div className="flex flex-col items-center">
          <Typography
            variant="h4"
            color="black"
            className="font-normal font-noto-sans"
          >
            Read Our Blog Posts
          </Typography>
          <Typography
            variant="small"
            color="black"
            className="text-center w-3/4 font-noto-sans font-light text-sm"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit, sed
            do eiusmod.
          </Typography>
        </div>
        {/* ----- READ OUR BLOG POSTS ----- */}

        {/* ----- BLOG POSTS FOR MEDIUM AND LARGE SCREENS ----- */}
        <div className="hidden md:flex lg:flex items-start gap-x-6">
          {blogPosts.map((blogPost) => (
            <BlogPost key={blogPost.id} type="large" blogPost={blogPost} />
          ))}
        </div>
        {/* ----- BLOG POSTS FOR MEDIUM AND LARGE SCREENS ----- */}

        {/* ----- BLOG POSTS FOR SMALL AND EXTRASMALL SCREENS ----- */}
        <div className="flex flex-col gap-y-4 md:hidden lg:hidden ">
          {blogPosts.map((blogPost) => (
            <BlogPost key={blogPost.id} type="small" blogPost={blogPost} />
          ))}
        </div>
        {/* ----- BLOG POSTS FOR SMALL AND EXTRASMALL SCREENS ----- */}
      </div>
    </>
  );
};
export default BlogPosts;
