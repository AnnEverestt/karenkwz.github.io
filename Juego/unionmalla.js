var for1Forma =new THREE.ConeBufferGeometry( 20, 20, 32 );
var for2Forma = new THREE.SphereGeometry(25);
for2Forma.translate(0,20,0);


var for1Malla = new THREE.Mesh(for1Forma);
var for2Malla = new THREE.Mesh(for2Forma);
var Forma = new THREE.Geometry();
Forma.merge(for1Malla.geometry, for1Malla.matrix);
Forma.merge(for2Malla.geometry, for2Malla.matrix);


var material = new THREE.MeshNormalMaterial();
var Malla = new THREE.Mesh(Forma, material);
var escena = new THREE.Scene();
escena.add(Malla);

var camara = new THREE.PerspectiveCamera();
camara.position.z = 400;

renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
