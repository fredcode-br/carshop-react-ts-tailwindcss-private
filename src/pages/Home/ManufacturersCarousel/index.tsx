import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ManufacturerCard from './ManufacturerCard';

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

function NextArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "black", height: "100%", bottom: "10px", width: "30px", right: "-30px", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
      onClick={onClick}
    >
    </div>
  );
}

function PrevArrow(props: ArrowProps) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, backgroundColor: "black", height: "100%", width: "30px", left: "-30px", zIndex: 1, display: "flex", justifyContent: "center", alignItems: "center", cursor: "pointer" }}
      onClick={onClick}
    >
    </div>
  );
}

function ManufacturersCarousel(){

    const manufacturers = [
        {
            name: "Marca 1",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 2",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 3",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 4",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 5",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 6",
            image: "/src/assets/img/fiat.png",
        },
        {
            name: "Marca 7",
            image: "/src/assets/img/fiat.png",
        },
    ]

    const responsiveSettings = [
        {
          breakpoint: 980,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ];
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 1, 
        responsive: responsiveSettings,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };

    return (
        <section id="favorites" className="flex flex-col items-center pt-4">
            <div className="container">
                <Slider {...settings} className="w-full">
                    {manufacturers.map((manufacturer, index) => (
                        <div key={index}>
                           <ManufacturerCard 
                                name={manufacturer.name} 
                                image={manufacturer.image}
                            />
                        </div>
                            
                    ))}
                </Slider>
            
            </div>
        </section>
    )
}

export default ManufacturersCarousel;
