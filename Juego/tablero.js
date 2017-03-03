var tablero = new THREE.Shape();

tablero.moveTo(5, 5);
tablero.lineTo(5, 100);
tablero.lineTo(100, 100);
tablero.lineTo(100, 5);
tablero.lineTo(5, 5);

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
renderizador.setSize( window.innerHeight*1 , window.innerHeight*1);
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


