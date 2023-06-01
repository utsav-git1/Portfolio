import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import { SectionDivider } from "../Utility/GlobalStyles/GlobalComponents";
import Technologies from "../components/Technologies/Technologies";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Technologies />
      <SectionDivider />
    </div>
  );
};

export default Home;
