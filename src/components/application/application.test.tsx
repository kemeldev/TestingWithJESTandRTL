import { render, screen } from "@testing-library/react";
import { Application } from "./application";

// para saber los roles de los elementos https://testing-library.com/docs/queries/byrole

describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)
    // testeamos el renderizado del input text, como hay varios elemento del tipo input text, le pasmos como propiedad el nombre asignado al elemento
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()
    // testeamos el renderizado del input text
    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    // Lo mismo pero usando el get by label text
    const nameElement2 = screen.getByLabelText('Name')
    // const nameElement2 = screen.getByLabelText('Name',{
    //   selector: 'input'
    // }) si hubieran 2 elementos con el mismo label
    expect(nameElement2).toBeInTheDocument()

    // lo mismo pero usando la opcion, by placeholder
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Kevin')
    expect(nameElement4).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory')
    expect(paragraphElement).toBeInTheDocument()


    const imgElement = screen.getByAltText('a person with a laptop')
    expect(imgElement).toBeInTheDocument()

    const spanElement = screen.getByTitle('close')
    expect(spanElement).toBeInTheDocument()

    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()


    // testeamos el renderizado del uno de los heading (<h1>Job application form</h1>)
    const pageHeading = screen.getByRole('heading', {
      name: 'Job application form', // tambien podriamos sustituir el nombre: ...   por un level:1 significando h1
    })
    expect(pageHeading).toBeInTheDocument()

    // testeamos el renderizado del select
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()
    // testeamos el input checkbox del select
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()
    // testeamos el button 
    const submitButton = screen.getByRole('button')
    expect(submitButton).toBeInTheDocument()

  })
})