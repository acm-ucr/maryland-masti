import About from "@/components/About";
import Contact from "@/components/Contact";
import Landing from "@/components/Landing";
import Philanthropy from "@/components/Philanthropy";
import Sponsors from "@/components/Sponsors";
import Media from "@/components/Media";
import Title from "@/components/Title";

const Home = () => {
  return (
    <>
      <Landing />
      <Title title="MEDIA" />
      <Media />
      <Title title="ABOUT US" />
      <About />
      <Title title="PHILANTHROPY" />
      <Philanthropy />
      <Title title="SPONSORS" />
      <Sponsors />
      <Title title="CONTACT" />
      <Contact />
    </>
  );
};

export default Home;
