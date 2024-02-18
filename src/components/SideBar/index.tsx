import React, { useState } from 'react';
import { HomeIcon, TruckIcon, UserIcon, ChartBarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/img/logoadm.png";

const SideBar: React.FC = () => {
  const [showVeiculosDropdown, setShowVeiculosDropdown] = useState(false);
  const [showClientesDropdown, setShowClientesDropdown] = useState(false);
  const [showVendasDropdown, setShowVendasDropdown] = useState(false);
  const [showConsignadoDropdown, setShowConsignadoDropdown] = useState(false);

  const handleVeiculosDropdownToggle = () => {
    setShowVeiculosDropdown(!showVeiculosDropdown);
    // Fechar outros dropdowns
    setShowClientesDropdown(false);
    setShowVendasDropdown(false);
    setShowConsignadoDropdown(false);
  };

  const handleClientesDropdownToggle = () => {
    setShowClientesDropdown(!showClientesDropdown);
    // Fechar outros dropdowns
    setShowVeiculosDropdown(false);
    setShowVendasDropdown(false);
    setShowConsignadoDropdown(false);
  };

  const handleVendasDropdownToggle = () => {
    setShowVendasDropdown(!showVendasDropdown);
    // Fechar outros dropdowns
    setShowVeiculosDropdown(false);
    setShowClientesDropdown(false);
    setShowConsignadoDropdown(false);
  };

  const handleConsignadoDropdownToggle = () => {
    setShowConsignadoDropdown(!showConsignadoDropdown);
    // Fechar outros dropdowns
    setShowVeiculosDropdown(false);
    setShowClientesDropdown(false);
    setShowVendasDropdown(false);
  };

  return (
    <div className="flex-shrink-0 w-64 bg-dark-100 p-4">
      <div className="flex items-center justify-center h-16 text-white">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="flex-1 mt-5 px-2">
        <li
            className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
          >
          <HomeIcon className="h-6 w-6 mr-2" />
          Dashboard
        </li>
        <div className="relative">
          <li
            className="flex items-center py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
            onClick={handleVeiculosDropdownToggle}
          >
            <TruckIcon className="h-6 w-6 mr-2" />
            Veículos
          </li>
          {showVeiculosDropdown && (
            <div className="bg-gray-800 text-white py-2 ps-8">
              <li className="cursor-pointer">Option 1</li>
              <li className="cursor-pointer">Option 2</li>
              <li className="cursor-pointer">Option 3</li>
              <li className="cursor-pointer">Option 4</li>
            </div>
          )}
        </div>
        <div className="relative">
          <li
            className="flex items-center block py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
            onClick={handleClientesDropdownToggle}
          >
            <UserIcon className="h-6 w-6 mr-2" />
            Clientes
          </li>
          {showClientesDropdown && (
            <div className="bg-gray-800 text-white py-2 ps-8">
              <li className="cursor-pointer">Option 1</li>
              <li className="cursor-pointer">Option 2</li>
            </div>
          )}
        </div>
        <div className="relative">
          <li
            className="flex items-center block py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
            onClick={handleVendasDropdownToggle}
          >
            <ChartBarIcon className="h-6 w-6 mr-2" />
            Vendas
          </li>
          {showVendasDropdown && (
            <div className="bg-gray-800 text-white py-2 ps-8">
              <li className="cursor-pointer">Option 1</li>
              <li className="cursor-pointer">Option 2</li>
              <li className="cursor-pointer">Option 3</li>
              <li className="cursor-pointer">Option 4</li>
              <li className="cursor-pointer">Option 5</li>
            </div>
          )}
        </div>
        <div className="relative">
          <li
            className="flex items-center block py-2 px-4 text-white hover:bg-gray-700 cursor-pointer"
            onClick={handleConsignadoDropdownToggle}
          >
            <CurrencyDollarIcon className="h-6 w-6 mr-2" />
            Consignado
          </li>
          {showConsignadoDropdown && (
            <div className="bg-gray-800 text-white py-2 ps-8">
              <li className="cursor-pointer">Option 1</li>
              <li className="cursor-pointer">Option 2</li>
              <li className="cursor-pointer">Option 3</li>
              <li className="cursor-pointer">Option 4</li>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
