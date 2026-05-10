
function mostrarInicio(){
document.getElementById("mensaje").innerHTML =
"<h3>Somos una agencia de viajes que estamos para prestar servicio a cualquier parte del mundo que necesites.</h3>";
}

function reservar(destino){
document.getElementById("mensaje").innerHTML =
"<h3>✅ Reserva realizada para " + destino + "</h3>";
}

function whatsapp(){
window.open("https://wa.me/18093327773");
}

function abrirFormulario(){
window.open("formulario.html");
}

/* BUSCADOR SERVICIOS */
function mostrarBuscadorServicios(){
document.getElementById("buscadorServicios").style.display = "block";
}

function mostrarVuelos(){
document.getElementById("formVuelos").style.display = "block";
document.getElementById("formHoteles").style.display = "none";
}

function mostrarHoteles(){
document.getElementById("formVuelos").style.display = "none";
document.getElementById("formHoteles").style.display = "block";
}

function crearEdades(cantidad, contenedorId){

let contenedor =
document.getElementById(contenedorId);

contenedor.innerHTML = "";

for(let i=0;i<cantidad;i++){

contenedor.innerHTML += `
<select class="form-select mt-1">
<option>Edad niño ${i+1}</option>
<option>0-2</option>
<option>3-5</option>
<option>6-11</option>
<option>12-17</option>
</select>`;

}

}
// =========================
// MOSTRAR BUSCADOR
// =========================

function mostrarBuscadorServicios(){
document.getElementById("buscadorServicios").style.display="block";
}

function cerrarBuscador(){
document.getElementById("buscadorServicios").style.display="none";
}

// =========================
// CAMBIAR FORMULARIOS
// =========================

function mostrarVuelos(){
document.getElementById("formVuelos").style.display="block";
document.getElementById("formHoteles").style.display="none";
}

function mostrarHoteles(){
document.getElementById("formVuelos").style.display="none";
document.getElementById("formHoteles").style.display="block";
}

// =========================
// RESERVAS
// =========================

function reservar(destino){
alert("Reserva realizada para " + destino);
}

// =========================
// WHATSAPP
// =========================

function whatsapp(){
window.open(
"https://wa.me/18293327773",
"_blank"
);
}

// =========================
// REGISTRO USUARIO
// =========================

function registrarUsuario(){

let nombre =
document.getElementById("registroNombre").value;

let usuario =
document.getElementById("registroUsuario").value;

let correo =
document.getElementById("registroCorreo").value;

let password =
document.getElementById("registroPassword").value;

// VALIDACION

if(
nombre === "" ||
usuario === "" ||
correo === "" ||
password === ""
){
alert("Complete todos los campos");
return;
}

// GUARDAR DATOS

localStorage.setItem("usuario", usuario);
localStorage.setItem("password", password);
localStorage.setItem("nombre", nombre);

alert("Usuario registrado correctamente");

// LIMPIAR

document.getElementById("registroNombre").value="";
document.getElementById("registroUsuario").value="";
document.getElementById("registroCorreo").value="";
document.getElementById("registroPassword").value="";
}

// =========================
// LOGIN
// =========================

function loginUsuario(){

let usuario =
document.getElementById("loginUsuario").value;

let password =
document.getElementById("loginPassword").value;

// DATOS GUARDADOS

let usuarioGuardado =
localStorage.getItem("usuario");

let passwordGuardado =
localStorage.getItem("password");

if(
usuario === usuarioGuardado &&
password === passwordGuardado
){
alert("Bienvenido " + usuario);
}
else{
alert("Usuario o contraseña incorrectos");
}

}
// =========================
// MOSTRAR BUSCADOR
// =========================

function mostrarBuscadorServicios(){
document.getElementById("buscadorServicios").style.display="block";
}

function cerrarBuscador(){
document.getElementById("buscadorServicios").style.display="none";
}

// =========================
// CAMBIAR FORMULARIOS
// =========================

function mostrarVuelos(){
document.getElementById("formVuelos").style.display="block";
document.getElementById("formHoteles").style.display="none";
}

function mostrarHoteles(){
document.getElementById("formVuelos").style.display="none";
document.getElementById("formHoteles").style.display="block";
}

// =========================
// CREAR EDADES
// =========================

function crearEdades(cantidad,idContenedor){

let contenedor =
document.getElementById(idContenedor);

contenedor.innerHTML="";

for(let i=1;i<=cantidad;i++){

contenedor.innerHTML += `

<div class="col-md-3 mt-2">

<label>Edad Niño ${i}</label>

<input type="number"
class="form-control"
min="0"
max="17">

</div>

`;

}

}

// =========================
// RESERVAS
// =========================

function reservar(destino){
alert("Reserva realizada para " + destino);
}

// =========================
// WHATSAPP
// =========================

function whatsapp(){

window.open(
"https://wa.me/18293327773",
"_blank"
);

}

// =========================
// REGISTRO USUARIO
// =========================

function registrarUsuario(){

let nombre =
document.getElementById("registroNombre").value;

let usuario =
document.getElementById("registroUsuario").value;

let correo =
document.getElementById("registroCorreo").value;

let password =
document.getElementById("registroPassword").value;

// VALIDACION

if(
nombre === "" ||
usuario === "" ||
correo === "" ||
password === ""
){
alert("Complete todos los campos");
return;
}

// GUARDAR DATOS

localStorage.setItem("nombre", nombre);
localStorage.setItem("usuario", usuario);
localStorage.setItem("correo", correo);
localStorage.setItem("password", password);

alert("Usuario registrado correctamente");

// LIMPIAR

document.getElementById("registroNombre").value="";
document.getElementById("registroUsuario").value="";
document.getElementById("registroCorreo").value="";
document.getElementById("registroPassword").value="";

}

// =========================
// LOGIN
// =========================

function loginUsuario(){

let usuario =
document.getElementById("loginUsuario").value;

let password =
document.getElementById("loginPassword").value;

let usuarioGuardado =
localStorage.getItem("usuario");

let passwordGuardado =
localStorage.getItem("password");

if(
usuario === usuarioGuardado &&
password === passwordGuardado
){

alert("Bienvenido " + usuario);

}
else{

alert("Usuario o contraseña incorrectos");

}

}
