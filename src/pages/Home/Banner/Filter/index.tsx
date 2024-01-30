import RangeSlider from "../../../../components/Form/RangeSlider";
import Button from "../../../../components/Button";
function Filter() {
  return (
    <div className="hidden lg:block bg-white bg-opacity-75 p-4 rounded-md shadow-md">
      <h2 className="text-xl text-center font-bold mb-4">Encontre seu próximo veículo:</h2>
      <div className="mb-4">
        <select id="marca" className="block w-full py-2 px-32 border border-gray-300 rounded-md">
          <option value="marca1">Marca</option>
        </select>
      </div>
      <div className="mb-4">
        <select id="modelo" className="block w-full p-2 px-32 border border-gray-300 rounded-md">
          <option value="modelo1">Modelo</option>
        </select>
      </div>
      <div className="mb-4">
        <select id="ano" className="block w-full py-2 px-32 border border-gray-300 rounded-md">
          <option value="ano1">Ano</option>
        </select>
      </div>
      <RangeSlider />
      <Button type="submit">
        Pesquisar
      </Button>
    </div>
  );
}

export default Filter;
