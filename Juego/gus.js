var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*15+30, ( i -5) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var points = [];
for ( var i = 0; i < 10; i ++ ) {
	points.push( new THREE.Vector2( Math.sin( i * 0.2 ) * 10 + 5, ( i - 5 ) * 2 ) );
}
var geometry = new THREE.LatheGeometry( points );
var material1 = new THREE.MeshNormalMaterial(  );
var lathe = new THREE.Mesh( geometry, material1 );


var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );



var escena = new THREE.Scene();
escena.add(malla);
scene.add( lathe );


var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
