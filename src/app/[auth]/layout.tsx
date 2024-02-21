import { Metadata } from "next";

type Props = {
    children: React.ReactNode;
}
export const metadata : Metadata  =  {
    title: 'Login - Copy Trade Comissions'
}


export default ( { children } : Props ) => {
    return (
        <div className="w-screen h-screen flex justify-center items-center bg-[#14152d] p-5">
            { children}
        </div>
    )
}
       

