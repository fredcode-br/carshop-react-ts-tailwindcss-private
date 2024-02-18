import LinkButton from "../../../components/LinkButton";
import VehicleCard from "../../../components/VehicleCard";

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

function Stock({ vehicles }: Props) {
    return (
        <section id="stock" className="flex flex-col items-center pb-16">
            <h3 className="pb-5 text-center text-xl font-bold uppercase">Procurar por modelo</h3>
            <div className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {vehicles.map((vehicle, index) => (
                    <div key={index} className="flex justify-center">
                        <VehicleCard
                            title={vehicle.title}
                            imageUrl={vehicle.image}
                            price={vehicle.price}
                            km={vehicle.km}
                            year={vehicle.year}
                        />
                    </div>
                ))}
            </div>
            <div>
                <LinkButton
                    text="Ver estoque"
                    to=""
                    customClass="px-5 py-3"
                />
            </div>
        </section>
    )
}

export default Stock;