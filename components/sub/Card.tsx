import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {

    src:string;
  title: string;
  description: string;
}

const Card = ({ src,title, description }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] min-w-[400px]">
      <Image
        src={src}
        alt={title}
        width={150}
        height={150}
        className="w-auto object-contain rounded-full m-auto min-h-[200px]"
      />
     
      <div className="relative p-4 min-w-[400]">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 w-full text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default Card;
