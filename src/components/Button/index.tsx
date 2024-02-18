interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | undefined;
    onClick?: () => void;
    customClass?: string;
}

function Button({ children, type, onClick, customClass }: Props) {
    return (
        <button 
            className={`bg-dark-100 text-white font-bold border-0 py-2 w-full rounded-md hover:opacity-85 ${customClass}`} 
            type={type} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
