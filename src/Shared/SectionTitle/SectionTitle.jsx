// eslint-disable-next-line react/prop-types
const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div data-aos="fade-up" className="text-center mx-auto">
      <h2 className="capitalize  text-xl mx-auto mt-2 font-extrabold border-purple-800 border-x-[2px] w-72 py-2 px-2 ">
        {heading}
      </h2>
      <p className=" mt-2 text-base px-2">~ {subHeading} ~</p>
    </div>
  );
};

export default SectionTitle;
