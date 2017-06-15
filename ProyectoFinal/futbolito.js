////////////////////INICIO/////////////////////////////////////////////////////////

material = new THREE.MeshNormalMaterial();

//////////////////////////PARÁMETROS DE LIENZO (TABLERO)///////////////////////////

function renderizar(){
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderer.domElement);
}


///////////////////////////EQUIPO 1-PIERNAS/////////////////////////////////////////////////

function gusano(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.9 ) * 10 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-60,160,0);
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(60,160,0);
mallaGusano1 = new THREE.Mesh( forma1 );
mallaGusano2 = new THREE.Mesh( forma2 );
mallaGusano= new Array(mallaGusano1, mallaGusano2);
return mallaGusano;
}

///////////////////////////EQUIPO 1-BRAZOS/////////////////////////////////////////////////

function braz(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.9 ) * 10 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-120,-30,0);
forma1.rotateZ( Math.PI/8 );
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(120,-30,0);
forma2.rotateZ( Math.PI/-8 );
brazo1 = new THREE.Mesh( forma1 );
brazo2 = new THREE.Mesh( forma2 );
brazos= new Array(brazo1, brazo2);
return brazos;
}

////////////////////////////EQUIPO 1-PIES/////////////////////////////////////////////////

function pie(){

figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(-10, 40);
figura.lineTo(0, 46);
figura.lineTo(-10, 60);
figura.lineTo(10, 52);
figura.lineTo(40, 80);
figura.lineTo(60, 52);
figura.lineTo(80, 60);
figura.lineTo(70, 46);
figura.lineTo(80, 40);
figura.lineTo(60, 10);
figura.lineTo(40, 30);
figura.lineTo(10, 10);
forma1 = new THREE.ExtrudeGeometry( figura,
                                       {amount: 40} );
forma1.translate(15,-10,-425); ///(x,z,y) en este caso porque las coodenadas no coinciden
forma1.rotateX( Math.PI/2 );
forma2 = new THREE.ExtrudeGeometry( figura,	//con las del dibujo
                                       {amount: 40} );
forma2.translate(-95,-10,-425);
forma2.rotateX( Math.PI/2 );
pie1 = new THREE.Mesh( forma1 );
pie2 = new THREE.Mesh( forma2 );
pies= new Array(pie1, pie2);
return pies;
}

////////////////////////////EQUIPO 1-TORSO/////////////////////////////////////////////////

function tors(){
forma = new THREE.CubeGeometry(200,300,100);
torso = new THREE.Mesh(forma);
return torso;
}

////////////////////////////EQUIPO 1-CUELLO/////////////////////////////////////////////////

function cuell(){
forma = new THREE.CylinderGeometry(50,50,50);
forma.translate(0,-150,0);
cuello=new THREE.Mesh(forma);
return cuello;
}


////////////////////////////EQUIPO 1-CABEZA/////////////////////////////////////////////////

function cabez(){

troncoForma = new THREE.CylinderGeometry(15, 100, 150);
troncoForma.rotateZ( Math.PI/2 );
troncoForma.translate(-75,-270,0);
troncoForma1 = new THREE.CylinderGeometry(100, 15, 150);
troncoForma1.rotateZ( Math.PI/2 );
troncoForma1.translate(75,-270,0);
cuboForma = new THREE.CubeGeometry(120,20, 120);
cuboForma.rotateZ( Math.PI/2 );
cuboForma.translate(-130,-270,0);
cuboForma1 = new THREE.CubeGeometry(120,20, 120);
cuboForma1.rotateZ( Math.PI/2 );
cuboForma1.translate(130,-270,0);


troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla1 = new THREE.Mesh(troncoForma1);
cuboMalla = new THREE.Mesh(cuboForma);
cuboMalla1 = new THREE.Mesh(cuboForma1);
arbolForma2 = new THREE.Geometry();
arbolForma2.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma2.merge(troncoMalla1.geometry, troncoMalla1.matrix);
arbolForma2.merge(cuboMalla.geometry, cuboMalla.matrix);
arbolForma2.merge(cuboMalla1.geometry, cuboMalla1.matrix);
cabeza = new THREE.Mesh(arbolForma2);
return cabeza;
}

////////////////////////////EQUIPO MARCIANOS/////////////////////////////////////////////////

function marcian(){

mallaGusano=gusano();
brazos=braz();
pies=pie();
torso=tors();
cuello=cuell();
cabeza=cabez();
marciano=new THREE.Geometry();
marciano.merge(mallaGusano[0].geometry, mallaGusano[0].matrix);
marciano.merge(mallaGusano[1].geometry, mallaGusano[1].matrix);
marciano.merge(brazos[0].geometry, brazos[0].matrix);
marciano.merge(brazos[1].geometry, brazos[1].matrix);
marciano.merge(pies[0].geometry, pies[0].matrix);
marciano.merge(pies[1].geometry, pies[1].matrix);
marciano.merge(torso.geometry, torso.matrix);
marciano.merge(cuello.geometry, cuello.matrix);
marciano.merge(cabeza.geometry, cabeza.matrix);
material = new THREE.MeshNormalMaterial();				
marciano1=new THREE.Mesh(marciano,material);
marciano2=new THREE.Mesh(marciano,material);
marciano3=new THREE.Mesh(marciano,material);
marciano4=new THREE.Mesh(marciano,material);
marciano5=new THREE.Mesh(marciano,material);
marciano6=new THREE.Mesh(marciano,material);
marciano1.position.x= 400;
marciano1.position.z=-400;
marciano1.rotation.y=-Math.PI/2;
marciano2.position.x= 400;
marciano2.position.z=-800;
marciano2.rotation.y=-Math.PI/2;
marciano3.position.x= 400;
marciano3.position.z=-1200;
marciano3.rotation.y=-Math.PI/2;
marciano4.position.x= 1350;
marciano4.position.z=-600;
marciano4.rotation.y=-Math.PI/2;
marciano5.position.x= 1350;
marciano5.position.z=-1000;
marciano5.rotation.y=-Math.PI/2;
marciano6.position.x= 2300;
marciano6.position.z=-800;
marciano6.rotation.y=-Math.PI/2;
marcianos= new Array(marciano1, marciano2, marciano3, marciano4, marciano5, marciano6);
return marcianos;
}

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////HUMANOS///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TORSO//////////////////////////////////////////////
function torsohum(){
forma = new THREE.CubeGeometry(200,300,100);
torsohuma = new THREE.Mesh(forma);
return torsohuma;
}

///////////////////////////////PIERNAS/////////////////////////////////////////////////

function piernashum(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.3 ) * 7 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-60,160,0);
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(60,160,0);
mallaGusano1 = new THREE.Mesh( forma1 );
mallaGusano2 = new THREE.Mesh( forma2 );
piernashuma= new Array(mallaGusano1, mallaGusano2);
return piernashuma;
}


///////////////////////////////BRAZOS/////////////////////////////////////////////////

function brazoshum(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.3 ) * 7 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-120,-30,0);
forma1.rotateZ( Math.PI/8 );
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(120,-30,0);
forma2.rotateZ( Math.PI/-8 );
brazo1 = new THREE.Mesh( forma1 );
brazo2 = new THREE.Mesh( forma2 );
brazoshuma= new Array(brazo1, brazo2);
return brazoshuma;
}

///////////////////////////////////CUELLO/////////////////////////////////////////////////

function cuellohum(){
forma = new THREE.CylinderGeometry(50,50,50);
forma.translate(0,-150,0);
cuellohuma=new THREE.Mesh(forma);
return cuellohuma;
}

/////////////////////////////////////PIES/////////////////////////////////////////////////

function pieshum(){

figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(-10, 40);
figura.lineTo(0, 46);
figura.lineTo(-10, 60);
figura.lineTo(10, 52);
figura.lineTo(40, 80);
figura.lineTo(60, 52);
figura.lineTo(80, 60);
figura.lineTo(70, 46);
figura.lineTo(80, 40);
figura.lineTo(60, 10);
figura.lineTo(40, 30);
figura.lineTo(10, 10);
forma1 = new THREE.ExtrudeGeometry( figura,
                                       {amount: 40} );
forma1.translate(15,-10,-425); ///(x,z,y) en este caso porque las coodenadas no coinciden
forma1.rotateX( Math.PI/2 );
forma2 = new THREE.ExtrudeGeometry( figura,	//con las del dibujo
                                       {amount: 40} );
forma2.translate(-95,-10,-425);
forma2.rotateX( Math.PI/2 );
pie1 = new THREE.Mesh( forma1 );
pie2 = new THREE.Mesh( forma2 );
pieshuma= new Array(pie1, pie2);
return pieshuma;
}

/////////////////////////////////////CABEZA//////////////////////////////////////////////////

function cabezahum(){
cabeza= new THREE.SphereGeometry(100);
cabeza.translate(0,-270,0);
cabeza=new THREE.Mesh(cabeza);
return cabeza;
}

////////////////////////////EQUIPO HUMANOS/////////////////////////////////////////////////

