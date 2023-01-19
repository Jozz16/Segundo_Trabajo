// rescatar el valor de mi input que cambia el nombre de mi region, cuando el usuario modifique el input 
// entrar a mi objeto: recorrer mi array para "entrar" a cada uno de los objetos y modificar el atributo de nombre 
// remplazar  el valor de mi input con el valor del nombre de la array region
// dibujar el nuevo valor de nombre de mi array

let cambioNuevoNombre = document.getElementById("cambioTitulo")
let cambioNuevaAtraccion = document.getElementById("cambioAtractivo")
let cambioNuevaImg = document.getElementById("cambioImg")
let imgVacio = document.getElementById("imgVacio")

let idRegionSeleccionada = null

let region = [
    {id: 1, nombre: 'Región de Arica y Parinacota', atractivo:'El morro de Arica es un cerro costero, que tiene unos 130 metros de altura, emplazado al sur del espacio urbano de Arica, en la región de Arica y Parinacota, en el norte de Chile.',img:'/img/arica-Blog.jpg'},
    {id: 2, nombre: 'Región de Tarapaca', atractivo:'Pozo Almonte está ubicado a más de 50 kilómetros desde la ciudad de Iquique, en plena Pampa del Tamarugal, cuenta con distintos atractivos turísticos en su abanico de destinos. Imperdibles como las ex oficinas salitreras Humberstone y Santa Laura, ambas declaradas Monumentos Nacionales desde el año 1970 y Patrimonio Cultural de la Humanidad desde el 2005.',img:'/img/altomonte.jpg'},
    {id: 3, nombre: 'Región de Antofagasta', atractivo:'El famoso arco de origen geológico denominado La Portada, es uno de los principales atractivos turísticos para quienes visitan la ciudad de Antofagasta.',img:'/img/antofa.jpg'},
    {id: 4, nombre: 'Región de Atacama', atractivo:'El desierto de Atacama es el «lugar no polar más árido de la Tierra.Se extiende por las regiones naturales del Norte Grande y el Norte Chico de Chile,',img:'/img/atacama.jpg'},
    {id: 5, nombre: 'Región de Coquimbo', atractivo:'La Cruz del Tercer Milenio es un monumento conmemorativo religioso ubicado en el cerro El Vigía de Coquimbo, Chile. Fue construido con el motivo del jubileo del año 2000 de la Iglesia católica. Su construcción fue iniciada en 1999 y terminada en 2000.',img:'/img/cruz.jpg'},
    {id: 6, nombre: 'Región de Valparaiso', atractivo:'Cerro Alegre es un barrio de la ciudad de Valparaíso, Chile y se encuentra sobre el centro político y financiero de la ciudad. Su nombre se debe a los bellos jardines que adornaban las casas del sector, que en el siglo XIX estaba habitado principalmente por inmigrantes ingleses.',img:'/img/cerro-alegre.jpg'},
    {id: 7, nombre: 'Región Metropolitana', atractivo:'Costanera Center es el centro comercial más grande de Chile, ubicado en la comuna de Providencia, Región Metropolitana de Santiago. Fue nombrado así porque está en la Avenida Costanera Sur, cerca del río Mapocho.',img:'/img/center.jpg'},
    {id: 8, nombre: 'Región de Libertador  Bernardo oHoggins', atractivo:'La casa de Negreta',img:'/img/Rancagua.jpg'},
    {id: 9, nombre: 'Región del Maule', atractivo:'El Parque Nacional Radal Siete Tazas es un parque nacional ubicado en la Provincia de Curicó, Región del Maule, Chile. Se encuentra en una zona preandina cercana al volcán Descabezado Grande.',img:'/img/tazas.jpg'},
    {id: 10, nombre: 'Región de Ñuble', atractivo:'Claudio Arrau, Marta Colvin, Gonzalo Rojas, Marta Brunet, Eduardo Parra y muchos otros, son sólo parte del legado de una de las ciudades con más acervo cultural del sur del país. Aquí la cultura se respira a través del arte, pero también en la gastronomía y en su identidad ligada al campo.',img:'/img/chillan.jpg'},
    {id: 11, nombre: 'Región Bío Bío', atractivo:'Los Saltos Del Laja o Salto del Laja o también llamado Cataratas del Laja, son cuatro cascadas del río de La Laja, ubicadas en la Región del Biobío en Chile. Está ubicado 25 km al norte de la ciudad de Los Ángeles, siendo el límite de ésta con la comuna de Cabrero.',img:'/img/laja.jpg'},
    {id: 12, nombre: 'Región de la Araucanía', atractivo:'La región de la Araucanía, en el centro de Chile, abarca un terreno que varía desde la costa del Pacífico en el oeste hasta los volcanes y las montañas de los Andes en el este. Al sureste está la región de Los Lagos de Chile, con lagos de agua dulce y bosques lluviosos templados. Las reservas de la naturaleza, como el Parque Nacional Huerquehue y el Parque Nacional Conguillío, protegen los ecosistemas con lagos, ríos y bosques de araucarias.',img:'/img/araucaria.jpg'},
    {id: 13, nombre: 'Región de Los Rios', atractivo:'Ubicada en la zona de lagos y volcanes, la Región de Los Ríos encanta a todos los turistas que la visitan.  Valdivia con sus atractivos y bellos paisajes, la cuenca del Lago Ranco; y Sietelagos, destino que reúne en sus territorios extensas zonas naturales en donde podrás encontrar una gran gama de espacios de hermosas manifestaciones.',img:'/img/rios.jpg'},
    {id: 14, nombre: 'Región de Los Lagos', atractivo:'aHuar o Guar es una isla del archipiélago de Calbuco, en el sur de Chile. Forma parte de la comuna de Calbuco, en la provincia de Llanquihue, Región de Los Lagos. Está ubicada a una hora y media de navegación de la capital provincial, la ciudad de Puerto Montt, distante a unos 22 kilómetros. La isla tiene una población estimada de 1021 habitantes, según el censo de 2017',img:'/img/huar.jpg'},
    {id: 15, nombre: 'Región de Aysén del General Carlos Ibáñez del Campo', atractivo:'La región de Aysén es un área escasamente poblada del sur de Chile, con grandes glaciares, fiordos y montañas nevadas. El Parque Nacional Laguna San Rafael abarca los Campos de Hielo Norte de la Patagonia, que tiene numerosos glaciares en los lagos interiores y ríos. Las cumbres de las montañas incluyen el cerro Castillo, de 2,675 m de altura y terreno serrado, ubicado dentro de una reserva natural del mismo nombre.',img:'/img/aysen.jpg'},
    {id: 16, nombre: 'Región de Magallanes y Antártica Chilena', atractivo:'El Parque Nacional Torres del Paine, en la región de la Patagonia de Chile, es conocido por sus altas montañas, los témpanos de azul brillante que se aferran a los glaciares y las pampas doradas (praderas) que albergan fauna poco común, como los guanacos. Algunos de los sitios más icónicos son las 3 torres de granito que le dan nombre al parque y las cimas con forma de cuernos llamadas Cuernos del Paine.',img:'/img/torres.jpg'},
]

