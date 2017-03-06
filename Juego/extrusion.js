//EXTRUSION
var figura1 = new THREE.Shape();
figura1.moveTo(-20, -20);
figura1.lineTo(-20, 20);
figura1.lineTo(20, 20);
figura1.lineTo(20,-20);
figura1.lineTo(-20, -20);
var forma1 = new THREE.ExtrudeGeometry( figura1,{amount: 70} );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh( forma1, material1 );
var escena = new THREE.Scene();

escena.add(malla1); //TABLERO
malla1.rotateY( Math.PI );

var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
