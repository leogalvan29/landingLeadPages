import { useLoaderData } from "react-router";
import { obtenerDatosLanding } from "../api/data.server"; 


export async function loader(){
   const datos = await obtenerDatosLanding() 
   console.log(datos)
   return datos
}



export default function Index() { 
  const datosLanding = useLoaderData() 
  console.log(datosLanding) 
  console.log(datosLanding[0].acf.logo.url) 

   const mostrarModal = () => {
    console.log('mostrando modal')
   }
  return (   
   <div className="contenedor"> 
    
     <div className="bloque1">
     <img src={datosLanding[0].acf.logo.url} alt="" className="logo"/>
     <div className="txt">
     <p className="free-guide">{datosLanding[0].acf.free_guide}</p>
      <h1 className="titulo">{datosLanding[0].acf.titulo_home}</h1>
      <p className="description">{datosLanding[0].acf.description}</p>
     </div>
      <button  onClick={()=> mostrarModal()} className="btn">{datosLanding[0].acf.btn}</button>


     </div>

     <div className="bloque2">
       <img src={datosLanding[0].acf.imagen_hero.url} alt="" />
     </div>
     
     
   </div>
  );
}
