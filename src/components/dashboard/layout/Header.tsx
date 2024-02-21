import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { FaAngleDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

import { Button } from "./Button";
import { useUser } from "@/contexts/UserContext";


type Props = {
    isOpen: boolean;
    setIsOpened: (value: boolean) => void;
}

export const Header = ( { isOpen, setIsOpened } : Props ) => {


    const [ showNav, setShowNav ] = useState(false);

    const handleNavShow = () => {
        setShowNav(!showNav);
    }
    
    const userCtx = useUser();



    return (

        <header className="flex justify-between items-center fixed top-0  bg-box w-screen p-3 md:w-[calc(100vw-320px)]">
            <button className="md:hidden" onClick={()=>setIsOpened(!isOpen)} >
                <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
                    <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                </svg>
            </button> 

            <div className="flex-1 flex justify-end  items-center relative">

                <button 
                    className="flex items-center"
                    onClick={handleNavShow}
                >
                    <img className="w-8 h-8 rounded-full mr-2" src="https://avatars.githubusercontent.com/u/39009782?v=4" alt="" />
                    <p className="text-sm text-white/80 mr-2">Hiago de Oli...</p>
                    
                    <FaAngleDown className={`
                        transition-all duration-100                                        
                        ${showNav ?'-rotate-90':'rotate-0'}
                    `} />
                    
                </button>
                
                {showNav && 
                     <div className="shadow-xl absolute top-11 right-0 rounded w-[200px] bg-box flex flex-col">
                  
                        <Button
                            label="Minha conta"
                            href="/dashboard/minha-conta"
                            Icon={<FaRegUserCircle />}
                            onClick={handleNavShow}                                         
                        />
                        <Button
                            label="Sair"
                            onClick={()=>userCtx?.logout() ?? (() => {})}
                            Icon={<MdOutlineLogout />}                                         
                        />
                        
                    </div>                       
                }
                 
            </div>
                   
        </header>
    );
}