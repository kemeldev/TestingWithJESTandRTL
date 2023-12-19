import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { AppProviders } from './components/providers/AppProviders'

// este codigo lo sacamos de la documentacion
// https://testing-library.com/docs/react-testing-library/setup
// basicamente lo que hace es que para los archivos de test, le pasemos un proovedor de forma general y asi no hay que estarlo pasando individualmente a cada test

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AppProviders, ...options })
// el AppProviders es nuestro provider de material UI pero podria ser de cualquiera

export * from '@testing-library/react'
export { customRender as render }