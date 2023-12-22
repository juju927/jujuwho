import pfp from "../../assets/images/about/temp.jpg"

const ProfileSection = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-2 md:pb-4">
    <img
      src={pfp}
      className="self-center w-24 h-24 md:w-40 md:h-40 rounded-full md:rounded-sm cover"
    />
    <div className="text-base text-black text-left px-4 flex flex-col gap-4">
      <p>
        I&apos;m <strong>Joanna</strong>, a software developer from
        Singapore 🇸🇬.
      </p>
      <p>
        I&apos;ve recently finished my Software Engineering Immersive course
        at{" "}
        <a
          href="https://generalassemb.ly/"
          className="text-red-600 font-bold uppercase tracking-tighter hover:bg-red-600 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          General Assembly
        </a>{" "}
        and cannot wait to apply what I&apos;ve learnt to bring ideas to
        life.
      </p>
      <p>
        I love creating minimalistic web apps that contain various cute
        elements! Spending too much time on small details is a huge flaw of
        mine.
      </p>
      <span className="italic text-xs">
        Someday, I want to make a website with an easter egg that is more
        intricate than the site it is found in!!
      </span>
    </div>
  </div>
  )
}

export default ProfileSection