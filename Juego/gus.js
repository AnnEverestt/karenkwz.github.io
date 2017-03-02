var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*15+30, ( i -5) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );

var puntoss = [];
for ( var j = 0; j < 50; j ++ ) {
    puntoss.push( new THREE.Vector2(Math.cos( i * 2)*15+30, ( i -5) * 2 ) );
}
var formas = new THREE.LatheGeometry(puntoss);
var materials = new THREE.MeshNormalMaterial();
var mallas = new THREE.Mesh( formas, materials );
malla.rotateX( Math.PI/6 )


var escena = new THREE.Scene();
escena.add(malla);
escena.add(mallas);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
