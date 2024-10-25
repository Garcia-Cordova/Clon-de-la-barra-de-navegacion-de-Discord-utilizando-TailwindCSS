import React, { useState } from 'react';
import { FaDiscord, FaUserFriends, FaHashtag, FaCogs, FaPlus, FaMicrophone, FaHeadphones, FaCog } from 'react-icons/fa';
import './App.css'; // Importamos el CSS

const Sidebar = () => {
  const [active, setActive] = useState('discord'); // Para manejar el ícono activo

  return (
    <div className="sidebar flex flex-col items-center bg-gray-900 h-screen w-20 space-y-4 pt-5">
      {/* Logo de Discord */}
      <div 
        className={`sidebar-logo w-14 h-14 rounded-full bg-indigo-700 flex items-center justify-center hover:bg-indigo-600 transition duration-300 cursor-pointer ${active === 'discord' && 'ring-4 ring-white'}`}
        onClick={() => setActive('discord')}
      >
        <FaDiscord className="text-white w-8 h-8" />
      </div>

      {/* Iconos de la barra de navegación */}
      <div className="flex flex-col items-center space-y-4">
        <SidebarItem icon={FaHashtag} active={active} setActive={setActive} name="channels" />
        <SidebarItem icon={FaUserFriends} active={active} setActive={setActive} name="friends" />
        <SidebarItem icon={FaCogs} active={active} setActive={setActive} name="settings" />
        <SidebarItem icon={FaPlus} active={active} setActive={setActive} name="add" />
      </div>

      {/* Controles inferiores */}
      <div className="mt-auto mb-6 space-y-4">
        <SidebarItem icon={FaMicrophone} active={active} setActive={setActive} name="microphone" />
        <SidebarItem icon={FaHeadphones} active={active} setActive={setActive} name="headphones" />
        <SidebarItem icon={FaCog} active={active} setActive={setActive} name="config" />
      </div>
    </div>
  );
};

// Componente reutilizable para los íconos de la barra
const SidebarItem = ({ icon: Icon, active, setActive, name }) => (
  <div
    className={`w-12 h-12 rounded-lg flex items-center justify-center hover:bg-indigo-500 transition duration-300 cursor-pointer ${
      active === name ? 'bg-indigo-600 ring-4 ring-indigo-400' : 'bg-gray-700'
    }`}
    onClick={() => setActive(name)}
  >
    <Icon className="text-white w-6 h-6" />
  </div>
);

export default Sidebar;
