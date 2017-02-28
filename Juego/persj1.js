var forma=new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 5,  0,  5 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 5,  0, -5 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-5,  0, -5 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-5,  0,  5 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 5, 15,  5 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 5, 15, -5 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-5, 15, -5 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-5, 15,  5 ) ); // Vértice 7
forma.vertices.push( new THREE.Vector3( 0, 20,  0 ) ); // Vértice 0

forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 0, 5, 6 ) ); // Cara 2
forma.faces.push( new THREE.Face3( 6, 0, 1 ) ); // Cara 3
forma.faces.push( new THREE.Face3( 1, 2, 7 ) ); // Cara 4
forma.faces.push( new THREE.Face3( 1, 6, 7 ) ); // Cara 5
forma.faces.push( new THREE.Face3( 7, 2, 3 ) ); // Cara 6
forma.faces.push( new THREE.Face3( 3, 7, 4 ) ); // Cara 7
forma.faces.push( new THREE.Face3( 4, 3, 5 ) ); // Cara 8
forma.faces.push( new THREE.Face3( 3, 5, 0 ) ); // Cara 9
forma.faces.push( new THREE.Face3( 5, 6, 8 ) ); // Cara 10
forma.faces.push( new THREE.Face3( 6, 7, 8 ) ); // Cara 11
forma.faces.push( new THREE.Face3( 7, 4, 8 ) ); // Cara 12
forma.faces.push( new THREE.Face3( 4, 5, 8 ) ); // Cara 13

forma.computeBoundingSphere();
forma.computeFaceNormals();
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 150;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );



