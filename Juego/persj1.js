var forma=new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 5,  0,  5 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 5,  0, -5 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-5,  0, -5 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-5,  0,  5 ) ); // Vértice 3


forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1

forma.computeBoundingSphere();
forma.computeFaceNormals();
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/2);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 100;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );



