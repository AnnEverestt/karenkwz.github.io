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
var aspasForma = new THREE.TorusKnotGeometry( 50, 3, 100, 16 );
var esferaForma = new THREE.SphereGeometry(25);
esferaForma.translate(0,1,0);

var aspasMalla = new THREE.Mesh(aspasForma);
var esferaMalla = new THREE.Mesh(esferaForma);
var forma3 = new THREE.Geometry();
forma3.merge(aspasMalla.geometry, aspasMalla.matrix);
forma3.merge(esferaMalla.geometry, esferaMalla.matrix);


var material3 = new THREE.MeshNormalMaterial();
var forma3Malla = new THREE.Mesh(forma3, material3);



//ESCENA
var escena = new THREE.Scene();
escena.add(malla1);
escena.add(arbolMalla);

malla1.rotateX(Math.PI);
var camara = new THREE.PerspectiveCamera();
camara.position.z = 1000;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

