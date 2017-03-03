var forma=new THREE.Geometry();
//cuerpo VERTICES
forma.vertices.push( new THREE.Vector3( 50,  0,  50 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 50,  0, -50 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-50,  0, -50 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-50,  0,  50 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 50, 150,  50 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 50, 150, -50 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-50, 150, -50 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-50, 150,  50 ) ); // Vértice 7

//brazo VERTICES
forma.vertices.push( new THREE.Vector3( 50,  0,  25 ) ); // Vértice 8--0
forma.vertices.push( new THREE.Vector3( 50,  0, -25 ) ); // Vértice 9---1
forma.vertices.push( new THREE.Vector3(-75,  0, -25 ) ); // Vértice 10---2
forma.vertices.push( new THREE.Vector3(-75,  0,  25 ) ); // Vértice 11---3
forma.vertices.push( new THREE.Vector3( 50, 50,  25 ) ); // Vértice 12---4
forma.vertices.push( new THREE.Vector3( 50, 50, -25 ) ); // Vértice 13---5
forma.vertices.push( new THREE.Vector3(-75, 50, -25 ) ); // Vértice 14---6
forma.vertices.push( new THREE.Vector3(-75, 50,  25 ) ); // Vértice 15---7


//cuerpo CARAS
forma.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma.faces.push( new THREE.Face3( 0, 1, 5 ) );
forma.faces.push( new THREE.Face3( 5, 4, 0 ) );
forma.faces.push( new THREE.Face3( 0, 4, 7 ) );
forma.faces.push( new THREE.Face3( 7, 3, 0 ) );
forma.faces.push( new THREE.Face3( 3, 7, 6 ) );
forma.faces.push( new THREE.Face3( 6, 2, 3 ) );
forma.faces.push( new THREE.Face3( 2, 6, 5 ) );
forma.faces.push( new THREE.Face3( 5, 1, 2 ) );
forma.faces.push( new THREE.Face3( 4, 5, 6 ) );
forma.faces.push( new THREE.Face3( 6, 7, 4 ) );

//brazo CARAS

forma.faces.push( new THREE.Face3( 8, 9,10 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 10, 11, 8) ); // Cara 1
forma.faces.push( new THREE.Face3( 8, 9, 13 ) );
forma.faces.push( new THREE.Face3( 13, 12, 8 ) );
forma.faces.push( new THREE.Face3( 8, 12, 15 ) );
forma.faces.push( new THREE.Face3( 15, 11, 8 ) );
forma.faces.push( new THREE.Face3( 11, 15, 14 ) );
forma.faces.push( new THREE.Face3( 14, 10, 11 ) );
forma.faces.push( new THREE.Face3( 10, 14, 13 ) );
forma.faces.push( new THREE.Face3( 13, 9, 10 ) );
forma.faces.push( new THREE.Face3( 12, 13, 14 ) );
forma.faces.push( new THREE.Face3( 14, 15, 12 ) );

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
renderizador.setSize( window.innerHeight, window.innerHeight );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );



