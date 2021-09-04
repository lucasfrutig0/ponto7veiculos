import { ReactElement } from "react";
import { ReactChildren } from "../../../types";

function Layout({ children }: ReactChildren): ReactElement {
  return <>{children}</>;
}

export default Layout;
