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
aspasForma.translate(-250,20,-250);
var esferaForma = new THREE.SphereGeometry(25);
esferaForma.translate(-250,20,-250);
var toroForma = new THREE.TorusGeometry( 30, 6, 16, 100 );
toroForma.translate(-250,20,-250);
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
aspasForma4.translate(250,20,-250);
var esferaForma4 = new THREE.SphereGeometry(25);
esferaForma4.translate(250,20,-250);
var toroForma4 = new THREE.TorusGeometry( 30, 6, 16, 100 );
toroForma4.translate(300,20,-300);
var aspasMalla4 = new THREE.Mesh(aspasForma4);
var esferaMalla4 = new THREE.Mesh(esferaForma4);
var toroMalla4= new THREE.Mesh(toroForma4)
var forma4 = new THREE.Geometry();
forma4.merge(aspasMalla4.geometry, aspasMalla4.matrix);
forma4.merge(esferaMalla4.geometry, esferaMalla4.matrix);
forma4.merge(toroMalla4.geometry, toroMalla4.matrix);
var material4 = new THREE.MeshNormalMaterial();
var forma4Malla = new THREE.Mesh(forma4, material4);



//ESCENA
var escena = new THREE.Scene();
escena.add(malla1); //TABLERO
escena.add(forma3Malla);//UNIONMMALLA1
escena.add(forma4Malla);//UNIONMALLA2
 


var camara = new THREE.PerspectiveCamera();
camara.position.z = 1200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

