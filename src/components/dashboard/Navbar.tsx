"use client"

import { useEffect, useState } from "react";
import Image from "next/image";
import Logo from '../../../public/logo.png';
import Link from 'next/link';

import { IoHomeOutline } from "react-icons/io5";
import { FiUsers } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";
import { FaXmark } from "react-icons/fa6";
import { useUser } from "@/contexts/UserContext";
import { usePathname } from "next/navigation";
import { Button } from "./layout/Button";


type Props = {
    isOpen: boolean;
    setIsOpened: (value: boolean) => void;
}

const navItems = [

    {icon: <IoHomeOutline />, label: 'Início', path: '/dashboard'},
    {icon: <FiUsers />, label: 'Usuários', path: '/dashboard/usuarios'},
    {icon: <VscAccount />, label: 'Minha Conta', path: '/dashboard/minha-conta'},
  
];


export const Navbar = ( { isOpen , setIsOpened } : Props) => {

    const pathname = usePathname();

    const userCtx = useUser();

    const handleLogout = () => {
        userCtx?.logout();
    }

    return (

        <>
            <div className={`
                fixed p-5 flex flex-col  z-20 w-[300px] top-0 bottom-0 h-screen bg-box transition-all ease-in-out duration-300
                ${isOpen ? 'left-0' : '-left-[300px] md:left-0'}
                shadow-2xl
            
            `} >
                
            
                <Image
                    className="mx-auto"
                    src={Logo}
                    width={120}

                    alt="Logo Viver de Investir"
                /> 

                <button 
                    onClick={()=>setIsOpened(!isOpen)}
                    className="p-5 absolute top-2 right-1 text-white/80
                        md:hidden
                    "
                >
                    <FaXmark />    
                    
                </button>                        
        

                <ul className="mt-10 flex-1">

                    {navItems.map((item,index)=> (

                        <li key={index}>

                            <Button
                                label={item.label}
                                Icon={item.icon}
                                active={pathname === item.path}
                                onClick={()=>setIsOpened(false)}
                                href={item.path}

                            />                           
                        </li>    

                    ))}
            
                </ul>

                <Button
                    onClick={userCtx?.logout}
                    label="Sair"
                    Icon={<MdOutlineLogout />}
                />
                
            
            </div>
            {isOpen &&
                <div className="fixed z-10 top-0 left-0  w-screen h-screen  bg-black/40" onClick={()=>setIsOpened(false)}>
                    
                </div>            
            }
          
        </>
    )
}