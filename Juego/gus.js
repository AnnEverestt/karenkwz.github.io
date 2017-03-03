var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(Math.cos( i * 0.5)*15+30, ( i -5) * 2 ) );
}
var forma = new THREE.LatheGeometry(puntos);
var material = new THREE.MeshNormalMaterial();
var malla = new THREE.Mesh( forma, material );
malla.rotateX( Math.PI/6 );
var escena = new THREE.Scene();
escena.add(malla);

var figura = new THREE.Shape();

figura.moveTo(-10, -10);
figura.lineTo(5, 60);
figura.lineTo(60, 60);
figura.lineTo(60, 5);
figura.lineTo(5, 5);

figura

var formas = new THREE.ExtrudeGeometry( figura,{amount: 1} );
var materials = new THREE.MeshNormalMaterial();
var mallas = new THREE.Mesh( formas, materials );
mallas.rotateY( Math.PI/2);
mallas.rotateY( Math.PI/2);

escena.add(mallas);




var camara = new THREE.PerspectiveCamera();
camara.position.z = 500;

var renderizador = new THREE.WebGLRenderer();
renderizador.setSize( window.innerHeight*.95, window.innerHeight*.95 );
document.body.appendChild( renderizador.domElement );
renderizador.render( escena, camara );
