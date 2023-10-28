
interface CardProps extends React.HTMLProps<HTMLDivElement> {}

export default function Card({
    ...props
}: CardProps) {

    return (
        <div
            className=""
            {...props}
        >
        </div>  
    );
}
