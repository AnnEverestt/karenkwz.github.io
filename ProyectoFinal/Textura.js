function Completo(){
  THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var cara = THREE.ImageUtils.loadTexture('https://karenkwz.github.io/ProyectoFinal/colores.gif');
  var brazos = THREE.ImageUtils.loadTexture('https://karenkwz.github.io/ProyectoFinal/rojo.gif');
  var pies = THREE.ImageUtils.loadTexture('https://karenkwz.github.io/ProyectoFinal/azul.gif');  
  
  
   
this.cuerpo = new THREE.Mesh(new THREE.SphereGeometry(3,100,100),new THREE.MeshLambertMaterial({map:cara}));
  this.brazoI = new THREE.Mesh(new THREE.BoxGeometry(1,0.5,2),new THREE.MeshLambertMaterial({map:brazos}));
  this.brazoD = new THREE.Mesh(new THREE.BoxGeometry(1,0.5,2),new THREE.MeshLambertMaterial({map:brazos}));
  this.pieI = new THREE.Mesh(new THREE.SphereGeometry(1,1,0.5),new THREE.MeshLambertMaterial({map:pies}));
  this.pieD = new THREE.Mesh(new THREE.SphereGeometry(1,1,0.5),new THREE.MeshLambertMaterial({map:pies}));
  
  this.brazoI.position.z=2.3;
  this.brazoD.position.z=-2.3;
  this.pieD.position.y=-3;
  this.pieD.position.z=1;
  this.pieI.position.y=-3;
  this.pieI.position.z=-1;
  this.pieD.position.x=1;
  this.pieI.position.x=1;
  this.brazoD.rotation.x=1.5;
  this.brazoI.rotation.x=-1.5;
  
  this.add(this.pieI)
  this.add(this.pieD)
  this.add(this.brazoI)
  this.add(this.brazoD)
  this.add(this.cuerpo)
}

Completo.prototype = new THREE.Object3D();

function setup(){
  personaje = new Completo();
  
  step  =0.01;
  stepbrazo = 0.017;
  
  luzPuntual = new THREE.PointLight(0xffffff);
  luzPuntual.position.x=30;
  luzPuntual.position.y=30;
  luzPuntual.position.z=30;
  
  escena = new THREE.Scene();
  escena.add(personaje);
  escena.add(luzPuntual);
    
 camara = new THREE.PerspectiveCamera();
  camara.position.z = 50;
  
  renderer = new THREE.WebGLRenderer();
  renderer.setSize( window.innerHeight*.95, window.innerHeight*.95);
  document.body.appendChild(renderer.domElement);
}
function loop(){
requestAnimationFrame( loop );
renderer.render (escena, camara);
if (Math.abs(personaje.pieD.rotation.z) > .1 )
  step = -step;

if (Math.abs(personaje.brazoD.rotation.x) > 2 || Math.abs(personaje.brazoD.rotation.x) < 1)
  stepbrazo = -stepbrazo;

personaje.brazoD.rotation.x += stepbrazo;
personaje.brazoI.rotation.x -= stepbrazo;
personaje.pieD.rotation.z += step;
personaje.pieI.rotation.z -= step;

//kirby.rotation.x += 0.01;
personaje.rotation.y += 0.01;
}

var escena, camara, renderer;
var step, stepbrazo;

setup();
loop();
