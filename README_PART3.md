Priority order or queries this is from part 2
  getByRole
  getByLabelTest
  getByPlaceHolderText
  getByText
  getByDisplayValue
  getByAltText
  getByTitle
  getByTestId

QueryMultiple Element

  cuando queremos testear un elemento que existe pero no se renderiza en el DOM como un condicional u otro, usamos el Query by
  queryAllBy.. Query  basicamente se pueden usar todos los métodos de arriba

Tenemos un tercer metodo de busqueda para elementos que no aparecen inicialmente en el DOM pero luego aparecen, como condicionales o elementos fetcheados que aparecen al ratito etc. Tambien para lo que desaparecen

findBy and findAllBy

devuelve una promesa cuando el elemento es encontrado


cada vez que pasamos este dato "const listItemElements = screen.getAllByRole('listitem')"

lo que pasamos no es necesarimente un string, sino que puede ser un 
  * String
      Ejemplos   <div>Hello World<div>
                  Podemos pasarlo de la siguientes maneras
                  screen.getByText('Hello World')
                  screen.getByText('llo Wol',{exact:false})
                  screen.getByText('hello world,{exact:false})

                  todos son métodos válidos
  * Regex
      Ejemplos   <div>Hello World<div>
                  Podemos pasarlo de la siguientes maneras
                  screen.getByText(/World/)
                  screen.getByText(/world/i,)
                  screen.getByText(/^hello world$/i)

                  cualquier Regex que haga match con el element text funciona

  * funtion             usamos una funcion para identificar el texto
      Ejemplos   <div>Hello World<div>
                      Podemos pasarlo de la siguientes maneras
                      screen.getByText((content) => content.startsWith('Hello'))                      

                      cualquier funcion que haga match con el element text funciona

                