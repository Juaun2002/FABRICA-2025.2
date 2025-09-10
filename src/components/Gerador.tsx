"use client";

import React, { useState } from 'react'
import { generatePassword } from '@/lib/password';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-regular-svg-icons';


const Gerador = () => {
  const [passwordSize, setPasswordSize] = useState(10);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordSize(Number(event.target.value));
  }

  const handleGeneratePassword = () => {
    const newPassword = generatePassword(passwordSize);
    setPassword(newPassword);
    setShowPassword(true);
  }

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    alert("Senha copiada para a área de transferência!");
  }

  return (
    <main className="flex-grow flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4 text-lg">
          <span>Tamanho</span>
          <span>
            <span id="valor" className="font-bold text-emerald-600">{passwordSize}</span>
            <span className="ml-1">Caracteres</span>
          </span>
        </div>
        <input type="range" id="slider" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" min="8" max="25" value={passwordSize} onChange={handleSizeChange} />
        <button id="button" onClick={handleGeneratePassword} className="w-full mt-4 bg-emerald-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-emerald-700 transition-colors duration-300">
          Gerar senha
        </button>
      </div>

      {showPassword && (
        <div id="container-password" onClick={handleCopyPassword} className="w-full max-w-md mt-6 p-4 bg-gray-800 rounded-lg cursor-pointer transition-opacity duration-300 hover:opacity-90">
          <span className="block text-center text-white font-medium">Sua senha gerada foi:</span>
          <span id="password" className="block text-center text-emerald-500 text-2xl my-2 break-all">
            {password}
          </span>
          <span className="block text-center text-gray-400 text-sm"><FontAwesomeIcon icon={faFile} /></span>
        </div>
      )}
    </main>
  )
}

export default Gerador