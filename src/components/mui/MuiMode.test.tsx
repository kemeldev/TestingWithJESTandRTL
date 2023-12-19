// import { render, screen } from "@testing-library/react"
import { render, screen } from "../../test-utils"
import { MuiMode } from './MuiMode'
import { AppProviders } from "../providers/AppProviders"


// describe('MuiMode', () => {
//   // aca vamos a probar que el provedor este psando el dark mode , pero como el componente no esta envuelto en el test, tenemos que agregarle la opcion de wrapper, para que tambien a la hora de testear considere el envoltorio 
//   test('renders text correctly', () => {
//     render(<MuiMode />, {
//       wrapper: AppProviders
//     })
//     const headingElement = screen.getByRole('heading')
//     expect(headingElement).toHaveTextContent('dark mode')
//   })  
// })


// como ya tenemos el provedor de forma general, entonces importamos el test-utils.tsx y corremos nuestro test de forma normal sin tener que pasarle el wrapper individualmente


describe('MuiMode', () => {
  // aca vamos a probar que el provedor este psando el dark mode , pero como el componente no esta envuelto en el test, tenemos que agregarle la opcion de wrapper, para que tambien a la hora de testear considere el envoltorio 
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })

  test('renders text in white color for dark mode', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveStyle({ color: "'rgb(255, 255, 255)'" })
  })
})