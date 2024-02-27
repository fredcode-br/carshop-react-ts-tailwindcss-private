import Banner from "./Banner";
import ManufacturersCarousel from "./ManufacturersCarousel";
import VehiclesCarousel from './VehiclesCarousel';
import Categories from "./Categories";
import Stock from "./Stock";

export default function Home() {

    const vehicles = [
        {
            id: 1,
            title: "Veículo 1",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            id: 2,
            title: "Veículo 2",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            id: 3,
            title: "Veículo 3",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            id: 4,
            title: "Veículo 4",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
          id: 5,
            title: "Veículo 5",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
        id: 6,  
        title: "Veículo 6",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
        id: 7,  
        title: "Veículo 7",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
        id: 8,  
        title: "Veículo 8",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      }
    ]
    
  return (
    <>
      <Banner />
      <ManufacturersCarousel />
      <VehiclesCarousel vehicles={vehicles} />
      <Categories />
      <Stock vehicles={vehicles} />
    </>
  );
}
