import pfp from "../assets/images/about/temp.jpg";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-2">

      <PageHeader text="juju fullstack dev" />

      <img src={pfp} className="self-center w-24 h-24 rounded-full cover" />

      <div className="text-base text-black text-left px-4 flex flex-col gap-4">
        <p>
          Hi I&apos;m <strong>Joanna</strong> from Singapore 🇸🇬!
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
          and cannot wait to apply what I&apos;ve learnt to bring ideas to life.
        </p>
        <p>
          I love creating simple, aesthetic web apps that go above and beyond my users&apos; expectations.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
