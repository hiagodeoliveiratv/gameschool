import { IconType } from "react-icons";

type Props = {
    Icon: IconType,
    label: string;
    value: string;

}

export const Box = ( {label, Icon, value } : Props) => {


    return (
        <div className="bg-box /bg-indigo-500/50 rounded py-5  px-2 text-left shadow-lg flex items-center">
            <div>
                <Icon className="w-16 h-16 opacity-40 mr-1" />                       
            </div>
            <div>
                <p className="text-white/50 text-sm ">{label} </p>
                <h1 className="text-xl mt-1 text-white font-bold">{value}</h1>
            </div>             
        </div>
    )
}