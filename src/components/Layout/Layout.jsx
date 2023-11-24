import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ overflow: "hidden" }}>{children}</main>
      <Footer />
    </>
  );
};
