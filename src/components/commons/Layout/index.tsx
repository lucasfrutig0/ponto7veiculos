import { ReactElement } from "react";
import { ReactChildren } from "../../../types";
import Footer from "../Footer";
import Header from "../Header";
import Main from "../Main";

function Layout({ children }: ReactChildren): ReactElement {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
