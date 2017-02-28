var figura = new THREE.Shape();

figura.moveTo(5, 5);
figura.lineTo(5, 40);
figura.lineTo(40, 40);
figura.lineTo(40, 5);
figura.lineTo(5, 5);

var forma = new THREE.ExtrudeGeometry( figura,{amount: 1} );
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/4);
malla.rotateY( Math.PI/2);
var escena = new THREE.Scene();
escena.add(malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 150;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.80, window.innerHeight*.80 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );


