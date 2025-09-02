import React, { useState } from "react";

export default function ImportPage() {
  const [fileName, setFileName] = useState(null);
  const [autoTags, setAutoTags] = useState(true);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/json") {
      setFileName(file.name);
    } else {
      alert("Por favor selecciona un archivo JSON válido.");
    }
  };

  const handleImport = () => {
    if (!fileName) {
      alert("Selecciona un archivo primero.");
      return;
    }
    alert(`Importando ${fileName} con etiquetas automáticas: ${autoTags}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">Importador JSON</h2>

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center mb-4">
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
            id="jsonUpload"
          />
          <label
            htmlFor="jsonUpload"
            className="cursor-pointer block p-4 text-blue-500 hover:underline transition duration-200"
          >
            {fileName
              ? `Archivo seleccionado: ${fileName}`
              : "Arrastra y suelta tu archivo JSON aquí, o haz clic para seleccionar uno"}
          </label>
          <p className="text-sm text-gray-500 mt-2">El archivo debe contener un array de objetos.</p>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={autoTags}
            onChange={() => setAutoTags(!autoTags)}
            className="mr-2 focus:outline-none"
            id="autoTags"
          />
          <label htmlFor="autoTags" className="text-sm">
            Crear etiquetas automáticas desde campo <code>'tags'</code>
          </label>
        </div>

        <button
          onClick={handleImport}
          className="w-full bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600 transition duration-300 focus:outline-none"
        >
          Importar ahora
        </button>
      </div>
    </div>
  );
}
