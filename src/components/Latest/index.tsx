import { ReactElement } from "react";
import Image from "next/image";
import SectionTitle from "../commons/SectionTitle";

function Latest(): ReactElement {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <SectionTitle>
          <h1 className="title-font text-3xl font-medium uppercase text-gray-900 mt-6 mb-5">
            Recem Chegados
          </h1>
        </SectionTitle>
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              {/* <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1201x501"
              /> */}
              <Image
                src="/images/kwid1.jpeg" // Route of the image file
                height={702} // Desired size with correct aspect ratio
                width={1202} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Renault Kwid Outsider
            </h2>
            <p className="leading-relaxed text-base">
              Ar Condicionado, trava elétrica, FLEX, 4 Portas
            </p>
            <button className="flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">
              Mais Detalhes
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src="/images/vwtcross.jpg" // Route of the image file
                height={702} // Desired size with correct aspect ratio
                width={1202} // Desired size with correct aspect ratio
                alt="Your Name"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              VW T-CROSS
            </h2>
            <p className="leading-relaxed text-base">
              Computador à bordo, automático, cameras, 4 Portas, FLEX
            </p>
            <button className="flex mx-auto mt-6 text-white bg-blue-600 border-0 py-2 px-5 focus:outline-none hover:bg-blue-700 rounded">
              Mais Detalhes
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Latest;
