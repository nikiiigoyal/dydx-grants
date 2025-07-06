import TabsFilteringBlogData from "./Tabs";

function Blog() {
  return (
    <>
      <div>
        <h1 className="text-2xl text-center text-white py-4">Blog</h1>
        <div>
          <TabsFilteringBlogData />
        </div>
      </div>
    </>
  );
}
export default Blog;
