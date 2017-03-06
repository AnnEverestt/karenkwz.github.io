var forma=new THREE.Geometry();
//cuerpo VERTICES
forma.vertices.push( new THREE.Vector3( 50,  0,  50 ) ); // Vértice 0
forma.vertices.push( new THREE.Vector3( 50,  0, -50 ) ); // Vértice 1
forma.vertices.push( new THREE.Vector3(-50,  0, -50 ) ); // Vértice 2
forma.vertices.push( new THREE.Vector3(-50,  0,  50 ) ); // Vértice 3
forma.vertices.push( new THREE.Vector3( 50, 100,  50 ) ); // Vértice 4
forma.vertices.push( new THREE.Vector3( 50, 100, -50 ) ); // Vértice 5
forma.vertices.push( new THREE.Vector3(-50, 100, -50 ) ); // Vértice 6
forma.vertices.push( new THREE.Vector3(-50, 100,  50 ) ); // Vértice 7
//brazo1 VERTICES
forma.vertices.push( new THREE.Vector3( 50,  0,  25 ) ); // Vértice 8--0
forma.vertices.push( new THREE.Vector3( 50,  0, -25 ) ); // Vértice 9---1
forma.vertices.push( new THREE.Vector3(-75,  0, -25 ) ); // Vértice 10---2
forma.vertices.push( new THREE.Vector3(-75,  0,  25 ) ); // Vértice 11---3
forma.vertices.push( new THREE.Vector3( 50, 50,  25 ) ); // Vértice 12---4
forma.vertices.push( new THREE.Vector3( 50, 50, -25 ) ); // Vértice 13---5
forma.vertices.push( new THREE.Vector3(-75, 50, -25 ) ); // Vértice 14---6
forma.vertices.push( new THREE.Vector3(-75, 50,  25 ) ); // Vértice 15---7

//brazo2 VERTICES
forma.vertices.push( new THREE.Vector3( -50,  0,  -25 ) ); // Vértice 16--- 8
forma.vertices.push( new THREE.Vector3( -50,  0, 25 ) ); // Vértice 17 ---9
forma.vertices.push( new THREE.Vector3(75,  0, 25 ) ); // Vértice 18 --10
forma.vertices.push( new THREE.Vector3(75,  0,  -25 ) ); // Vértice 19 --11
forma.vertices.push( new THREE.Vector3( -50, 50,  -25 ) ); // Vértice 20--- 12
forma.vertices.push( new THREE.Vector3( -50, 50, 25 ) ); // Vértice 21 --13
forma.vertices.push( new THREE.Vector3(75, 50, 25 ) ); // Vértice 22--- 14
forma.vertices.push( new THREE.Vector3(75, 50,  -25 ) ); // Vértice 23-- 15

//pie1 VERTICES
forma.vertices.push( new THREE.Vector3( -50,  -60,  -25 ) ); // Vértice 24--- 8
forma.vertices.push( new THREE.Vector3( -50,  -60, 25 ) ); // Vértice 25 ---9
forma.vertices.push( new THREE.Vector3(75,  -60, 25 ) ); // Vértice 26 --10
forma.vertices.push( new THREE.Vector3(75,  -60,  -25 ) ); // Vértice 27 --11
forma.vertices.push( new THREE.Vector3( -50, -20,  -25 ) ); // Vértice 28--- 12
forma.vertices.push( new THREE.Vector3( -50, -20, 25 ) ); // Vértice 29 --13
forma.vertices.push( new THREE.Vector3(75, -20, 25 ) ); // Vértice 30--- 14
forma.vertices.push( new THREE.Vector3(75, -20,  -25 ) ); // Vértice 31-- 15

//pie1 caras
forma.faces.push( new THREE.Face3( 24, 25,26 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 26, 27, 24) ); // Cara 1
forma.faces.push( new THREE.Face3( 24, 25, 29 ) );
forma.faces.push( new THREE.Face3( 29, 28,24 ) );
forma.faces.push( new THREE.Face3( 24, 28, 31 ) );
forma.faces.push( new THREE.Face3( 31, 27, 24 ) );
forma.faces.push( new THREE.Face3( 27, 31, 30 ) );
forma.faces.push( new THREE.Face3( 30, 26, 27 ) );
forma.faces.push( new THREE.Face3( 26, 30, 29 ) );
forma.faces.push( new THREE.Face3( 29, 25, 26 ) );
forma.faces.push( new THREE.Face3( 28, 29, 30 ) );
forma.faces.push( new THREE.Face3( 30, 31, 28 ) );


//brazo CARAS

forma.faces.push( new THREE.Face3( 16, 17,18 ) ); // Cara 0
forma.faces.push( new THREE.Face3( 18, 19, 16) ); // Cara 1
forma.faces.push( new THREE.Face3( 16,17, 21 ) );
forma.faces.push( new THREE.Face3( 21, 20, 16 ) );
forma.faces.push( new THREE.Face3( 16, 20, 23 ) );
forma.faces.push( new THREE.Face3( 23, 19, 16 ) );
forma.faces.push( new THREE.Face3( 19, 23, 22 ) );
forma.faces.push( new THREE.Face3( 22, 18, 19 ) );
forma.faces.push( new THREE.Face3( 18, 22, 21 ) );
forma.faces.push( new THREE.Face3( 21, 17, 18 ) );
forma.faces.push( new THREE.Face3( 20, 21, 22 ) );
forma.faces.push( new THREE.Face3( 22, 23, 20 ) );


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



