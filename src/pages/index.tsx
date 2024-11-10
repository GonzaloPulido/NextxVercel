import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  const fetchMessage = async (tipo:any) => {
    try {
      const response = await fetch(`/api/saludo?tipo=${tipo}`);
      if (!response.ok) throw new Error('Error en la petición');
      
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error al obtener el mensaje:', error);
      alert('Hubo un error');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Landing page Grupo 1</h1>
      <button onClick={() => fetchMessage('saludo')} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}>
        Saludar
      </button>
      <button onClick={() => fetchMessage('dios')} style={{ padding: '10px 20px', fontSize: '16px', margin: '10px' }}>
        ?????
      </button>
    </div>
  );
}
