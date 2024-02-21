"use client"

import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "@/components/dashboard/Navbar";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import { Header } from "@/components/dashboard/layout/Header";


const Page = ( { children } : { children: ReactNode} ) => {

    const [ isOpen, setIsOpened ] =  useState(false);

    const userCtx = useUser();

    useEffect( () => {
      userCtx?.isLogged();
    }, []);
 

    return (

        <div className="bg-default">
                 
            <Navbar
                isOpen={isOpen}
                setIsOpened={setIsOpened}
            />
   
            <div className={`${isOpen ? 'md:left-[300px]':'md:left-0'} transition-all duration-300 ease-in-out 
                relative md:left-[300px] md:w-[calc(100vw-320px)] min-h-screen`}>

               <Header
                    isOpen={isOpen}
                    setIsOpened={setIsOpened}
               />

                <div className="min-h-screen p-3 mt-[60px]">
                    { children }
                </div>
                                                               
            </div>
          
        </div>
    );
}

export default Page;