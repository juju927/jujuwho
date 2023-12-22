import PageHeader from "../components/common/PageHeader";
import ExperienceItem from "../components/experience/ExperienceItem";
import EducationItem from "../components/experience/EducationItem";
import { workEduExp } from "../../data/experience/experience";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-2">
      <PageHeader text="experience/ education" />

      <div className="pt-4">
        {workEduExp.map((experience, idx) =>
          experience?.type == "work" ? (
            <ExperienceItem key={idx} experience={experience} />
          ) : (
            <EducationItem key={idx} experience={experience} />
          )
        )}
      </div>
    </div>
  );
};

export default ExperiencePage;
