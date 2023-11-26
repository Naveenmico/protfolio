import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-20 ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                    <Link href={'https://github.com/Naveenmico'}>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Github</span> 
                    </p>
                   
                </div>
                    </Link> 
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <Link href={'https://www.linkedin.com/in/naveen-dahiya-48aa38200'}>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <span className="text-[15px] ml-[6px]">Linkedin</span>    
                    </p>
                    </Link>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    
                    <Link href={'mailto:naveenmicro2002@gmail.com'}>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">naveenmicro2002@gmail.com</span>    
                    </p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer