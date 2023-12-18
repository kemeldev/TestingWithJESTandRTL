import React from 'react';
// tenemos que crear un virtual dom para poder hacer la prueba, por defecto jest solo ejecuta testing, por lo que usamos el enviroment the RTL para renderizar, en este caso el componente APP (ver abajo)
import { render, screen } from '@testing-library/react';
import App from './App';

// test takes 3 arguments, first is the name use to identify the test
// second is a function that contains the expectations to test
// third is optional, you can define the timeout value of the execution, default is 5seconds

test('renders learn react link', () => {
  // renderizamos el app
  render(<App />);
  // usamos la propiedad getbytext que puede recibir un texto o un regex
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
