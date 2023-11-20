import Container from "./Container";
import { motion } from "framer-motion";
import React from "react";
import { title } from "process";
import Link from 'next/link'

interface Props {
  title: string;
}


const BannerText = ({ title }: Props) => {
  const [details, setDetails] = React.useState(0)
  function handleClick() {
    console.log("Title: "+ title)
    setDetails(details+1)
  }
    return (
    <div className="hidden lg:inline-block absolute top-0 left-0 w-full h-full">
      <Container className="flex h-full flex-col gap-y-6 justify-center">
        <motion.h2
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-white"
        >
          {title}
        </motion.h2>
        <motion.h3
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-2xl text-black"
        >
          Software implementation solutions and Staff augmentation services
        </motion.h3>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex gap-x-4 mt-2"
        >
          <button onClick={handleClick} className="py-3 px-6 rounded-full bg-slate-200 hover:bg-white duration-200 text-sm uppercase font-semibold">
             <Link href="/cms/">Find out more..</Link>
          </button>
        </motion.div>
      </Container>
    </div>
  );
};

export default BannerText;
