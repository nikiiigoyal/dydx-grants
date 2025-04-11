export default function ApplicationProcess() {
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-between p-4 sm:p-6 md:p-9">
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mb-3 sm:mb-5 text-center">
              Application process
            </h1>
            <div className="w-full">
              <p className="text-base sm:text-lg text-center mt-4 sm:mt-9 mb-4 sm:mb-9 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                nulla risus, consectetur ut bibendum non, gravida non libero.
              </p>
            </div>
          </div>
          <div className="flex justify-center w-full">
            <img
              src="/Application.png"
              alt="Application process"
              className="w-full max-w-lg mx-auto mt-3 sm:mt-5 mb-6 sm:mb-9"
            />
          </div>
        </div>
      </div>
    </>
  );
}
