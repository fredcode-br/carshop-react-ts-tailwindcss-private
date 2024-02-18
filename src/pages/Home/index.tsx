import Banner from "./Banner";
import VehiclesCarousel from './VehiclesCarousel';
import Categories from "./Categories";
import Stock from "./Stock";
import ManufacturersCarousel from "./ManufacturersCarousel";

export default function Home() {

    const vehicles = [
        {
            title: "Veículo 1",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            title: "Veículo 2",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            title: "Veículo 3",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
            title: "Veículo 4",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 10000,
            year: 2012
        },
        {
          title: "Veículo 1",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
          title: "Veículo 2",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
          title: "Veículo 3",
          image: "/src/assets/img/defaultcar.jpg",
          price: 10000,
          km: 10000,
          year: 2012
      },
      {
          title: "Veículo 4",
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
