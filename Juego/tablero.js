var tablero = new THREE.Shape();

figura.moveTo(10, 10);
figura.lineTo(10, 40);
figura.lineTo(40, 40);
figura.lineTo(40, 10);
figura.lineTo(10, 10);

var tablero = new THREE.ExtrudeGeometry( tablero,{amount: 2} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( tablero, material );
malla.rotateY( Math.PI);
malla.rotateY( Math.PI/2 );
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 150;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95 , window.innerHeight*.95);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


