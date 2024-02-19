import SearchBar from "../../components/SearchBar";

function Manufacturers(){
    return (
        <>
            <h1 className=" text-3xl font-semibold text-gray-600">Fabricantes</h1>
            <SearchBar placeholder="Nome,  Marca,  Ano, ..." />
        </>
    );
}

export default Manufacturers;