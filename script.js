// alert("Hola mundo!!!");

let app = document.getElementById('app');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

//reconoces una acción porque tienen paréntesis después del nombre de la acción
typewriter
  .pauseFor(2500)
  .typeString('Valentina Rosales')
  .pauseFor(300)
  .deleteAll()
  .typeString('Desarrolladora Frontend Jr')
  .pauseFor(1000)
  .start();