import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Projects from "../components/Projects/Projects";
import { SectionDivider } from "../Utility/GlobalStyles/GlobalComponents";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <SectionDivider />
      <Projects />
    </div>
  );
};

export default Home;
