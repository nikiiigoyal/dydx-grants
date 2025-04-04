function Form() {
  return (
    <>
      <div className="header">
        <h1>Grant application</h1>
      </div>
      <div className="max-w-[40%] mx-auto">
        <form className="bg-white rounded-2xl m-8 p-5">
          <div className="mx-8 my-9">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mx-8">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-600 text-sm mb-2">
              Primary contact if applying as a team/company
            </p>
            <input
              id="email"
              type="email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="mx-8">
            <label
              htmlFor="about"
              className="block text-gray-700 font-medium mb-2"
            >
              About You <span className="text-red-500">*</span>
            </label>
            <p className="text-gray-600 text-sm mb-2">
              Tell us about yourself and/or your team
            </p>
            <textarea
              id="about"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
            />
          </div>

          <div className="mx-8">
            <label
              htmlFor="links"
              className="block text-gray-700 font-medium mb-2"
            >
              Additional Links
            </label>
            <p className="text-gray-600 text-sm mb-2">
              If helpful, please share any links about you (e.g. Website,
              GitHub, Twitter)
            </p>
            <textarea
              id="links"
              className="w-full px-3 py-2 border border-gray-300 rounded-md h-32"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
