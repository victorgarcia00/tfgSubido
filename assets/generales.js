'use strict';
//*******************DECLARACION DE VARIABLES*************************/
var numTelefonoPropietario = 34609346813;
var textoEnviar = 'mandando whatsapp desde JS a adri pelirrojo';
//*******************DECLARACION DE FUNCIONES*************************/
function prepareMesages(REEMPLAZO, textoEnviar) {
    let mesageChecked = textoEnviar.replace(regExSpace, REEMPLAZO);
    return mesageChecked;
}

function avoidHacking() {

}

function sendMesages(WHATSAPP_API, PHONE, TEXT, numTelefonoPropietario, mesageChecked) {
    let url_whatsapp = WHATSAPP_API + PHONE + numTelefonoPropietario + TEXT + mesageChecked;
    location.href = url_whatsapp;

}
//*******************EJECUCION PRINCIPAL*************************/
window.addEventListener('load', function() {
    createHeader(arrDatosNav);
    createMain(body)
});