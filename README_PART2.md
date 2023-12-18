What to test?
  -that the component renders
  -that the component renders with props
  -that the component renders in different states
  -test component react to events

What not to test?
  -Implementation details,  test the behavior and not how the behavior is implemented
  -Third party code
  -Code that is not important from user point of view


RTL Queries
  -methods that testing library provides to find elements on the page
  * getBy..
  * queryBy..
  * findBy..
  - to find multiple elements we use
  * getAllBy..
  * queryAllBy..
  * findAllBy..
los 2 puntos es porque podemos tener varios roles de elemento Role, LabelText, Text , PlaceHolderText,DisplayValue, AltText, Title, TestId

  getByRole es una forma semantica de indicar que el contenido usa Accesabilidad 

  getByLabelTest will search for the label that matches the given text, then find the element associated with that label

  getByPlaceHolderText as it sounds

  getByText como suena, suele usarse para <p> <div> <span>

  getByDisplayValue 

  getByAltText  solo sirve para elemento que aceptan un alt text como <img> <area> <input>

