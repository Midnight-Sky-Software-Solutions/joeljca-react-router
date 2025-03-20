export default function Blog() {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl grow px-5">
        <h2 className="text-4xl font-serif py-6">Blog</h2>
        <div className="flex flex-col">

          <BlogItem />

        </div>
      </div>
    </div>
  );
}

function BlogItem() {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-2xl font-serif">Some Post Title</h3>
      <p className="text-blue-grey-500">July 31, 2024</p>
      <p className="text-blue-grey-700">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mollis commodo. Suspendisse eu ultricies purus, id porttitor nisl. Nullam gravida urna nisl, in fringilla lacus imperdiet ut. Quisque sit amet nulla faucibus, egestas nibh quis, malesuada leo. Donec efficitur tincidunt nibh at congue. Vestibulum bibendum ac enim vel viverra. Ut at risus non magna feugiat vulputate.
      </p>
    </div>
  );
}