function human(){

mallaGusano=piernashum();
brazos=brazoshum();
pies=pieshum();
torso=torsohum();
cuello=cuellohum();
cabeza=cabezahum();
humano=new THREE.Geometry();
humano.merge(mallaGusano[0].geometry, mallaGusano[0].matrix);
humano.merge(mallaGusano[1].geometry, mallaGusano[1].matrix);
humano.merge(brazos[0].geometry, brazos[0].matrix);
humano.merge(brazos[1].geometry, brazos[1].matrix);
humano.merge(pies[0].geometry, pies[0].matrix);
humano.merge(pies[1].geometry, pies[1].matrix);
humano.merge(torso.geometry, torso.matrix);
humano.merge(cuello.geometry, cuello.matrix);
humano.merge(cabeza.geometry, cabeza.matrix);
material = new THREE.MeshNormalMaterial();

				
humano1=new THREE.Mesh(humano,material);
humano2=new THREE.Mesh(humano,material);
humano3=new THREE.Mesh(humano,material);
humano4=new THREE.Mesh(humano,material);
humano5=new THREE.Mesh(humano,material);
humano6=new THREE.Mesh(humano,material);
humano1.position.x= -400;
humano1.position.z=-400;
humano1.rotation.y= Math.PI/2;
humano2.position.x= -400;
humano2.position.z=-800;
humano2.rotation.y= Math.PI/2;
humano3.position.x= -400;
humano3.position.z=-1200;
humano3.rotation.y= Math.PI/2;
humano4.position.x= -1350;
humano4.position.z=-600;
humano4.rotation.y= Math.PI/2;
humano5.position.x= -1350;
humano5.position.z=-1000;
humano5.rotation.y= Math.PI/2;
humano6.position.x= -2300;
humano6.position.z=-800;
humano6.rotation.y= Math.PI/2;
humanos= new Array(humano1, humano2, humano3, humano4, humano5, humano6);
return humanos;
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////PELOTA//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function pelot(){
pelota= new THREE.SphereGeometry(100);
pelota.translate(0,400,-800);
pelota= new THREE.Mesh(pelota, material);
return pelota;
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////TABLERO/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function tabler(){
plano= new THREE.CubeGeometry(5600,30,2000);
plano.translate(0,500,-1000);
pared1= new THREE.CubeGeometry(50,200,700);
pared1.translate(-2775,390,-350);
pared2= new THREE.CubeGeometry(50,200,700);
pared2.translate(-2775,390,-1650);
pared3= new THREE.CubeGeometry(50,200,700);
pared3.translate(2775,390,-350);
pared4= new THREE.CubeGeometry(50,200,700);
pared4.translate(2775,390,-1650);
pared5= new THREE.CubeGeometry(5600,200,50);
pared5.translate(0,390,-1975);
pared6= new THREE.CubeGeometry(5600,200,50);
pared6.translate(0,390,-25);

plano=new THREE.Mesh(plano);
pared1=new THREE.Mesh(pared1);
pared2=new THREE.Mesh(pared2);
pared3=new THREE.Mesh(pared3);
pared4=new THREE.Mesh(pared4);
pared5=new THREE.Mesh(pared5);
pared6=new THREE.Mesh(pared6);

paredes= new THREE.Geometry();
paredes.merge(plano.geometry, plano.matrix);
paredes.merge(pared1.geometry, pared1.matrix);
paredes.merge(pared2.geometry, pared2.matrix);
paredes.merge(pared3.geometry, pared3.matrix);
paredes.merge(pared4.geometry, pared4.matrix);
paredes.merge(pared5.geometry, pared5.matrix);
paredes.merge(pared6.geometry, pared6.matrix);

tablero= new THREE.Mesh(paredes, material);
return tablero;
}

////////////////////PARÁMETROS DE CAMARA//////////////////////////////////////////////

function camera(){
camara = new THREE.PerspectiveCamera(250,(window.innerWidth / window.innerHeight),1,4000);
camara.position.z = 1200;
camara.position.x = 0;
camara.position.y = -900;
//camara.rotation.x = Math.PI/2;
}

//////////////////////////FUNCIÓN LISTENER///////////////////////////////////////////////

function listener(){
	camara.aspect=window.innerWidth/window.innerHeight
	camara.updateProjectionMatrix();
	renderer.setSize(window.innerWidth/window.innerHeight)
}

var capturarp=false

var escena = new THREE.Scene();

////////////////////ESCENAS////////////////////////////////////////////////////////////

////////////////////INICIO/////////////////////////////////////////////////////////

material = new THREE.MeshNormalMaterial();

//////////////////////////PARÁMETROS DE LIENZO (TABLERO)///////////////////////////

function renderizar(){
WIDTH = window.innerWidth;
HEIGHT = window.innerHeight;
renderer = new THREE.WebGLRenderer();
renderer.setSize(WIDTH,HEIGHT);
document.body.appendChild(renderer.domElement);
}


///////////////////////////EQUIPO 1-PIERNAS/////////////////////////////////////////////////

function gusano(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.9 ) * 10 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-60,160,0);
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(60,160,0);
mallaGusano1 = new THREE.Mesh( forma1 );
mallaGusano2 = new THREE.Mesh( forma2 );
mallaGusano= new Array(mallaGusano1, mallaGusano2);
return mallaGusano;
}

///////////////////////////EQUIPO 1-BRAZOS/////////////////////////////////////////////////

