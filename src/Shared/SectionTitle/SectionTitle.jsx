// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div data-aos="fade-up" className="text-center mx-auto">
      <h2 className="capitalize bg-gradient-to-r animate-text from-gray-700 via-gray-600 to-violet-700 bg-clip-text text-transparent text-xl mx-auto mt-2 font-extrabold border-purple-800 border-x-[2px] w-72 py-2 ">
        {heading}
      </h2>
      <p className="  text-base ">~ {subHeading} ~</p>
    </div>
  );
};

export default SectionTitle;
