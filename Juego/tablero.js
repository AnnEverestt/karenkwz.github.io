var figura = new THREE.Shape();

figura.moveTo(-100, -100);
figura.lineTo(-100, 100);
figura.lineTo(100, 100);
figura.lineTo(100,-100);
figura.lineTo(-100, -100);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
var escena = new THREE.Scene();
escena.add(malla);
malla.rotateX(Math.PI/3)
var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

