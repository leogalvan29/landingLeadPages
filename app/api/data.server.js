export async function obtenerDatosLanding(){
    const data = await fetch(`https://www.paginaswebculiacan.net/wp-json/wp/v2/home`)
    const datos = await data.json() 
    return datos
}