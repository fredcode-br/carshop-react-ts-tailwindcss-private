import { useState } from "react"; // Importe o useState
import { HomeIcon, TruckIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/logoadm.png";
import { Link } from "react-router-dom";

function SideBar() {
  const [activeLink, setActiveLink] = useState(""); // Estado para armazenar o link ativo


  const handleSetActiveLink = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="flex-shrink-0 w-64 bg-dark-100 p-4">
      <div className="flex items-center justify-center h-16 text-white">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="flex-1 mt-5 px-2">
        <Link
          className={`flex items-center py-2 px-4 text-white hover:text-orange-600 cursor-pointer ${
            activeLink === "dashboard" && "text-orange-600" // Adiciona a classe text-orange-600 se o link ativo for "dashboard"
          }`}
          to="/dashboard"
          onClick={() => handleSetActiveLink("dashboard")} // Define o link ativo como "dashboard" quando clicado
        >
          <HomeIcon className="h-6 w-6 mr-3" />
          Dashboard
        </Link>
        <Link
          className={`flex items-center py-2 px-4 text-white hover:text-orange-600 cursor-pointer ${
            activeLink === "categorias" && "text-orange-600" // Adiciona a classe text-orange-600 se o link ativo for "categorias"
          }`}
          to="/categorias"
          onClick={() => handleSetActiveLink("categorias")} // Define o link ativo como "categorias" quando clicado
        >
          <HomeIcon className="h-6 w-6 mr-3" />
          Categorias
        </Link>
        {/* Repita o mesmo padrão para outros links */}
        <Link
          className={`flex items-center py-2 px-4 text-white hover:text-orange-600 cursor-pointer ${
            activeLink === "fabricantes" && "text-orange-600"
          }`}
          to="/fabricantes"
          onClick={() => handleSetActiveLink("fabricantes")}
        >
          <HomeIcon className="h-6 w-6 mr-3" />
          Fabricantes
        </Link>
        <Link
          className={`flex items-center py-2 px-4 text-white hover:text-orange-600 cursor-pointer ${
            activeLink === "tipos-de-veiculos" && "text-orange-600"
          }`}
          to="/tipos-de-veiculos"
          onClick={() => handleSetActiveLink("tipos-de-veiculos")}
        >
          <HomeIcon className="h-6 w-6 mr-3" />
          Tipos de Veículos
        </Link>
        <Link
          className={`flex items-center py-2 px-4 text-white hover:text-orange-600 cursor-pointer ${
            activeLink === "veiculos" && "text-orange-600"
          }`}
          to="/veiculos"
          onClick={() => handleSetActiveLink("veiculos")}
        >
          <TruckIcon className="h-6 w-6 mr-3" />
          Veiculos
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;
