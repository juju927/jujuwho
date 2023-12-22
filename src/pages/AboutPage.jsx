import ProfileSection from "../components/about/ProfileSection";
import TechStackSection from "../components/about/TechStackSection";
import PageHeader from "../components/common/PageHeader";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-2 max-w-screen-sm">
      <PageHeader text="about" />
      <ProfileSection />
      <PageHeader text="tech stack" />
      <TechStackSection />
    </div>
  );
};

export default AboutPage;
