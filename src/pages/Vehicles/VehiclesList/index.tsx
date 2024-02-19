import { useState } from 'react';
import Tr from './Tr';
import AdminPagination from '../../../components/AdminPagination/indext';

interface Vehicle {
    id: number;
    name: string;
    price: number;
    status: string;
    photo: string; 
    year: number; 
}

function AllVehicles() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage] = useState<number>(8);

    const vehicles: Vehicle[] = [
        {
            id: 1,
            name: "Veículo",
            price: 1234,
            status: "Disponível",
            photo: "/src/assets/img/defaultcar.jpg",
            year: 2022,
        },
        {
            id: 2,
            name: "Veículo",
            price: 1234,
            status: "Disponível",
            photo: "/src/assets/img/defaultcar.jpg",
            year: 2022,
        },
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
        <section className="bg-white w-full mt-8 p-5 pt-1 rounded-md">
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Foto</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Título</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Preço</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-bold text-gray-400 tracking-wider">Ano</th>
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
                                photo={vehicle.photo}
                                year={vehicle.year}
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
