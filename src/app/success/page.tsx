import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <Container className="flex items-center justify-center py-20">
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className="text-4xl font-bold">
          Thank you for Trinitysoft Inc
        </h2>
        <h2 className="text-2xl font-bold text-white">
        Software implementation solutions and Staff augmentation services
        </h2>
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

export default SuccessPage;
