import { render, screen } from '@testing-library/react'
import { Skills } from './Skills'

describe('Skills', () => {
  // el file Skills tiene una funcion de .map aplicada a las propiedades que le pasemos,
  // al pasarsle este array estamos indicando que debe renderizar 3 elementos con el contenido HTML, CSS, JavaScript
  const skills = ['HTML', 'CSS', 'JavaScript']
  test('renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  // aca testeamos la longitud del mapeo
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    //Notese que aca usamos el getAllByRoll
    const listItemElements = screen.getAllByRole('listitem')
    expect(listItemElements).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  test('Start Learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start learning',
    })
    // this button is not show showing at first, cause is in a conditional
    // aca tenemos que usar el queryByRole
    expect(startLearningButton).not.toBeInTheDocument()
  })

  // por defecto el test falla si no encuentra nada luego de 1000ms por esto es que le agregamos el parámetro de timeout, para que 'espere lo que se necesite'
  test('Start Learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    // screen.debug() // renderiza el dom tree
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start learning',
      },
      {
        timeout: 2000,
      }
    )
    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})