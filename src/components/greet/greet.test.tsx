import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"


// test('Greet renders correctly', ()=>{
//   render(<Greet/>)
//   const textElement = screen.getByText(/hello/i)
//   expect(textElement).toBeInTheDocument()
// })

// descrite sirve para agrupar test, recibe 2 parámetros, el nombre y la funcion 
describe.only('Greet', () => {

  //algunas opciones  test.only para que solo testee ese
  // test.skip, para que se salte ese. tambien se pueden usar en el bloque describe, example: describe.only, describe.skip

  // la palabra test puede ser sustituida por "it" "fit" seria equivalente a test.only and "xit" equivalente a test.skip

  test('Greet renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
  })

  // un describe block puede estar anidado dentro de otro
  describe('Nested', () => {
    test('Greet renders with a name', () => {
      render(<Greet name='Kevin'></Greet>)
      const textElement = screen.getByText('Hello Kevin')
      expect(textElement).toBeInTheDocument()
    })

  })

})

