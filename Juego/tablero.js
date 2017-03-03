var figura = new THREE.Shape();

figura.moveTo(-10, -10);
figura.lineTo(-10, 100);
figura.lineTo(100, 100);
figura.lineTo(100,-10);
figura.lineTo(-10, -10);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 10} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI*(3/4));
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 300;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

