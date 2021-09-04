import React, { ReactElement } from "react";
import Image from "next/image";
import CarFeatures from "../../CarFeatures";

function Card(): ReactElement {
  return (
    <>
      <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-2">
        <div className="c-card sm:mx-auto block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
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
          <CarFeatures />
          <div className="w-full p-4 flex items-center justify-center text-sm bg-blue-600 hover:bg-blue-700 cursor-pointer text-white uppercase">
            <span className="w-full text-center font-semibold">
              <a href="#">Ver Mais </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
