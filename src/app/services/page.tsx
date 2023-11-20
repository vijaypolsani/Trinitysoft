import Container from "@/components/Container";
import { ListBulletIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-10">
        <h2 className="text-2xl font-bold">
          Trinitysoft Software Consulting Solutions
        </h2>

        <div className="text-md font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
          <button
            aria-current="true"
            type="button"
            className="py-3 px-5 mr-2 mb-2 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white dark:focus:ring-blue-800"
          >
            Software implementation solutions and Staff augmentation services
          </button>
        </div>
        <Link
          href={"/"}
          className="bg-black text-slate-100 w-44 h-12 rounded-full text-base font-semibold flex items-center justify-center hover:bg-orange-600 hover:text-white duration-200"
        >
          Back to Home
        </Link>
      </div>
    </Container>
  );
};

export default AboutPage;
