Mock Functions

    jest.fn()

    permite crear funciones dentro del test
    sirve para cuando no se tiene definido los parametros de la funcion original a testear

Mocking HTTP request

    API reales deben ser probadas principalmente en end to end test y no en unit test ni functional
    esto porque no podemos asegurar que el servidor funciona

    y que no representa la realidad de uso del servidor en cuanto a cantidad y uso de peticiones

    por eso lo que hacemos es un mocking de HTTP request como hacer una prueba 

    DESCARGAMOS MOCK SERVICE WORKER  MSW, que como su pagina dice "mock by intercepting request on the network level for testing and debbuging"

    npm install msw --save-dev

    Esto mejor revisarlo luego a detalle. Si hacemos un test de la API como esta actualmente si testea los resultados de la API, pero parece que no es lo correcto, lo que VishWas hace es crear este mock service worker y crea una mock HTTP osea como una respuesta simulada en un servidor que creamos. 