import { ReactElement } from "react";
import { ReactChildren } from "../../../types";

function SectionTitle({ children }: ReactChildren): ReactElement {
  return <div className="container px-5">{children}</div>;
}

export default SectionTitle;
