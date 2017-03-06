//EXTRUSION
var figura8 = new THREE.Shape();
figura8.moveTo(-20, -20);
figura8.lineTo(-20, 20);
figura8.lineTo(20, 20);
figura8.lineTo(-20, -20);

var forma8 = new THREE.ExtrudeGeometry( figura8,{amount: 100} );
var material8 = new THREE.MeshNormalMaterial();
var malla8 = new THREE.Mesh( forma8, material8 );
malla8.translate(-250,250,-100);


var escena = new THREE.Scene();
escena.add(malla8); //TABLERO
malla8.rotateX(Math.PI/4);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
