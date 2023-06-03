import { useTheme } from "styled-components";
import { Container, Count, Element, Mode } from "./StatusbarStyles";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdRemoveRedEye } from "react-icons/md";
import { CgSun } from "react-icons/cg";



type View = {
  views: number | undefined;
  toggleTheme: () => void;
};

const Statusbar = (props: View) => {
  const theme: any = useTheme();

  return (
    <Container>
      <Element>
        <MdRemoveRedEye />
        <Count>{props.views}</Count>
      </Element>
      <Element>
        <Mode onClick={props.toggleTheme}>
          {theme.backgroundColor == "#000066" ? (
            <CgSun />
          ) : (
            <BsFillMoonStarsFill />
          )}
        </Mode>
      </Element>
    </Container>
  );
};

export default Statusbar;
