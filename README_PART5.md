Testing Providers
  
    Para este ejemplo primero instalamos Material UI ' npm install @mui/material @emotion/react @emotion/styled'

    Tambien se podrian probar otros providers como redux, custom providers etc

    Los test que incluyen un proovedor hay que pasarles el componente wrapper individualmente, pero esto habria que hacerlo para cada test, por lo que RTL nos permite un opcion de tener un envoltorio general

    https://testing-library.com/docs/react-testing-library/setup

    aca la pagina y copio la documentacion

    Custom Render
It's often useful to define a custom render method that includes things like global context providers, data stores, etc. To make this available globally, one approach is to define a utility file that re-exports everything from React Testing Library. You can replace React Testing Library with this file in all your imports. See below for a way to make your test util file accessible without using relative paths.






Testing React Hooks

    Para probar hooks tenemos que importar la opcion renderHook
    import { renderHook } from '@testing-library/react'
    porque sino el test indica que el hook solo puede renderizarse dentro de un componente

    Act Utility 

    act()
To prepare a component for assertions, wrap the code rendering it and performing updates inside an act() call. This makes your test run closer to how React works in the browser.

When writing UI tests, tasks like rendering, user events, or data fetching can be considered as “units” of interaction with a user interface. React provides a helper called act() that makes sure all updates related to these “units” have been processed and applied to the DOM before you make any assertions

    Cualquier componente que haga una actualizacion del estado debe ser envuelto en el componente App

    BASICAMENTE ES UNA FUNCION QUE ACTUALIZA EL ESTADO ANTES DE HACER LAS ASSERCIONES
    
    import { renderHook, act } from '@testing-library/react'
