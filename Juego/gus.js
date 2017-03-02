var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*15+30, ( i -5) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var esferaForma = new THREE.SphereGeometry(5, 32, 32);
var materialt = new THREE.MeshNormalMaterial();
var esfera = new THREE.Mesh(esferaForma,materialt)

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );



var escena = new THREE.Scene();
escena.add(malla);
escena.add(esfera)


var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
