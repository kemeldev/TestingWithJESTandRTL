User Interaction
  click or keyboard need to be tested

to test them we use  

user-event 
  is a library for testing and simulates users interactions by dispatching events that would happen 
  is is the recommended way to test interactions with RTL however there are other libraries
  this library is installed by default in create react app

Pointer Interactions
  el click que usamos en la libreria no es de la APIs original sino que es algo llamado Convinience APIs que llama a la API "original"

Convenience APIs
  tiene los eventos de 
  
  click()
  dblClick()
  tripleClick()
  hover()
  unhover()

Tambien podemos llamar a Ponter APIs
  Ver la documentacion


Keybord Interactions

  Utility API 
    clear()  para limpiar un elemento editable como inputs
    selectOptions() para seleccionar elementos en elementos de seleccion multiples como los Select tags o             list box
    deselectOptions() lo mismo pero la deseleccionar
    upload() to change an input in a option where info can be updated

  Convenience API
    tab()

  Clipboard APIs
    copy()
    cut()
    paste()

Keyboard API
   keyboard('foo') se traduce como que se tecleó f, o ,o
   keyboard('{Shift>}A{/Shift}') teclas especiales tiene que ir entre curly braces, en este caso estamos viendo la representacion de dejar presionado Shift por eso el simbolo > luego presionar la tecla A y luego soltar el shift