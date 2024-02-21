import { IconType } from "react-icons";
import Link from 'next/link';

type Props = {
    label: string;
    Icon?: IconType | any;
    href?: string;
    onClick?: () => void;
    active?: boolean;

}

export const Button = ( { Icon, label, href, onClick,  active } : Props) => {

    if(href) {
        return (
            <Link 
                href={href}
                onClick={onClick}
                className={`w-full flex items-center p-3 rounded-md border-b-orange-500/20 text-sm  mb-3 text-white/80 font-light hover:bg-orange-500/60
                ${active && 'bg-orange-500/60'}`}>

                {Icon && Icon}
                <p className={`${Icon && 'ml-1'}`}>{label}</p>
            </Link>
        );
    } else if (!href && onClick){
        return (
            <button 
                onClick={onClick}
                className={`w-full flex items-center p-3 rounded-md border-b-orange-500/20 text-sm  mb-3 text-white/80 font-light
                    ${active && 'bg-orange-500/60'}
                    hover:bg-orange-500/60
                `}>
                {Icon && Icon}
                <p className={`${Icon && 'ml-1'}`}>{label}</p>
            </button>
        );
    }
    
}