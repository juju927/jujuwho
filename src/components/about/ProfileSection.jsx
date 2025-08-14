import pfp from "../../assets/images/about/temp.jpg";

const ProfileSection = () => {
  return (
    <div className="flex flex-col text-center md:text-left md:flex-row md:gap-2 md:pb-4">
      <img
        src={pfp}
        className="self-center mb-4 w-32 h-32 md:w-40 md:h-40 rounded-full md:rounded-sm cover"
      />
      <div className="text-base text-black dark:text-white/90 text-center md:text-left px-4 flex flex-col gap-4">
        <p>
          I&apos;m <strong>Joanna</strong>, a software developer from Singapore
          🇸🇬.
        </p>
        <p>
          After a year in the industry, I love that I can now make (most of) the ideas in my head come to life (after a lot of procrastination). It's always one rabbit hole after another?!
        </p>
        <p>
          I love creating minimalistic web apps that contain various cute
          elements!
        </p>
        <p>Spending too much time on small details is a huge flaw of mine.</p>
        <span className="italic text-xs">
          Someday, I want to make a website with an easter egg that is more
          intricate than the site it is found in!!
        </span>
      </div>
    </div>
  );
};

export default ProfileSection;
