import { Carousel } from "flowbite-react";
import './carouselComponent.css';

interface CarouselProps {
    images: string[];
}

const CarouselComponent: React.FC<CarouselProps> = ({ images }) => {
    return (
        <div className="carousel">
            <Carousel pauseOnHover slideInterval={4000}>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Carousel image ${index + 1}`}
                        className="carousel-img"
                    />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComponent;