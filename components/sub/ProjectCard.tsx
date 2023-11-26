import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  url:string;
}

const ProjectCard = ({ src, title, description,url }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] md:min-w-[400px] cursor-pointer">
      <Link href={url}>
      <Image
        src={src}
        alt={title}
        width={800}
        height={800}
        className="w-auto object-contain rounded-sm md:min-h-[300px]"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
      </Link>
    </div>
  );
};

export default ProjectCard;