function braz(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.9 ) * 10 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-120,-30,0);
forma1.rotateZ( Math.PI/8 );
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(120,-30,0);
forma2.rotateZ( Math.PI/-8 );
brazo1 = new THREE.Mesh( forma1 );
brazo2 = new THREE.Mesh( forma2 );
brazos= new Array(brazo1, brazo2);
return brazos;
}

////////////////////////////EQUIPO 1-PIES/////////////////////////////////////////////////

function pie(){

figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(-10, 40);
figura.lineTo(0, 46);
figura.lineTo(-10, 60);
figura.lineTo(10, 52);
figura.lineTo(40, 80);
figura.lineTo(60, 52);
figura.lineTo(80, 60);
figura.lineTo(70, 46);
figura.lineTo(80, 40);
figura.lineTo(60, 10);
figura.lineTo(40, 30);
figura.lineTo(10, 10);
forma1 = new THREE.ExtrudeGeometry( figura,
                                       {amount: 40} );
forma1.translate(15,-10,-425); ///(x,z,y) en este caso porque las coodenadas no coinciden
forma1.rotateX( Math.PI/2 );
forma2 = new THREE.ExtrudeGeometry( figura,	//con las del dibujo
                                       {amount: 40} );
forma2.translate(-95,-10,-425);
forma2.rotateX( Math.PI/2 );
pie1 = new THREE.Mesh( forma1 );
pie2 = new THREE.Mesh( forma2 );
pies= new Array(pie1, pie2);
return pies;
}

////////////////////////////EQUIPO 1-TORSO/////////////////////////////////////////////////

function tors(){
forma = new THREE.CubeGeometry(200,300,100);
torso = new THREE.Mesh(forma);
return torso;
}

////////////////////////////EQUIPO 1-CUELLO/////////////////////////////////////////////////

function cuell(){
forma = new THREE.CylinderGeometry(50,50,50);
forma.translate(0,-150,0);
cuello=new THREE.Mesh(forma);
return cuello;
}


////////////////////////////EQUIPO 1-CABEZA/////////////////////////////////////////////////

function cabez(){

troncoForma = new THREE.CylinderGeometry(15, 100, 150);
troncoForma.rotateZ( Math.PI/2 );
troncoForma.translate(-75,-270,0);
troncoForma1 = new THREE.CylinderGeometry(100, 15, 150);
troncoForma1.rotateZ( Math.PI/2 );
troncoForma1.translate(75,-270,0);
cuboForma = new THREE.CubeGeometry(120,20, 120);
cuboForma.rotateZ( Math.PI/2 );
cuboForma.translate(-130,-270,0);
cuboForma1 = new THREE.CubeGeometry(120,20, 120);
cuboForma1.rotateZ( Math.PI/2 );
cuboForma1.translate(130,-270,0);


troncoMalla = new THREE.Mesh(troncoForma);
troncoMalla1 = new THREE.Mesh(troncoForma1);
cuboMalla = new THREE.Mesh(cuboForma);
cuboMalla1 = new THREE.Mesh(cuboForma1);
arbolForma2 = new THREE.Geometry();
arbolForma2.merge(troncoMalla.geometry, troncoMalla.matrix);
arbolForma2.merge(troncoMalla1.geometry, troncoMalla1.matrix);
arbolForma2.merge(cuboMalla.geometry, cuboMalla.matrix);
arbolForma2.merge(cuboMalla1.geometry, cuboMalla1.matrix);
cabeza = new THREE.Mesh(arbolForma2);
return cabeza;
}

////////////////////////////EQUIPO MARCIANOS/////////////////////////////////////////////////

function marcian(){

mallaGusano=gusano();
brazos=braz();
pies=pie();
torso=tors();
cuello=cuell();
cabeza=cabez();
marciano=new THREE.Geometry();
marciano.merge(mallaGusano[0].geometry, mallaGusano[0].matrix);
marciano.merge(mallaGusano[1].geometry, mallaGusano[1].matrix);
marciano.merge(brazos[0].geometry, brazos[0].matrix);
marciano.merge(brazos[1].geometry, brazos[1].matrix);
marciano.merge(pies[0].geometry, pies[0].matrix);
marciano.merge(pies[1].geometry, pies[1].matrix);
marciano.merge(torso.geometry, torso.matrix);
marciano.merge(cuello.geometry, cuello.matrix);
marciano.merge(cabeza.geometry, cabeza.matrix);
material = new THREE.MeshNormalMaterial();				
marciano1=new THREE.Mesh(marciano,material);
marciano2=new THREE.Mesh(marciano,material);
marciano3=new THREE.Mesh(marciano,material);
marciano4=new THREE.Mesh(marciano,material);
marciano5=new THREE.Mesh(marciano,material);
marciano6=new THREE.Mesh(marciano,material);
marciano1.position.x= 400;
marciano1.position.z=-400;
marciano1.rotation.y=-Math.PI/2;
marciano2.position.x= 400;
marciano2.position.z=-800;
marciano2.rotation.y=-Math.PI/2;
marciano3.position.x= 400;
marciano3.position.z=-1200;
marciano3.rotation.y=-Math.PI/2;
marciano4.position.x= 1350;
marciano4.position.z=-600;
marciano4.rotation.y=-Math.PI/2;
marciano5.position.x= 1350;
marciano5.position.z=-1000;
marciano5.rotation.y=-Math.PI/2;
marciano6.position.x= 2300;
marciano6.position.z=-800;
marciano6.rotation.y=-Math.PI/2;
marcianos= new Array(marciano1, marciano2, marciano3, marciano4, marciano5, marciano6);
return marcianos;
}

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////HUMANOS///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////TORSO//////////////////////////////////////////////
function torsohum(){
forma = new THREE.CubeGeometry(200,300,100);
torsohuma = new THREE.Mesh(forma);
return torsohuma;
}

