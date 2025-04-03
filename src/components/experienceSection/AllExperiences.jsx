import { FaArrowRightLong } from "react-icons/fa6";
import SingleExperience from "./SingleExperience";

const experiences = [
  {
    job: "Associate Software Developer",
    company: "OpenSense Labs",
    date: "Mar 23 - jun 23",
    responsibilities: [
      "Contributed to the AES Project , developed reusable Ul components .",
      "Built Edredo webpage components, ensuring responsive design, accessibility, and performance optimization.",
    ],
  },
  {
    job: "Frontend developer intern",
    company: "OpenSense Labs",
    date: "oct 22 - Apr 23",
    responsibilities: [
      "Designed and developed the company's monthly newsletter, ensuring a clean layout .",
      "Learned and applied Various technology, coding quality standards, and responsive design principles .",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 1 ? (
              <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
