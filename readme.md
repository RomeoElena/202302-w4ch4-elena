# W4 CH4

Week 4 - Challenge 3
Teléfono React
Aquí tienes la maquetación HTML/CSS de una aplicación, tendrás que programarla en React.

1. Se debe poder escribir un número de teléfono clicando en los botones numéricos. La tecla borrar puede borrar el último dígito o borrar el número completo, como prefieras.
2. Sólo se verá o el botón Llamar o el botón Colgar, nunca los dos a la vez.
3. No se puede introducir un número de más de 9 cifras.
   4.El botón Llamar sólo se puede pulsar si el número tiene 9 cifras. Cuando tenga 9 cifras el botón debe tener la clase "active".
4. El mensaje superior "Llamando..." sólo aparece cuando se pulsa el botón "Llamar" y mientras dure la llamada. Usa la clase "off" para controlar su visibilidad (el elemento HTML correspondiente debe seguir estando, aunque no se vea).
5. Al pulsar el botón "Llamar", éste debe desaparecer del DOM y debe aparecer en su lugar el botón "Colgar". El teclado tiene que quedar deshabilitado.
6. Al pulsar el botón "Colgar", éste debe desaparecer y debe aparecer en su lugar el botón "Llamar". El teclado tiene que habilitarse. Además, se debe borrar el número de teléfono.
7. Si no ocurre nada tras cinco segundos de llamada, ésta se debe colgar automáticamente.

   Separa todo en los siguientes componentes:

- Info
- Display
- Actions
  - Action
- Keyboard

  - Key

  Listado de responsabilidades: (Foto en carpeta public)

  PINTAR-RECIBIR-INTERACTUAR

  4 componentes:

  1-Componentes - Info
  2-Componentes - Display
  3-Componentes - Actions ------Action
  4-Componentes - Keyboard (Pin-----Key