///////////////////////////////PIERNAS/////////////////////////////////////////////////

function piernashum(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.3 ) * 7 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-60,160,0);
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(60,160,0);
mallaGusano1 = new THREE.Mesh( forma1 );
mallaGusano2 = new THREE.Mesh( forma2 );
piernashuma= new Array(mallaGusano1, mallaGusano2);
return piernashuma;
}


///////////////////////////////BRAZOS/////////////////////////////////////////////////

function brazoshum(){

var puntos = [];
for ( var i = 0; i < 50; i ++ ) {
    puntos.push( new THREE.Vector2(
                     Math.cos( i * 0.3 ) * 7 + 30,
                     ( i - 5 ) * 5 ) );
}

forma1 = new THREE.LatheGeometry(puntos);
forma1.translate(-120,-30,0);
forma1.rotateZ( Math.PI/8 );
forma2 = new THREE.LatheGeometry(puntos);
forma2.translate(120,-30,0);
forma2.rotateZ( Math.PI/-8 );
brazo1 = new THREE.Mesh( forma1 );
brazo2 = new THREE.Mesh( forma2 );
brazoshuma= new Array(brazo1, brazo2);
return brazoshuma;
}

///////////////////////////////////CUELLO/////////////////////////////////////////////////

function cuellohum(){
forma = new THREE.CylinderGeometry(50,50,50);
forma.translate(0,-150,0);
cuellohuma=new THREE.Mesh(forma);
return cuellohuma;
}

/////////////////////////////////////PIES/////////////////////////////////////////////////

function pieshum(){

figura = new THREE.Shape();
figura.moveTo(10, 10);
figura.lineTo(-10, 40);
figura.lineTo(0, 46);
figura.lineTo(-10, 60);
figura.lineTo(10, 52);
figura.lineTo(40, 80);
figura.lineTo(60, 52);
figura.lineTo(80, 60);
figura.lineTo(70, 46);
figura.lineTo(80, 40);
figura.lineTo(60, 10);
figura.lineTo(40, 30);
figura.lineTo(10, 10);
forma1 = new THREE.ExtrudeGeometry( figura,
                                       {amount: 40} );
forma1.translate(15,-10,-425); ///(x,z,y) en este caso porque las coodenadas no coinciden
forma1.rotateX( Math.PI/2 );
forma2 = new THREE.ExtrudeGeometry( figura,	//con las del dibujo
                                       {amount: 40} );
forma2.translate(-95,-10,-425);
forma2.rotateX( Math.PI/2 );
pie1 = new THREE.Mesh( forma1 );
pie2 = new THREE.Mesh( forma2 );
pieshuma= new Array(pie1, pie2);
return pieshuma;
}

/////////////////////////////////////CABEZA//////////////////////////////////////////////////

function cabezahum(){
cabeza= new THREE.SphereGeometry(100);
cabeza.translate(0,-270,0);
cabeza=new THREE.Mesh(cabeza);
return cabeza;
}

////////////////////////////EQUIPO HUMANOS/////////////////////////////////////////////////

