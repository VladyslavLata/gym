import { NavBar } from "../NavBar/NavBar";
import { Container } from "../Container/COntainer";
import { BtnIcon } from "../BtnIcon/BtnIcon";
// import MenuIcon from "../../../public/burgerMenu.svg";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container currentContainer={"headerContainer"}>
        <NavBar />
        {/* <BtnIcon svg={MenuIcon} name="menu" /> */}
      </Container>
    </header>
  );
};
