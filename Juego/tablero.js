//TABLERO
var figura1 = new THREE.Shape();
figura1.moveTo(-350, -350);
figura1.lineTo(-350, 350);
figura1.lineTo(350, 350);
figura1.lineTo(350,-350);
figura1.lineTo(-350, -350);
var forma1 = new THREE.ExtrudeGeometry( figura1,{amount: 10} );
var material1 = new THREE.MeshNormalMaterial();
var malla1 = new THREE.Mesh( forma1, material1 );




//ESCENA
var escena = new THREE.Scene();
escena.add(malla1);



malla1.rotateX(Math.PI);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

