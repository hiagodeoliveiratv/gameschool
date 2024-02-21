"use client"

import { ReactNode, useEffect, useState } from "react";
import { Navbar } from "@/components/dashboard/Navbar";
import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";


const Page = ( { children } : { children: ReactNode} ) => {

    const [ isOpen, setIsOpened ] =  useState(false);

    const router = useRouter();
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
   
            <div className={`${isOpen ? 'md:left-[300px]':'md:left-0'} transition-all duration-300 ease-in-out`}>

                <header className="bg-default flex justify-between items-center p-2">
                    <button onClick={()=>setIsOpened(!isOpen)}>
                        <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                        </svg>
                    </button>                    
                </header>
                <div className="relative md:left-[300px] p-3">
                    { children }
                </div>
              
                                        
            </div>
          
        </div>
    );
}

export default Page;