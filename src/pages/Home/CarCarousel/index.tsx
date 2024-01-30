import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../../../components/ProductCard';

interface Vehicle {
  title: string;
  image: string;
  price: number;
  year: number;
}

interface Props {
  vehicles: Array<Vehicle>;
}

function CarCarousel({ vehicles }: Props) {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false,
      },
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll
    responsive: responsiveSettings,
  };

  return (
      <Slider {...settings} className="w-full">
        {vehicles.map((car, index) => (
          <div key={index} className="flex justify-center px-2">
            <ProductCard
              title={car.title}
              imageUrl={car.image}
              price={car.price}
              year={car.year}
            />
          </div>
        ))}
      </Slider>
  );
}

export default CarCarousel;
