import HeaderNotPrincipal from "../../components/headerNotPrincipal/HeaderNotPrincipal"
import {miliCholo} from "/Users/Lucas/OneDrive/Documentos/GitHub/miliNietoEnfermera/src/assets/images"

function 	moreServices() {
  return (
    <section>
      <HeaderNotPrincipal/>
      <div>
        <h1>
          Servicios principales y a medida
        </h1>
        <div>
          <p>
          Cuidados contínuos, ocasionales o puntuales de enfermería profesional
          <div>
            <ul>
              <li>Administración de tratamientos prescritos, por vía oral, intravenosa, subcutánea o intramuscular</li>
              <li>Formación a cuidadores habituales sobre dichos tratamientos, y realización de un plan personalizado de adherencia al tratamiento</li>
              <li>Extracción de analíticas, controles de anticoagulación y realización de PCR</li>
              <li>Toma y monitorización de constantes y realización y seguimiento de controles de glucemia</li>
              <li>Valoración global del paciente, consejo nutricional, educación sanitaria.</li>
              <li>Acompañamiento a consultas médicas o tratamientos hospitalarios ambulantes (diálisis, quimioterapia…)</li>
              <li>Valoración, cura y seguimiento de heridas quirúrgicas, retirada de puntos y drenajes. </li>
            </ul>
          </div>
          </p>
          {miliCholo.map((image) =>(
            <img src={image.src} alt={image.alt} />

          ))}
        </div>
      </div>
    </section>
  )
}

export default 	moreServices