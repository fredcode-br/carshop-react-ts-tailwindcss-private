function Sell() {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Lógica para enviar o formulário (a ser implementada)
//   };

  return (
    <div className="container mx-auto pt-8 pb-14 px-4 md:px-8 lg:px-16 xl:px-32">
      <h2 className="text-center font-bold font-poppins text-4xl pb-4">Vender</h2>
      <div className="flex flex-col bg-white rounded-lg p-8 gap-3">
        <form >
          {/* Dados do Vendedor */}
          <div className="w-full">
            <h3 className="text-lg font-bold mb-2">Informações do Vendedor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium text-gray-700">Nome</label>
                <input type="text" id="nome" name="nome" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="sobrenome" className="block text-sm font-medium text-gray-700">Sobrenome</label>
                <input type="text" id="sobrenome" name="sobrenome" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" id="email" name="email" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="telefone" className="block text-sm font-medium text-gray-700">Telefone</label>
                <input type="tel" id="telefone" name="telefone" className="mt-1 p-2 border rounded-md w-full" />
              </div>
            </div>
          </div>

          {/* Dados do Veículo */}
          <div className="w-full mt-8">
            <h3 className="text-lg font-bold mb-2">Informações do Veículo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="marca" className="block text-sm font-medium text-gray-700">Marca</label>
                <input type="text" id="marca" name="marca" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="modelo" className="block text-sm font-medium text-gray-700">Modelo</label>
                <input type="text" id="modelo" name="modelo" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="versao" className="block text-sm font-medium text-gray-700">Versão</label>
                <input type="text" id="versao" name="versao" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="ano" className="block text-sm font-medium text-gray-700">Ano</label>
                <input type="number" id="ano" name="ano" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="quilometragem" className="block text-sm font-medium text-gray-700">Quilometragem</label>
                <input type="number" id="quilometragem" name="quilometragem" className="mt-1 p-2 border rounded-md w-full" />
              </div>
              <div>
                <label htmlFor="valorDesejado" className="block text-sm font-medium text-gray-700">Valor Desejado</label>
                <input type="number" id="valorDesejado" name="valorDesejado" className="mt-1 p-2 border rounded-md w-full" />
              </div>
            </div>

            {/* Upload de Imagens */}
            <div className="mt-4">
              <label htmlFor="imagens" className="block text-sm font-medium text-gray-700">Carregar Imagens do Veículo</label>
              <input type="file" id="imagens" name="imagens" multiple className="mt-1 p-2 border rounded-md w-full" />
            </div>
          </div>

          {/* Botão Enviar */}
          <div className="flex justify-center w-full mt-8">
            <button type="submit" className="bg-black text-white py-2 px-12 rounded-md">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sell;
