var forma=new THREE.Geometry();
forma.vertices.push( new THREE.Vector3( 50,  0,  50 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 50,  0, -50 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-50,  0, -50 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-50,  0,  50 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 50, 150,  50 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 50, 150, -50 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-50, 150, -50 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-50, 150,  50 ) ); // Vértice 7



forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 0, 4, 1 ) );
forma.faces.push( new THREE.Face3( 1, 4, 5 ) );
forma.faces.push( new THREE.Face3( 5, 1, 2 ) );
forma.faces.push( new THREE.Face3( 2, 5, 6 ) );
forma.faces.push( new THREE.Face3( 6, 2, 3 ) );
forma.faces.push( new THREE.Face3( 3, 6, 7 ) );
forma.faces.push( new THREE.Face3( 7, 4, 3 ) );
forma.faces.push( new THREE.Face3( 3, 0, 4 ) );
forma.faces.push( new THREE.Face3( 4, 5, 6 ) );
forma.faces.push( new THREE.Face3( 6, 7, 4 ) );

forma.computeBoundingSphere();
forma.computeFaceNormals();
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX(Math.PI/4);
var escena = new THREE.Scene();
escena.add( malla );
var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );



