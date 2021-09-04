import { ReactElement } from "react";
import Image from "next/image";

function Card(): ReactElement {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
        <a
          href=""
          className="c-card sm:mx-auto block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
        >
          <div className="overflow-hidden">
            <Image
              src="/images/vwtcross.jpg" // Route of the image file
              height={702} // Desired size with correct aspect ratio
              width={1202} // Desired size with correct aspect ratio
              alt="Your Name"
            />
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 leading-none bg-green-100 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
              Pronta Entrega
            </span>
            <h2 className="mt-2 mb-2  font-bold">Fiat Mobi Tracker</h2>
            <p className="text-sm">8v 1.0 FLEX 4 Portas</p>
            <div className="mt-3 flex items-center">
              <span className="text-sm font-semibold">por</span>&nbsp;
              <span className="text-sm font-semibold">R$ </span>&nbsp;
              <span className="font-bold text-xl"> 45,00</span>
            </div>
          </div>
          <div className="flex p-4 border-t border-b text-xs text-gray-700">
            <div className="w-full flex flex-col">
              <div className="flex items-center">
                <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                2019/2020
              </div>
              <div className="flex items-center mb-1">
                <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4
                Portas
              </div>
            </div>
            <div className="w-full flex flex-col">
              <div className="flex items-center">
                <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
                2019/2020
              </div>
              <div className="flex items-center mb-1">
                <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 4
                Portas
              </div>
            </div>
          </div>
          <div className="w-full p-4 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 text-white uppercase">
            <span className="w-full text-center font-semibold">
              <a href="#">Ver Mais </a>
            </span>
          </div>
        </a>
      </div>
    </>
  );
}
export default Card;
