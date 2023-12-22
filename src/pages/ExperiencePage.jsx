import PageHeader from "../components/common/PageHeader";
import ExperienceItem from "../components/experience/ExperienceItem";
import EducationItem from "../components/experience/EducationItem";
import { workEduExp } from "../../data/experience/experience";

const ExperiencePage = () => {
  return (
    <div className="flex flex-col gap-2 justify-left">
      <div className="hidden md:block">
        <PageHeader text="experience/ education" />
      </div>
      <div className="block md:hidden">
        <PageHeader text="exp/ edu" />
      </div>

      <div className="self-center pt-4 w-full md:max-w-screen-md">
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
