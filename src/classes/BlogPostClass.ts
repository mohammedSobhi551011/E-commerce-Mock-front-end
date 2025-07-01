class BlogPost {
  initialBlogPosts: TBlogPost[] = [
    {
      id: 1,
      image: "../../images/blog_posts/Blog-list-img-1.jpg.png",
      title: "Top 10 Winter Essentials For 2022 You Should Try",
      createdAt: "SEPTEMBER 29, 2022",
    },
    {
      id: 2,
      image: "../../images/blog_posts/div.qodef-e-media-image (1).png",
      title: "Premium Consultant Course For You",
      createdAt: "SEPTEMBER 29, 2022",
    },
    {
      id: 3,
      image: "../../images/blog_posts/div.qodef-e-media-image.png",
      title: "The Complete Communication Skills Master Class For Work",
      createdAt: "SEPTEMBER 29, 2022",
    },
  ];
  constructor() {}
  async getBlogPosts() {
    for (let i = 0; i < this.initialBlogPosts.length; i++) {
      try {
        const response = await fetch(this.initialBlogPosts[i].image);
        if (response.ok) {
          const blob = await response.blob();
          this.initialBlogPosts[i].image = URL.createObjectURL(blob);
        } else {
          console.error(
            `Failed to fetch image: ${this.initialBlogPosts[i].image}`
          );
        }
      } catch (error) {
        console.error(
          `Error fetching image: ${this.initialBlogPosts[i].image}`,
          error
        );
      }
    }
    return this.initialBlogPosts;
  }
}
export default BlogPost;
