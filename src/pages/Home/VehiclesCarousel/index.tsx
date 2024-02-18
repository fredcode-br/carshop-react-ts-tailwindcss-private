import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import VehicleCard from '../../../components/VehicleCard';

interface Vehicle {
  title: string;
  image: string;
  price: number;
  km: number;
  year: number;
}

interface Props {
  vehicles: Array<Vehicle>;
}

function VehiclesCarousel({ vehicles }: Props) {
  const responsiveSettings = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 980,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerMode: true,

      },
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,  
    responsive: responsiveSettings,
    initialSlide: 0,
  };

  return (
    <section id="favorites" className="flex flex-col items-center  py-8">
        <div className="container">
          <h3 className="pb-5 text-center text-xl font-bold uppercase">Os Favoritos do Momento</h3>
          <Slider {...settings} className="w-full">
            {vehicles.map((car, index) => (
              <div key={index} className="flex justify-center px-2">
                <VehicleCard
                  title={car.title}
                  imageUrl={car.image}
                  price={car.price}
                  km={car.km}
                  year={car.year}
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>
  );
}

export default VehiclesCarousel;
