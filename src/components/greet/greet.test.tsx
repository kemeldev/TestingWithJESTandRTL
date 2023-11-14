import { render , screen } from "@testing-library/react"
import { Greet } from "./greet"

// test('Greet renders correctly', ()=>{
//   render(<Greet/>)
//   const textElement = screen.getByText(/hello/i)
//   expect(textElement).toBeInTheDocument()
// })

test('Greet renders correctly', ()=> {
  render(<Greet />)
  const textElement = screen.getByText('Hello')
  expect(textElement).toBeInTheDocument()
})

test('Greet renders with a name', ()=>{
  render(<Greet name='Kevin'></Greet>)
  const textElement = screen.getByText('Hello Kevin')
  expect(textElement).toBeInTheDocument()
})