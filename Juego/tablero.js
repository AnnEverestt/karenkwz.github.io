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

//FIGURA POR VERTICES
var forma2=new THREE.Geometry();
//cuerpo VERTICES
forma2.vertices.push( new THREE.Vector3( -100, 0, -200 ) ); // Vértice 0
forma2.vertices.push( new THREE.Vector3( -75,  0, -200 ) ); // Vértice 1
forma2.vertices.push( new THREE.Vector3( -75,  0, -250 ) ); // Vértice 2
forma2.vertices.push( new THREE.Vector3( -100, 0, -250 ) ); // Vértice 3
forma2.vertices.push( new THREE.Vector3( -100, 50,-200 ) ); // Vértice 4
forma2.vertices.push( new THREE.Vector3(  -75, 50,-200 ) ); // Vértice 5
forma2.vertices.push( new THREE.Vector3(  -75, 50,-250 ) ); // Vértice 6
forma2.vertices.push( new THREE.Vector3(  -75, 50,-250 ) ); // Vértice 7
//brazo VERTICES
forma2.vertices.push( new THREE.Vector3( -75,  0, -220 ) ); // Vértice 8--0
forma2.vertices.push( new THREE.Vector3( -25,  0, -220 ) ); // Vértice 9---1
forma2.vertices.push( new THREE.Vector3( -25,  0, -230 ) ); // Vértice 10---2
forma2.vertices.push( new THREE.Vector3( -75,  0, -230 ) ); // Vértice 11---3
forma2.vertices.push( new THREE.Vector3( -75, 10,  220 ) ); // Vértice 12---4
forma2.vertices.push( new THREE.Vector3( -25, 10, -220) ); // Vértice 13---5
forma2.vertices.push( new THREE.Vector3( -25, 10, -230 ) ); // Vértice 14---6
forma2.vertices.push( new THREE.Vector3( -75, 10, -230 ) ); // Vértice 15---7
//cuerpo CARAS
forma2.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma2.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma2.faces.push( new THREE.Face3( 0, 1, 5 ) );
forma2.faces.push( new THREE.Face3( 5, 4, 0 ) );
forma2.faces.push( new THREE.Face3( 0, 4, 7 ) );
forma2.faces.push( new THREE.Face3( 7, 3, 0 ) );
forma2.faces.push( new THREE.Face3( 3, 7, 6 ) );
forma2.faces.push( new THREE.Face3( 6, 2, 3 ) );
forma2.faces.push( new THREE.Face3( 2, 6, 5 ) );
forma2.faces.push( new THREE.Face3( 5, 1, 2 ) );
forma2.faces.push( new THREE.Face3( 4, 5, 6 ) );
forma2.faces.push( new THREE.Face3( 6, 7, 4 ) );
//brazo CARAS
forma2.faces.push( new THREE.Face3( 8, 9,10 ) ); // Cara 0
forma2.faces.push( new THREE.Face3( 10, 11, 8) ); // Cara 1
forma2.faces.push( new THREE.Face3( 8, 9, 13 ) );
forma2.faces.push( new THREE.Face3( 13, 12, 8 ) );
forma2.faces.push( new THREE.Face3( 8, 12, 15 ) );
forma2.faces.push( new THREE.Face3( 15, 11, 8 ) );
forma2.faces.push( new THREE.Face3( 11, 15, 14 ) );
forma2.faces.push( new THREE.Face3( 14, 10, 11 ) );
forma2.faces.push( new THREE.Face3( 10, 14, 13 ) );
forma2.faces.push( new THREE.Face3( 13, 9, 10 ) );
forma2.faces.push( new THREE.Face3( 12, 13, 14 ) );
forma2.faces.push( new THREE.Face3( 14, 15, 12 ) );
forma2.computeBoundingSphere();
forma2.computeFaceNormals();
var material2 = new THREE.MeshNormalMaterial();
var malla2 = new THREE.Mesh( forma2, material2 );

//POR UNION DE MALLAS
var cuerpoforma = new THREE.TorusKnotGeometry( 50, 3, 100, 16 );
var esferaForma = new THREE.SphereGeometry(25);
esferaForma.translate(-300,50,-300);
var cuerpoMalla = new THREE.Mesh(cuerpoForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var soldadoForma = new THREE.Geometry();
soldadoForma.merge(cuerpoMalla.geometry, cuerpoMalla.matrix);
soldadoForma.merge(esferaMalla.geometry, esferaMalla.matrix);

var material3 = new THREE.MeshNormalMaterial();
var soldadoMalla = new THREE.Mesh(soldadoForma, material3);

//REVOLUCION
var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*15+30, ( i -5) * 2 ) );
var forma3 = new THREE.LatheGeometry(puntos);
var material3 = new THREE.MeshNormalMaterial();
var malla3 = new THREE.Mesh( forma3, material3 );
malla3.rotateX( Math.PI/6 );
  


//ESCENA
var escena = new THREE.Scene();
escena.add(malla1);
escena.add( malla2 );
escena.add(soldadoMalla);
escena.add(malla3);
malla1.rotateX(Math.PI/2);
malla2.rotateX(Math.PI/2);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

