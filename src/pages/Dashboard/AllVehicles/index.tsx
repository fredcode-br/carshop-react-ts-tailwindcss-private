import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Tr from './VehiclesList/Tr';
import AdminPagination from '../../../components/AdminPagination/indext';

interface Vehicle {
    id: number;
    name: string;
    price: number;
    status: string;
}

function AllVehicles() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(8);

    const vehicles: Vehicle[] = [
        {
            id: 1,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 2,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 3,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 4,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 5,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 6,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 7,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 8,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 9,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 10,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 11,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        },
        {
            id: 12,
            name: "Veículo",
            price: 1234,
            status: "Disponível"
        }
    ];

    const indexOfLastItem: number = currentPage * itemsPerPage;
    const indexOfFirstItem: number = indexOfLastItem - itemsPerPage;
    const currentItems: Vehicle[] = vehicles.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber: number): void => setCurrentPage(pageNumber);

    const goToPreviousPage = (): void => {
        setCurrentPage(prevPage => (prevPage > 1 ? prevPage - 1 : prevPage));
    };

    const goToNextPage = (): void => {
        setCurrentPage(prevPage => (prevPage < Math.ceil(vehicles.length / itemsPerPage) ? prevPage + 1 : prevPage));
    };

    return (
        <section className="bg-white w-full mt-8 p-5 rounded-md">
            <div className="flex justify-between items-center w-full">
                <h3 className="mr-4">Todos os veículos</h3>
                <div className="relative">
                    <input type="search" className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500" />
                    <MagnifyingGlassIcon className="h-5 w-5 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>
            <div className="overflow-x-auto pt-5">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Veículo</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Preço</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Status</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Ação</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {currentItems.map(vehicle => (
                            <Tr 
                                key={vehicle.id}
                                id={vehicle.id}
                                name={vehicle.name}
                                price={vehicle.price}
                                status={vehicle.status}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
            <AdminPagination 
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                totalItems={vehicles.length}
                goToPreviousPage={goToPreviousPage}
                goToNextPage={goToNextPage}
                paginate={paginate}
            />
        </section>
    );
}

export default AllVehicles;
