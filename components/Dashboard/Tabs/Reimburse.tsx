import React from "react";
import Image from "next/image";
import Item from "@/components/Micro/cards/Item";

const Reimburse = () => {
  return (
    <main className="flex mx-5 lg:flex-row flex-col justify-between lg:space-x-5">
      <div className="bg-white rounded-xl p-5 lg:w-6/12">
        <h3 className="text-xl font-bold pb-1">Reimbursement Details</h3>
        <img
          src="/assets/header/Maps.svg"
          alt=""
          className="w-full lg:w-[486px] lg:h-[272px]"
        />
        <nav className="flex justify-between py-5 text-text font-medium">
          <h3> Recent Transaction</h3>
          <p className="text-primary">View All</p>
        </nav>
        <p className="py-5">You have no pending transaction to be reimbursed!</p>
      </div>
      <div className="lg:w-6/12 lg:mt-0 mt-7 ">
        <Image
          src="/assets/header/rental.svg"
          alt=""
          width={486}
          height={272}
        />

        <div className="bg-white rounded-xl p-5 my-7 w-full ">
          <nav className="flex justify-between text-text font-medium">
            <h3> Recent Transaction</h3>
            <p className="text-primary">View All</p>
          </nav>
          <p className="py-5">You have no recent transaction!</p>
        </div>
      </div>
    </main>
  );
};

export default Reimburse;
