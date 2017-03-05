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

//UNION DE MALLAS
//MALLA1 
var aspasForma = new THREE.TorusKnotGeometry( 50,3, 100, 16 );
aspasForma.translate(-250,250,-100);
var esferaForma = new THREE.SphereGeometry(25);
esferaForma.translate(-250,250,-100);
var toroForma = new THREE.TorusGeometry( 30, 6, 16, 100 );
toroForma.translate(-250,250,-100);
var aspasMalla = new THREE.Mesh(aspasForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var toroMalla= new THREE.Mesh(toroForma)
var forma3 = new THREE.Geometry();
forma3.merge(aspasMalla.geometry, aspasMalla.matrix);
forma3.merge(esferaMalla.geometry, esferaMalla.matrix);
forma3.merge(toroMalla.geometry, toroMalla.matrix);
var material3 = new THREE.MeshNormalMaterial();
var forma3Malla = new THREE.Mesh(forma3, material3);
//MALLA2
var aspasForma4 = new THREE.TorusKnotGeometry( 50, 3, 100, 16 );
aspasForma4.translate(250,250,-100);
var esferaForma4 = new THREE.SphereGeometry(25);
esferaForma4.translate(250,250,-100);
var toroForma4 = new THREE.TorusGeometry( 30, 6, 16, 100 );
toroForma4.translate(250,250,-100);
var aspasMalla4 = new THREE.Mesh(aspasForma4);
var esferaMalla4 = new THREE.Mesh(esferaForma4);
var toroMalla4= new THREE.Mesh(toroForma4)
var forma4 = new THREE.Geometry();
forma4.merge(aspasMalla4.geometry, aspasMalla4.matrix);
forma4.merge(esferaMalla4.geometry, esferaMalla4.matrix);
forma4.merge(toroMalla4.geometry, toroMalla4.matrix);
var material4 = new THREE.MeshNormalMaterial();
var forma4Malla = new THREE.Mesh(forma4, material4);
//REVOLUCION
var puntos1 = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos1.push( new THREE.Vector3(
                     Math.sin( i ) * 15 + 50,
                     ( i +50), -200 ));
}
var forma5 = new THREE.LatheGeometry(puntos1);
var material5 = new THREE.MeshNormalMaterial();
var malla5 = new THREE.Mesh( forma5, material5 );

var puntos2 = [];
for ( var j = 0; j < 50; j ++ ) {
    puntos2.push( new THREE.Vector3(
                     Math.sin( j*0.2 ) * 15 + 50,
                     ( j +50), -100 ));
}


var forma6 = new THREE.LatheGeometry(puntos2);
var material6 = new THREE.MeshNormalMaterial();
var malla6 = new THREE.Mesh( forma6, material6 );

//Vertices
var forma7=new THREE.Geometry();
forma7.vertices.push( new THREE.Vector3( 50,  0,  50 ) ); // Vértice 0
forma7.vertices.push( new THREE.Vector3( 50,  0, -50 ) ); // Vértice 1
forma7.vertices.push( new THREE.Vector3(-50,  0, -50 ) ); // Vértice 2
forma7.vertices.push( new THREE.Vector3(-50,  0,  50 ) ); // Vértice 3
forma7.vertices.push( new THREE.Vector3( 50, 100,  50 ) ); // Vértice 4
forma7.vertices.push( new THREE.Vector3( 50, 100, -50 ) ); // Vértice 5
forma7.vertices.push( new THREE.Vector3(-50, 100, -50 ) ); // Vértice 6
forma7.vertices.push( new THREE.Vector3(-50, 100,  50 ) ); // Vértice 7
forma7.faces.push( new THREE.Face3( 0, 1, 2 ) ); // Cara 0
forma7.faces.push( new THREE.Face3( 2, 3, 0 ) ); // Cara 1
forma7.faces.push( new THREE.Face3( 0, 1, 5 ) );
forma7.faces.push( new THREE.Face3( 5, 4, 0 ) );
forma7.faces.push( new THREE.Face3( 0, 4, 7 ) );
forma7.faces.push( new THREE.Face3( 7, 3, 0 ) );
forma7.faces.push( new THREE.Face3( 3, 7, 6 ) );
forma7.faces.push( new THREE.Face3( 6, 2, 3 ) );
forma7.faces.push( new THREE.Face3( 2, 6, 5 ) );
forma7.faces.push( new THREE.Face3( 5, 1, 2 ) );
forma7.faces.push( new THREE.Face3( 4, 5, 6 ) );
forma7.faces.push( new THREE.Face3( 6, 7, 4 ) );
forma7.computeBoundingSphere();
forma7.computeFaceNormals();
var material7 = new THREE.MeshNormalMaterial();
var malla7 = new THREE.Mesh( forma7, material7 );

//EXTRUSION
var figura8 = new THREE.Shape();
figura8.moveTo(-20, -20);
figura8.lineTo(-20, 20);
figura8.lineTo(20, 20);
figura8.lineTo(-20, -20);
var forma8 = new THREE.ExtrudeGeometry( figura8,{amount: 50} );
var material8 = new THREE.MeshNormalMaterial();
var malla8 = new THREE.Mesh( forma8, material8 );
malla8.translate(-250,250,-100);
//ESCENA
var escena = new THREE.Scene();
escena.add(malla1); //TABLERO
escena.add(forma3Malla);//UNIONMMALLA1
escena.add(forma4Malla);//UNIONMALLA2
escena.add(malla5);
escena.add(malla7);
escena.add(malla6);
escena.add(malla8);//EXTRUSION
malla1.rotateY( Math.PI );
forma3Malla.rotateY( Math.PI );
forma4Malla.rotateY( Math.PI );
malla5.rotateY( Math.PI );
malla5.rotateX( Math.PI/2 );
malla7.rotateX(Math.PI/3);
malla8.rotateX(Math.PI/4);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 1200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

