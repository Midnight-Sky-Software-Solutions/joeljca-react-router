export default function Portfolio() {
  return (
    <div className="flex justify-center" id="portfolio">
      <div className="max-w-6xl grow mt-6">
        <h2 className="text-4xl font-serif py-6">Portfolio</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[url(/strength-journal.png)] bg-cover bg-center h-100">
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-serif">Strength Journal</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mollis commodo. Suspendisse eu ultricies purus, id porttitor nisl. Nullam gravida urna nisl, in fringilla lacus imperdiet ut. Quisque sit amet nulla faucibus, egestas nibh quis, malesuada leo. Donec efficitur tincidunt nibh at congue. Vestibulum bibendum ac enim vel viverra. Ut at risus non magna feugiat vulputate.
            </p>
            <div>
              <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl">Demo</button>
              <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl ml-2">Source</button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-[url(/ahpc.png)] bg-cover bg-center h-100 rounded-2xl">
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-serif">The Association of Home Pizza Cooks</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur mollis commodo. Suspendisse eu ultricies purus, id porttitor nisl. Nullam gravida urna nisl, in fringilla lacus imperdiet ut. Quisque sit amet nulla faucibus, egestas nibh quis, malesuada leo. Donec efficitur tincidunt nibh at congue. Vestibulum bibendum ac enim vel viverra. Ut at risus non magna feugiat vulputate.
            </p>
            <div>
              <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl">Demo</button>
              <button className="border-2 p-2 border-teal-500 text-teal-500 rounded-3xl ml-2">Source</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}