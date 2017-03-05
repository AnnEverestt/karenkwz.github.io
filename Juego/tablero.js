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
var aspasForma = new THREE.TorusKnotGeometry( 50, 3, 100, 16 );
aspasForma.translate(-350,80,-350);
var esferaForma = new THREE.SphereGeometry(25);
esferaForma.translate(-350,80,-350);
var toroForma = new THREE.TorusGeometry( 30, 3, 16, 100 );
toroForma.translate(-350,80,-350);
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
aspasForma4.translate(350,80,-350);
var esferaForma4 = new THREE.SphereGeometry(25);
esferaForma4.translate(350,80,-350);
var toroForma4 = new THREE.TorusGeometry( 30, 3, 16, 100 );
toroForma4.translate(-350,100,-350);
var aspasMalla4 = new THREE.Mesh(aspasForma4);
var esferaMalla4 = new THREE.Mesh(esferaForma4);
var toroMalla4= new THREE.Mesh(toroForma4)
var forma4 = new THREE.Geometry();
forma4.merge(aspasMalla4.geometry, aspasMalla4.matrix);
forma4.merge(esferaMalla4.geometry, esferaMalla4.matrix);
forma4.merge(toroMalla4.geometry, toroMalla4.matrix);
var material4 = new THREE.MeshNormalMaterial();
var forma4Malla = new THREE.Mesh(forma4, material4);

//REVOLUCIÓN
var puntos1 = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos1.push( new THREE.Vector2(
                     Math.sin( i * 4 ) ,i);}
var puntos2 = [];
for ( var j = 0; j < 50; j ++ ) {
    puntos2.push( new THREE.Vector2(
                     Math.sin( j * 2 ),j);}
var forma2 = new THREE.LatheGeometry(puntos1);
var forma5 = new THREE.LatheGeometry(puntos2);
var material2 = new THREE.MeshNormalMaterial();
var malla2 = new THREE.Mesh( forma2, material2 );
var material5 = new THREE.MeshNormalMaterial();
var malla5 = new THREE.Mesh( forma5, material5 );
malla2.translate(-350,50,-200);
malla5.translate(-350,50,-200);


//ESCENA
var escena = new THREE.Scene();
escena.add(malla1); //TABLERO
escena.add(forma3Malla);//UNIONMMALLA1
escena.add(forma4Malla);//UNIONMALLA2
escena.add(malla2);//REVOLUCIÓN
escena.add(malla5);//REVOLUCIÓN
        
malla1.rotateX(Math.PI/2);//TABLERO
malla2.rotateX( Math.PI);//REVOLUCION

var camara = new THREE.PerspectiveCamera();
camara.position.z = 1200;
var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );

