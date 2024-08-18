import { useState } from "react";
import faqImage from "../../../assets/Faq.png";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
function Faq() {
  const FaqData = [
    {
      id: "1",
      question: "How do I enroll in a photography course?",
      answer:
        "Enrolling in a course is simple! Just visit the 'Courses' section on our website, choose your preferred course, and click on 'Enroll Now.' You'll be guided through the registration process, including payment and course selection.",
    },
    {
      id: "2",
      question: "What equipment do I need for the courses?",
      answer:
        "Our courses are designed to accommodate a range of equipment, from basic cameras to professional gear. We recommend having a DSLR or mirrorless camera, but many of our courses also support smartphone photography. Check the course details for specific requirements.",
    },
    {
      id: "3",
      question: "Are there any prerequisites for advanced courses?",
      answer:
        "Yes, advanced courses typically require a foundational understanding of photography. We recommend completing our beginner or intermediate courses first, or having equivalent experience. The course details will outline any specific prerequisites.",
    },
    {
      id: "4",
      question: "Can I access course materials after the course ends?",
      answer:
        "Yes, once you enroll in a course, you'll have lifetime access to the course materials, including videos, assignments, and resources. This allows you to revisit and review the content at your own pace, even after the course has ended.",
    },
    {
      id: "5",
      question:
        "What support is available if I have questions during the course?",
      answer:
        "We offer comprehensive support through our online forums, where you can ask questions and get answers from instructors and peers. Additionally, you can reach out to your course instructor directly via email for personalized guidance.",
    },
    {
      id: "6",
      question: "Do you offer any certifications upon course completion?",
      answer:
        "Yes, upon successful completion of any of our courses, you will receive a digital certificate that you can showcase on your portfolio or LinkedIn profile. The certificate highlights the skills and knowledge you've gained.",
    },
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <SectionTitle
        heading="Frequently Asked Questions"
        subHeading="Do you have any question or queries about our services?"
      />

      <section
        data-aos="fade-down"
        className="grid xl:grid-cols-2 container my-8"
      >
        <div className="space-y-4">
          {FaqData.map((item, index) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-sm  mx-4 sm:mx-0"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => handleToggle(index)}
              >
                <span className="font-normal text-sm sm:text-lg font-Kanit">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    expandedIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className=" h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 15.75 7.5-7.5 7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all ease-linear duration-300 ${
                  expandedIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <div className="p-2 font-poppins text-xs sm:text-sm">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* main frequently div image section area */}
        <div>
          <img
            draggable={false}
            className="mx-auto xl:w-full xl:h-full w-full sm:w-[60%] md:w-[65%] md:h-[90%] lg:w-[70%]  "
            src={faqImage}
            alt="FAQ Img"
          />
        </div>
        {/* main frequently div image section area */}
      </section>
    </>
  );
}

export default Faq;