document.querySelector(".container").style.display = "none";

function showInfo(region_id) {
    idRegionSeleccionada = region_id
    document.querySelector(".container").style.display = "block";
    let infoRegion = region.filter(region => region.id == region_id);

    document.querySelector(".titulo").textContent= 'Región:'+' '+ infoRegion[0].nombre; 
    document.querySelector(".atractivo").textContent='Atractivos:'+' '+infoRegion[0].atractivo;
    document.querySelector(".img").setAttribute("src",`${infoRegion[0].img}`)
}

function enviar (){
    const nuevaRegion = {
        id: idRegionSeleccionada, 
        nombre: cambioNuevoNombre.value,
        atractivo: cambioNuevaAtraccion.value,
        img: cambioNuevaImg.value
    }

    region = region.map(Element => {
        if(idRegionSeleccionada == Element.id){
            if(cambioNuevaImg.value == ""&&cambioNuevaImg.value == ""&&cambioNuevaAtraccion.value == "" ){
                nuevaRegion.img = Element.img
                nuevaRegion.nombre = Element.nombre
                nuevaRegion.atractivo = Element.atractivo
            }   
            else if (cambioNuevaImg.value == ""){
                nuevaRegion.img = Element.img
            } else if(cambioNuevoNombre.value == ""){
                nuevaRegion.nombre = Element.nombre
            } else if (cambioNuevaAtraccion.value == ""){
                nuevaRegion.atractivo = Element.atractivo
            }


            
            return nuevaRegion
        } else {
            return Element
        }
    })
    showInfo(nuevaRegion.id)
}