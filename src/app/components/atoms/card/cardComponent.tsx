import '../card/card.css';
import { Card } from "flowbite-react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
interface CardProps {
    title: string;
    brand: string;
    price: number;
    imgSrc: string;
}

const CardComponent: React.FC<CardProps> = ({title, brand, price, imgSrc}) => {
    return (
        <Card
            className="fixed-card max-w-44 sm:max-w-48 md:max-w-52 lg:max-w-56 xl:max-w-60 hover:scale-105 transition-transform duration-200 overflow-hidden"
            imgAlt="imagen producto"
            imgSrc={imgSrc}
        >
            <a href="#">
                {/* Product Title */}
                <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {title}
                </h5>
            </a>
            <a href="#">
                {/* Brand */}
                <p className="mt-1 text-red-600 hover:text-valracol-letter-hover dark:text-white">
                    {brand}
                </p>
            </a>
            <div className="flex items-center justify-between gap-x-0.5">
                {/* Price */}
                <span className="text-lg md:text-lg xl:text-xl font-medium text-gray-900 hover:text-red-600 hover:scale-105 dark:text-white">${price} COP</span>
                <a
                    href="#"
                    className="rounded-lg bg-cyan-700 py-2 px-3 text-center text-sm md:text-xs  text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
                    onClick={()=>(console.log)}
                >
                    <MdOutlineAddCircleOutline size={23}/>
                </a>
            </div>
        </Card>
    );
}
export default CardComponent;
