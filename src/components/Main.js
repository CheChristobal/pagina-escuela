import React from 'react';

function Main() {
  const handleClick = () => {
    alert('¡Gracias por tu interés en nuestra escuela de informática!');
  };

  return (
    <main>
      <h2>Bienvenido a nuestra Escuela de Informática</h2>
      <p>Descubre nuestros cursos y participa en nuestros eventos para ampliar tus conocimientos.</p>
      <button onClick={handleClick}>¡Regístrate ahora!</button>
    </main>
  );
}

export default Main;
