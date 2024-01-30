import Button from "../../components/Button";
import Banner from "./Banner";
import CarCarousel from './CarCarousel';
import ProductCard from "../../components/ProductCard";

export default function Home() {

    const cars = [
        {
            title: "Veículo 1",
            image: "../../assets/img/defaultcar.jpg",
            price: 10000,
            year: 2012
        },
        {
            title: "Veículo 2",
            image: "../../assets/img/defaultcar.jpg",
            price: 10000,
            year: 2012
        },
        {
            title: "Veículo 3",
            image: "../../assets/img/defaultcar.jpg",
            price: 10000,
            year: 2012
        },
        {
            title: "Veículo 4",
            image: "../../assets/img/defaultcar.jpg",
            price: 10000,
            year: 2012
        },
        {
          title: "Veículo 1",
          image: "../../assets/img/defaultcar.jpg",
          price: 10000,
          year: 2012
      },
      {
          title: "Veículo 2",
          image: "../../assets/img/defaultcar.jpg",
          price: 10000,
          year: 2012
      },
      {
          title: "Veículo 3",
          image: "../../assets/img/defaultcar.jpg",
          price: 10000,
          year: 2012
      },
      {
          title: "Veículo 4",
          image: "../../assets/img/defaultcar.jpg",
          price: 10000,
          year: 2012
      }
    ]
    
  return (
    <>
      <Banner />
      <section id="favorites" className="flex flex-col items-center">

        <div className="container py-8">
          <h3 className="px-2">Os Favoritos do Momento</h3>
          <CarCarousel vehicles={cars} />
        </div>
      </section>
      <section id="categories" className="flex flex-col items-center">
        <div className="continer py-8">
          <ul className="flex w-full">
            <li>
              <Button>SUV</Button>
              <Button>SUV</Button>
              <Button>SUV</Button>
              <Button>SUV</Button>
              <Button>SUV</Button>
            </li>
          </ul>
        </div>
      </section>
      <section id="stock" className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {cars.map((car, index) => (
          <div key={index} className="flex justify-center">
            <ProductCard
              title={car.title}
              imageUrl={car.image}
              price={car.price}
              year={car.year}
            />
          </div>
        ))}
        <Button>
          Ver estoque
        </Button>
      </section>

  
    </>
  );
}
