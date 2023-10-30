import { Futer } from "../Futer/Futer";
import { Header } from "../Header/Header";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Futer />
    </>
  );
};
