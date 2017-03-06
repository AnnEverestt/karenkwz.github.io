

var puntos = [];

for ( var i = 0; i < 30; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i *2)*20+50,  i) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/2 );


var for2Forma = new THREE.SphereGeometry(25);
for2Forma.translate(0,20,0);


var material = new THREE.MeshNormalMaterial();
var Malla2 = new THREE.Mesh(for2Forma, material);
var escena = new THREE.Scene();

var escena = new THREE.Scene();
escena.add(malla);
escena.add(Malla2);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
