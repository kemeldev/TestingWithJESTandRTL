Jest utiliza una convension de nombres para buscar los archivos

files with .test.js or .test.jsx 
files with .spec.js or .spec.tsx
files with .js or .tsx in __test__   folders

Code Coverage:
metric to understand how much of the code is tested
-Statement coverage
-Branches coverage
-Function coverage
-Line coverage

en scripts del package.json usamos este codigo.

el texto de --collectCoverageFrom.... le indica al sistema de donde tiene que hacer la evaluacion de los test, porque sino el ve todo el documento y daria porcentajes bajos de files donde no se necesitan test

"coverage": "yarn test --coverage --watchAll --collectCoverageFrom='src/components/**/*.{ts,tsx}' --collectCoverageFrom=!src/components/**/*.{types,stories,constants,test,spec}.{ts,tsx}"

Podemos agregar un threshold para que tenga que alcanzar cierta métrica, esto lo agregamos en el package.JSon 

jest": {
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": -10
      }
    }
  }

  RECORDAR EL HTML QUE NOS ENTREGA COVERAGE PARA VER LAS METRICAS EN EL NAVEGADOR

  ASSETIONS
    usamos el comando expect(recibe un valor) y ese valor le pasamos una asert function, es decir,
    algo contra lo que tiene que compararse y revisar si es correcto.
    Hay montones de matchers, algunos comunes serian https://jestjs.io/docs/using-matchers

    Jest incluye una gran variedad de matchers por defecto, pero estos nos estan relacionados con el DOM
    para tener assertions del DOM hay que descargar el paquete jest-dom, el mismo ya viene incluido en 
    create-react-app, como parte de testing library, pero habra que ver para otros bundlers