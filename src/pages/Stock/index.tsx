import { useState } from 'react';
import VehicleCard from '../../components/VehicleCard';

interface Vehicle {
    title: string;
    image: string;
    price: number;
    km: number;
    year: number;
}

interface Pagination {
    currentPage: number;
    itemsPerPage: number;
}

function Stock() {
    // const [filteredVehicles, setFilteredVehicles] = useState<Vehicle[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [pagination, setPagination] = useState<Pagination>({
        currentPage: 1,
        itemsPerPage: 8,
    });

    const vehicles: Vehicle[] = [
        {
            title: "Veículo 1",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 2",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 3",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 4",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 1",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 2",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 3",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        },
        {
            title: "Veículo 4",
            image: "/src/assets/img/defaultcar.jpg",
            price: 10000,
            km: 22000,
            year: 2012
        }
    ];

    // Função para aplicar filtros
    const applyFilters = () => {
        // Lógica de aplicação de filtros (a ser implementada)
        // Atualize o estado de filteredVehicles com os carros filtrados
    };

    // Função para lidar com a alteração da página
    const handlePageChange = (page: number): void => {
        setPagination({ ...pagination, currentPage: page });
    };

    // Filtrar carros com base no termo de pesquisa
    const filteredVehiclesBySearch = vehicles.filter((vehicle) =>
        vehicle.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Paginar os carros filtrados
    const startIndex = (pagination.currentPage - 1) * pagination.itemsPerPage;
    const endIndex = startIndex + pagination.itemsPerPage;
    const paginatedCars = filteredVehiclesBySearch.slice(startIndex, endIndex);

    return (
        <div className="container mx-auto pt-8 pb-14 px-4 md:px-8 lg:px-16 xl:px-26">
            <h2 className="text-center font-bold font-poppins text-4xl pb-4">Estoque</h2>

            {/* Filtro Horizontal */}
            <div id="filter" className="flex justify-between items-center p-4 mb-4 bg-dark-100 rounded-md">

                <input
                    type="text"
                    placeholder="Pesquisar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="p-2 border rounded-md w-full md:w-1/2"
                />
                <button onClick={applyFilters} className="bg-black text-white p-2 rounded-md">Aplicar Filtros</button>
            </div>

            {/* Estoque */}
            <div id="stock" className="mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {paginatedCars.map((vehicle, index) => (
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

            {/* Paginação */}
            <div className="flex justify-center mt-4">
                {/* Adicione a lógica de renderização da paginacao aqui */}
                {/* Exemplo de botões de página */}
                {Array.from({ length: Math.ceil(filteredVehiclesBySearch.length / pagination.itemsPerPage) }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`mx-2 p-2 rounded-md ${index + 1 === pagination.currentPage ? 'bg-black text-white' : 'bg-gray-200'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default Stock;
