import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = 'button',
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(
                `
            w-full 
            rounded-full 
            bg-green-500
            border
            border-transparent
            px-3 
            py-3 
            disabled:cursor-not-allowed 
            disabled:opacity-50
            text-black
            font-bold
            hover:opacity-75
            transition
          `,
                disabled && 'opacity-75 cursor-not-allowed',
                className
            )}
            disabled={disabled}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = "Button"

export default Button;