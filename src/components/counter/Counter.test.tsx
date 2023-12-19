import { render, screen } from '@testing-library/react'
import { Counter } from './Counter'
// esta es la libreria para testear eventos de usuario
import user from '@testing-library/user-event'

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    expect(incrementButton).toBeInTheDocument()
    const amountInput = screen.getByRole('spinbutton')
    expect(amountInput).toBeInTheDocument()
    const setButton = screen.getByRole('button', { name: 'Set' })
    expect(setButton).toBeInTheDocument()
  })

  // aca vamos a testear el estado inicial de nuestro componente
  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  // todas las user - event APIs tineen que ser asyncronas
  test('renders a count of 1 after clicking the increment button', async () => {
    // crear una instancia del user event
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    // simular the click interaction

    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  test('renders a count of 2 after clicking the increment button twice', async () => {
    user.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.click(incrementButton)
    await user.click(incrementButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('2')
  })

  test('rendres a count of 10 after clicking the set button', async () => {
    user.setup()
    render(<Counter />)
    // for an input of type number el rol es spinbutton y no textbox como el input de text
    const amountInput = screen.getByRole('spinbutton')
    // user . type simula lo que estaria ingresando el usuario
    await user.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)
    const setButton = screen.getByRole('button', { name: 'Set' })
    // simular the click interaction
    await user.click(setButton)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  // este test es para que al hacer tab, haga focused en el elemento deseado
  test('elements are focused in the right order', async () => {

    user.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', { name: 'Increment' })
    await user.tab()
    expect(incrementButton).toHaveFocus()
    await user.tab()
    expect(amountInput).toHaveFocus()
    await user.tab()
    expect(setButton).toHaveFocus()
  })
})