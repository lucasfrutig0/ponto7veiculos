import { ReactElement } from "react";
import { ReactChildren } from "../../../types";

function Main({ children }: ReactChildren): ReactElement {
  return <main className="container mx-auto">{children}</main>;
}

export default Main;
