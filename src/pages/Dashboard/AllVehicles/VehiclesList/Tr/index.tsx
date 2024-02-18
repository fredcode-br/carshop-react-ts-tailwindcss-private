interface Props {
    id: number;
    name: string;
    price: number;
    status: string;
}

function Tr({id, name, price, status} : Props) {
    return (
        <tr className="bg-white">
            <td className="text-xs font-medium px-6 py-2 whitespace-nowrap">{name}{id}</td>
            <td className="text-xs font-medium px-6 py-2 whitespace-nowrap">R${price}</td>
            <td className="text-xs font-medium px-6 py-2 whitespace-nowrap">
                <p className="bg-green-400 text-green-700 border-green-700 border w-24 py-2 px-4 rounded bg-opacity-70">
                    {status}
                </p>
            </td>
            <td className="text-xs font-medium px-6 py-2 whitespace-nowrap">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Editar
                </button>
            </td>
        </tr>
    );
}

export default Tr;

