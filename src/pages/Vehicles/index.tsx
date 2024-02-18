import SearchBar from "../../components/SearchBar";

function Vehicles(){
    return (
        <>
            <h1 className=" text-3xl font-semibold text-gray-600">Veículos</h1>
            <SearchBar placeholder="Nome,  Marca,  Ano, ..." />
        </>
    );
}

export default Vehicles;