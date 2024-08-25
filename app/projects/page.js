import Link from "next/link";
import Image from "next/image";
import { STATIC_VALUES } from "@constants/string";
import CustomProjectCard from "@components/CustomProjectCard/CustomProjectCard";

function Projects() {
  const { PROJECT } = STATIC_VALUES;

  return (
    <div>
      {PROJECT.PROJECT_DETAILS.reverse().map((projectDetails, index) => (
        <div className="py-14 border-b-2 border-primary-border">
          <CustomProjectCard
            projectDetails={projectDetails}
            index={index + 1}
          />
        </div>
      ))}
    </div>
  );
}
export default Projects;