function human(){

mallaGusano=piernashum();
brazos=brazoshum();
pies=pieshum();
torso=torsohum();
cuello=cuellohum();
cabeza=cabezahum();
humano=new THREE.Geometry();
humano.merge(mallaGusano[0].geometry, mallaGusano[0].matrix);
humano.merge(mallaGusano[1].geometry, mallaGusano[1].matrix);
humano.merge(brazos[0].geometry, brazos[0].matrix);
humano.merge(brazos[1].geometry, brazos[1].matrix);
humano.merge(pies[0].geometry, pies[0].matrix);
humano.merge(pies[1].geometry, pies[1].matrix);
humano.merge(torso.geometry, torso.matrix);
humano.merge(cuello.geometry, cuello.matrix);
humano.merge(cabeza.geometry, cabeza.matrix);
material = new THREE.MeshNormalMaterial();

				
humano1=new THREE.Mesh(humano,material);
humano2=new THREE.Mesh(humano,material);
humano3=new THREE.Mesh(humano,material);
humano4=new THREE.Mesh(humano,material);
humano5=new THREE.Mesh(humano,material);
humano6=new THREE.Mesh(humano,material);
humano1.position.x= -400;
humano1.position.z=-400;
humano1.rotation.y= Math.PI/2;
humano2.position.x= -400;
humano2.position.z=-800;
humano2.rotation.y= Math.PI/2;
humano3.position.x= -400;
humano3.position.z=-1200;
humano3.rotation.y= Math.PI/2;
humano4.position.x= -1350;
humano4.position.z=-600;
humano4.rotation.y= Math.PI/2;
humano5.position.x= -1350;
humano5.position.z=-1000;
humano5.rotation.y= Math.PI/2;
humano6.position.x= -2300;
humano6.position.z=-800;
humano6.rotation.y= Math.PI/2;
humanos= new Array(humano1, humano2, humano3, humano4, humano5, humano6);
return humanos;
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////PELOTA//////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function pelot(){
pelota= new THREE.SphereGeometry(100);
pelota.translate(0,400,-800);
pelota= new THREE.Mesh(pelota, material);
return pelota;
}

////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////TABLERO/////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////

function tabler(){
plano= new THREE.CubeGeometry(5600,30,2000);
plano.translate(0,500,-1000);
pared1= new THREE.CubeGeometry(50,200,700);
pared1.translate(-2775,390,-350);
pared2= new THREE.CubeGeometry(50,200,700);
pared2.translate(-2775,390,-1650);
pared3= new THREE.CubeGeometry(50,200,700);
pared3.translate(2775,390,-350);
pared4= new THREE.CubeGeometry(50,200,700);
pared4.translate(2775,390,-1650);
pared5= new THREE.CubeGeometry(5600,200,50);
pared5.translate(0,390,-1975);
pared6= new THREE.CubeGeometry(5600,200,50);
pared6.translate(0,390,-25);

plano=new THREE.Mesh(plano);
pared1=new THREE.Mesh(pared1);
pared2=new THREE.Mesh(pared2);
pared3=new THREE.Mesh(pared3);
pared4=new THREE.Mesh(pared4);
pared5=new THREE.Mesh(pared5);
pared6=new THREE.Mesh(pared6);

paredes= new THREE.Geometry();
paredes.merge(plano.geometry, plano.matrix);
paredes.merge(pared1.geometry, pared1.matrix);
paredes.merge(pared2.geometry, pared2.matrix);
paredes.merge(pared3.geometry, pared3.matrix);
paredes.merge(pared4.geometry, pared4.matrix);
paredes.merge(pared5.geometry, pared5.matrix);
paredes.merge(pared6.geometry, pared6.matrix);

tablero= new THREE.Mesh(paredes, material);
return tablero;
}

////////////////////PARÁMETROS DE CAMARA//////////////////////////////////////////////

function camera(){
camara = new THREE.PerspectiveCamera(250,(window.innerWidth / window.innerHeight),1,4000);
camara.position.z = 1200;
camara.position.x = 0;
camara.position.y = -900;
//camara.rotation.x = Math.PI/2;
}

//////////////////////////FUNCIÓN LISTENER///////////////////////////////////////////////

function listener(){
	camara.aspect=window.innerWidth/window.innerHeight
	camara.updateProjectionMatrix();
	renderer.setSize(window.innerWidth/window.innerHeight)
}

var capturarp=false

var escena = new THREE.Scene();

////////////////////ESCENAS////////////////////////////////////////////////////////////

//////////////////PELOTA////////////////////////////////////

function escenaPelota(){
camera();
pelota=pelot();
escena.add(pelota);
}

function loop2(){
	requestAnimationFrame(loop2);
	if (k==0 && pelota.position.z>-1050){
	pelota.position.z -= 15;}
	else if (k==0 && pelota.position.z<=-1050){
	k=1;
	pelota.position.z += 15;
	}
	else if (k==1 && pelota.position.z>=-1050 && pelota.position.z<-150){
	pelota.position.z += 15;}
	else if (k==1 && pelota.position.z>=-150){
	k=0;
	pelota.position.z -= 15;
	}
	renderer.render(escena,camara);
}

function colision(){
  THREE.Object3D.call(this);
  THREE.ImageUtils.crossOrigin = '';
  var pelota2 = THREE.ImageUtils.loadTexture('https://karenkwz.github.io/ProyectoFinal/texturas-metal-18.gif');
  
  
   
  this.pelota3= new THREE.Mesh(new THREE.SphereGeometry(100,100,100),new THREE.MeshBasicMaterial({map:pelota2}));
  
  this.add(this.pelota3)
}
colision.prototype = new THREE.Object3D();

