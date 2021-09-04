import { ReactElement } from "react";

import Card from "../commons/Card";

function SectionHomeList(): ReactElement {
  return (
    <div className="flex flex-wrap -mx-4 sm:mx-auto">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default SectionHomeList;
