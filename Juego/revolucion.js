var puntos = [];
for ( var i = 0; i < 30; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i *2)*20+50,  i) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();

var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
malla.rotateY( Math.PI/2 );
var puntos2 = [];
for ( var j = 0; j < 30; j ++ ) {
    puntos2.push( new THREE.Vector2(Math.cos( j *0.3)*20+50, j+20) );
}
var forma2 = new THREE.LatheGeometry(puntos2);
var material2 = new THREE.MeshNormalMaterial();

var malla2 = new THREE.Mesh( forma2, material2 );
malla2.rotateX( Math.PI/6 );
malla2.rotateY( Math.PI/2 );


var escena = new THREE.Scene();
escena.add(malla);
escena.add(malla2);



var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
