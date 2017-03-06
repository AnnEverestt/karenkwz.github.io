

var puntos = [];

for ( var i = 0; i < 30; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i *2)*20+50,  i) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/2 );

var cabeza = new THREE.SphereGeometry( 20, 32, 32 );
cabeza.translate(0,30,0);

var material1 = new THREE.MeshNormalMaterial();
var forma1 = new THREE.Mesh( cabeza, material1 );




var escena = new THREE.Scene();
escena.add(malla);
escene.add(forma1);




var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