function setup(){



  cubo1 = new THREE.Mesh( new THREE.CubeGeometry(50,200,700),
                          new THREE.MeshNormalMaterial());
  cubo2 = new THREE.Mesh( new THREE.CubeGeometry(50,200,700),
                          new THREE.MeshNormalMaterial());
  cubo3 = new THREE.Mesh( new THREE.CubeGeometry(50,200,700),
                          new THREE.MeshNormalMaterial());
  cubo4 = new THREE.Mesh( new THREE.CubeGeometry(50,200,700),
                          new THREE.MeshNormalMaterial());
 cubo5 = new THREE.Mesh( new THREE.CubeGeometry(5600,200,50),
                          new THREE.MeshNormalMaterial());
 cubo6 = new THREE.Mesh( new THREE.CubeGeometry(5600,200,50),
                          new THREE.MeshNormalMaterial());

  pelota4 = new colision();
                          
  cubo1.position.x = -2775;
  cubo1.position.y = 390;
  cubo1.position.z = -350;
  cubo2.position.x = -2775;
  cubo2.position.y = 390;
  cubo2.position.z = -1650;
  cubo3.position.x = 2775;
  cubo3.position.y = 390;
  cubo3.position.z = -350;
  cubo4.position.x = 2775;
  cubo4.position.y = 390;
  cubo4.position.z = -1650;
  cubo5.position.x = 0;
  cubo5.position.y = 390;
  cubo5.position.z = -1975;
  cubo6.position.x = 0;
  cubo6.position.y = 390;
  cubo6.position.z = -25;
  camara = new THREE.PerspectiveCamera();
  camara.position.z = 70;
  
    raycaster1 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(1,0,0));
    raycaster2 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(-1,0,0));
    raycaster3 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(0,1,0));
    raycaster4 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(0,-1,0));
    raycaster5 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(0,1,0));
    raycaster6 = new THREE.Raycaster( pelota4.position, new THREE.Vector3(0,-1,0));

  escena = new THREE.Scene();
  escena.add ( cubo1 );
  escena.add ( cubo2 );
  escena.add ( cubo3 );
  escena.add ( cubo4 );
  escena.add ( cubo5 );
 escena.add ( cubo6 );
  escena.add ( pelota4 );
  escena.add ( camara );

  stepx = 0.5;
  stepy = 0.3;
  step  =0.1;
  rotacionx=-1;
  rotaciony=-1;
}

function loop3(){
requestAnimationFrame(loop3);
  obstaculo1 = raycaster1.intersectObject( cubo1 );
  obstaculo2 = raycaster2.intersectObject( cubo2 );
  obstaculo3 = raycaster3.intersectObject( cubo3 );
  obstaculo4 = raycaster4.intersectObject( cubo4 );
obstaculo5 = raycaster5.intersectObject( cubo5 );
obstaculo6 = raycaster6.intersectObject( cubo6 );
  
  if ((obstaculo1.length > 0 && (obstaculo1[0].distance <= 3)) ||
      (obstaculo2.length > 0 && (obstaculo2[0].distance <= 3))){
      rotaciony= -rotaciony;  
      stepx= -stepx;
      }
  if ((obstaculo3.length > 0 && (obstaculo3[0].distance <=3)) ||
      (obstaculo4.length > 0 && (obstaculo4[0].distance <=3))){
       rotacionx= -rotacionx;
      stepy= -stepy;}
  if ((obstaculo5.length > 0 && (obstaculo5[0].distance <=3)) ||
      (obstaculo6.length > 0 && (obstaculo6[0].distance <=3))){
       rotacionx= -rotacionx;
      stepy= -stepy;
      }

      
  pelota4.position.x += stepx;
  pelota4.position.y += stepy;
  raycaster1.set( pelota4.position, new THREE.Vector3(1,0,0) );
  raycaster2.set( pelota4.position, new THREE.Vector3(-1,0,0) );
  raycaster3.set( pelota4.position, new THREE.Vector3(0,1,0) );
  raycaster4.set( pelota4.position, new THREE.Vector3(0,-1,0) );
raycaster5.set( pelota4.position, new THREE.Vector3(0,-1,0) );
raycaster6.set( pelota4.position, new THREE.Vector3(0,-1,0) );
  
  renderer.render( escena, camara );
  requestAnimationFrame( loop3 );
}

//////////////////TABLERO///////////////////////////////////

function escenaTablero(){
camera();
tablero=tabler();
escena.add(tablero);
}

//////////////////EQUIPO-MARCIANO//////////////////////////
function escenaEquipoMarciano(){

camera();
marciano=marcian();
escena.add(marciano[0]);
escena.add(marciano[1]);
escena.add(marciano[2]);
escena.add(marciano[3]);
escena.add(marciano[4]);
escena.add(marciano[5]);

var tipoEvento='remove';
window.addEventListener(tipoEvento,listener,capturarp);
}

