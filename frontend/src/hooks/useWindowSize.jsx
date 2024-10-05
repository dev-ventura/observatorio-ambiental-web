import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    // Función que actualiza el estado con el tamaño actual de la ventana
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Escuchar el evento de redimensionamiento de la ventana
    window.addEventListener('resize', handleResize);

    // Llamar a la función inmediatamente para evitar que el estado esté desfasado
    handleResize();

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export default useWindowSize;
