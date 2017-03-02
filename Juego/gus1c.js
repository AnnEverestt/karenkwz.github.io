var puntos = [];
for ( var i = 0; i < 25; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*100+50, ( i) * 4) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/2 );


var escena = new THREE.Scene();
escena.add(malla);


var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