//////////////////EQUIPO-HUMANO//////////////////////////////

function escenaEquipoHumano(){
camera();
humano=human();
escena.add(humano[0]);
escena.add(humano[1]);
escena.add(humano[2]);
escena.add(humano[3]);
escena.add(humano[4]);
escena.add(humano[5]);
}
//////////////////////COLISION/////////////////////////////////////////////


///////////////////////PUSH////////////////////////////////////////////////////////////

function push (e){

	if (e.keyCode===120 && humano[0].position.z<=-150){
		humano[0].position.z += 20;
		humano[1].position.z += 20;
		humano[2].position.z += 20;}
	else if (e.keyCode===120 && humano[0].position.z>-150){
		humano[0].position.z = -140;}
	if (e.keyCode===115 && humano[2].position.z>=-1840){
		humano[0].position.z -= 20;
		humano[1].position.z -= 20;
		humano[2].position.z -= 20;}
	else if (e.keyCode===115 && humano[2].position.z<-1840){
		humano[0].position.z = -1060;
		humano[1].position.z = -1460;
		humano[2].position.z = -1860;}
	if (e.keyCode===99 && humano[3].position.z<=-150){
		humano[3].position.z += 20;
		humano[4].position.z += 20;}
	else if (e.keyCode===99 && humano[3].position.z>-150){
		humano[3].position.z = -140;}
	if (e.keyCode===100 && humano[4].position.z>=-1840){
		humano[3].position.z -= 20;
		humano[4].position.z -= 20;}
	else if (e.keyCode===100 && humano[4].position.z<-1840){
		humano[3].position.z = -1460;
		humano[4].position.z = -1860;}
	if (e.keyCode===109 && humano[5].position.z<=-600){
		humano[5].position.z += 20;}
	else if (e.keyCode===109 && humano[5].position.z>-600){
		humano[5].position.z = -590;}
	if(e.keyCode===107 && humano[5].position.z>=-1200){
		humano[5].position.z -= 20;}
	else if (e.keyCode===107 && humano[5].position.z<-1200){
		humano[5].position.z = -1210;}
}
///////////////////////////////////////////////////////////////////////////////////
window.addEventListener('keypress',push,false);


//////////////////////////////////ANIMACIÓN////////////////////////////////////////
k=0;
m=0;
n=0;

function loop(){
	requestAnimationFrame(loop);
	if (k==0 && marciano[0].position.z>-1050){
	marciano[0].position.z -= 15;	
	marciano[1].position.z -= 15;
	marciano[2].position.z -= 15;}
	else if (k==0 && marciano[0].position.z<=-1050){
	k=1;
	marciano[0].position.z += 15;
	marciano[1].position.z += 15;
	marciano[2].position.z += 15;}
	else if (k==1 && marciano[0].position.z>=-1050 && marciano[0].position.z<-150){
	marciano[0].position.z += 15;
	marciano[1].position.z += 15;
	marciano[2].position.z += 15;}
	else if (k==1 && marciano[0].position.z>=-150){
	k=0;
	marciano[0].position.z -= 15;
	marciano[1].position.z -= 15;
	marciano[2].position.z -= 15;}

	if (m==0 && marciano[3].position.z>-1450){
	marciano[3].position.z -= 15;
	marciano[4].position.z -= 15;}
	else if (m==0 && marciano[3].position.z<=-1450){
	m=1;
	marciano[3].position.z += 15;
	marciano[4].position.z += 15;}
	else if (m==1 && marciano[3].position.z>=-1450 && marciano[3].position.z<-150){
	marciano[3].position.z += 15;
	marciano[4].position.z += 15;}
	else if (m==1 && marciano[3].position.z>=-150){
	m=0;
	marciano[3].position.z -= 15;
	marciano[4].position.z -= 15;}

	if (n==0 && marciano[5].position.z>-1200){
	marciano[5].position.z -= 20;}
	else if (n==0 && marciano[5].position.z<=-1200){
	n=1;
	marciano[5].position.z += 20;}
	else if (n==1 && marciano[5].position.z>=-1200 && marciano[5].position.z<-600){
	marciano[5].position.z += 20;}
	else if (n==1 && marciano[5].position.z>=-600){
	n=0;
	marciano[5].position.z -= 20;}
	renderer.render(escena,camara);
}

var tablero, humano, marciano, camara, renderer, escena;
renderizar();
var cubo1, cubo2, cubo3, cubo4, cubo5, cubo6, cubo7, pelota4, escena, camara, renderer;
var raycaster1, raycaster2, raycaster3, raycaster4, raycaster5, raycaster6, step;
var obstaculo1, obstaculo2, obstaculo3, obstaculo4, obstaculo5, obstaculo6;
var step, stepx, stepy;

setup();
escenaTablero();
escenaPelota();
escenaEquipoMarciano();
escenaEquipoHumano();
loop();
loop2();
loop3();
