import { HiAtSymbol } from "react-icons/hi";
import TagList from "../projects/TagList";
import StudyTag from "./StudyTag";

const EducationItem = ({ experience }) => {
  return (
    <div className="relative pl-5 lg:pl-8">
      <img
        src={experience?.logo}
        className="absolute -top-2 left-0 w-10 h-10 lg:w-16 lg:h-16 rounded-full cover bg-white border-2 border-violet-600/50 dark:border-white shadow-sm"
      />
      
      <div className="flex flex-col gap-1 border-l-2 border-dotted border-violet-950/50 dark:border-blue-400 pl-7 lg:pl-10 pb-3 min-h-28">
        <div className="max-w-full text-lg text-black dark:text-white font-semibold tracking-tight wrap">
          <div className="flex flex-col lg:flex-row leading-tight">
            {experience?.course}

            <div className="flex items-center">
              <HiAtSymbol className="text-black/50 dark:text-white/50 mx-1" />

              <a
                href={experience?.schoolLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`underline decoration-dashed hover:decoration-solid hover:decoration-2 ${experience?.decoCol}`}
              >
                {experience?.school}
              </a> 
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 italic text-xs text-black/30 dark:text-white/30">
          {experience?.dateStart} - {experience?.dateEnd} 
          <StudyTag />
        </div>
        <p className="text-black dark:text-white/90 text-sm">{experience?.description}</p>
        <TagList taglist={experience?.tags} />
      </div>
    </div>
  );
}

export default EducationItem