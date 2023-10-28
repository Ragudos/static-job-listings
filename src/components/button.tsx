import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../lib/utils";

const buttonVariants = cva(
    "inline-flex justify-center font-bold p-1 text-sm rounded-sm items-center outline-transparent transition-colors duration-200 focus-visible:ring-ring focus-visible:ring-1 focus-visible:ring-offset-white focus-visible:ring-offset-1 cursor-pointer disabled:cursor-default disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-neutral-light-grayish-cyan-filter-tablets text-neutral-dark-grayish-cyan hover:bg-neutral-dark-grayish-cyan hover:text-neutral-light-grayish-cyan-filter-tablets",
                green: "text-neutral-dark-grayish-cyan",
                underlineHover: "text-neutral-dark-grayish-cyan hover:underline",
                colorToBlackOnHoverText: "text-neutral-darkest-grayish-cyan hover:text-primary-dark-cyan",
                colorToBlackOnHoverBg: "bg-neutral-dark-grayish-cyan hover:bg-neutral-darkest-grayish-cyan",
            },

            size: {
                default: "",
                square: "w-8 h-8 p-2"
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default"
        }
    }
);

interface ButtonProps extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    function ({ className, variant, size, type, ...props }, ref) {

        return (
            <button
                className={cn(
                    buttonVariants({
                        variant,
                        size,
                        className,
                    })
                )}
                type={type || "button"}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

// eslint-disable-next-line react-refresh/only-export-components
export { buttonVariants, Button };
