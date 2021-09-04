import { ReactElement } from "react";
import { Caracteristics } from "../../types";

function CarFeatures(): ReactElement {
  return (
    <div className="flex p-4 border-t border-b text-xs text-gray-700">
      <div className="w-full flex flex-col">
        <div className="flex items-center">
          <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
          2019/2020
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
      </div>
      <div className="w-full flex flex-col">
        <div className="flex items-center">
          <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
          2019/2020
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
        <div className="flex items-center mb-1">
          <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4 Portas
        </div>
      </div>
    </div>
  );
}

export default CarFeatures;
