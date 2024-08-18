// eslint-disable-next-line react/prop-types
const CommonDashboardHeaderTitle = ({ mainTitle, secondaryTitle }) => {
  return (
    <div>
      <h1 className=" text-2xl font-semibold font-poppins mt-3">{mainTitle}</h1>
      <span className=" text-sm font-normal font-poppins">
        {secondaryTitle}
      </span>
    </div>
  );
};

export default CommonDashboardHeaderTitle;
