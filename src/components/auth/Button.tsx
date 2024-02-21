type Props = {
    label: string;
    onClick: () => void;
    disabled?: boolean;
}

export const Button = ( {label, onClick, disabled} : Props) => {
    return (
        <>
            <button
                className={`w-full p-2 rounded-full text-white bg-orange-500/80 hover:opacity-90
                    ${disabled && 'opacity-50 cursor-not-allowed'}
                `}
                onClick={onClick}
                disabled={disabled}
            >
                {disabled && 
                    <div className="mx-auto w-6 h-6 rounded-full  border-[3px] border-t-orange-500/80 animate-spin ">

                    </div>
                }
                {!disabled && 'Entrar'}
            </button>
        </>
    )
}