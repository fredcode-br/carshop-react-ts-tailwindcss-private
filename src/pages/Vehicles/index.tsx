import Button from "../../components/Button";
import SearchBar from "../../components/SearchBar";
import VehiclesList from "./VehiclesList";

function Vehicles(){
    return (
        <>
            <h1 className=" text-3xl font-semibold text-gray-600">Veículos</h1>
            <SearchBar placeholder="Nome,  Marca,  Ano, ..." />
            <div className="flex">
                <Button 
                    type="button"
                >
                    Novo
                </Button>

                Filtro
            </div>
            <VehiclesList />
        </>
    );
}

export default Vehicles;