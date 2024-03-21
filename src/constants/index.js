import{
    whatsApp,
    instagram,
    analiticas,
    tratamientos,
    formacion,
    pcr,
    monitorizacion
} from "../assets/icons";

export const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#precio", label: "Precio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#porqueMili", label: "¿Por qué Mili?" },
    { href: "#resultados", label: "Resultados" },
    { href: "#contactos", label: "Contactos" },
    { href: "#whatsApp", label: "+34 677551276" },
  ];

  export const navLinksNotPrincipal = [
    { href: "/miliNietoEnfermera#inicio", label: "Inicio" },
    { href: "/miliNietoEnfermera#precio", label: "Precio" },
    { href: "/miliNietoEnfermera#servicios", label: "Servicios" },
    { href: "/miliNietoEnfermera#porqueMili", label: "¿Por qué Mili?" },
    { href: "/miliNietoEnfermera#resultados", label: "Resultados" },
    { href: "/miliNietoEnfermera#contactos", label: "Contactos" },
    { href: "/miliNietoEnfermera#whatsApp", label: "+34 677551276" },
  ];


export const socialMedia = [
    {
        src: whatsApp,
        alt: 'WhatsApp Logo',
        href: '#'
    },
    {
        src:instagram,
        alt:'Instagram Logo',
        href:'#'
    }
]

export const cards = [
    {
        number: '1.',
        title: 'Nos adaptamos a tu situación',
        text: 'Cada paciente es diferente, nos adaptamos a las necesidades de cada uno. Antes de la primera visita, es necesario una llamada para conocer las necesidades personales',

    },
    {
        number: '2.',
        title: 'A domicilio',
        text: 'Cuidados continuos, ocasionales o puntuales de enfermería profesional'
    },
    {
        number: '3.',
        title: 'Profesionalidad',
        text: 'Más de 25 años de experiencia, miembro del Consejo de Enfermería de Madrid.'
    },
    {
        number: '4.',
        title: 'Inmediatez y confianza',
        text: 'No hay nada mejor que un cliente satisfecho, disponibilidad y confianza es nuestro objetivo primordial'
    },
]


export const cuidados =[
    {

        number: '1.',
        icon: analiticas,
        text: 'Extracción de analíticas, (sanitas, adeslas, mapfre, etc)',

    },
    {

        number: '2.',
        icon: tratamientos,
        text: 'Administración de tratamientos prescritos vía oral, subcutánea  intramuscular administración vacunas',

    },
    {

        number: '3.',
        icon:formacion,
        text: 'Formación a cuidadores para llevar los tratamientos de la forma más eficiente posible',

    },
    {

        number: '4.',
        icon:pcr,
        text: 'Test de antígenos y PCR ',

    },
    {

        number: '5.',
        icon: monitorizacion,
        text: 'Toma y monitorización de constantes y realización y seguimiento de controles de glucemia',

    },
]




export const masServicios =[
    {

        text: 'Administración de tratamientos prescritos, por vía oral, intravenosa, subcutánea o intramuscular',

    },
    {

        text: 'Formación a cuidadores habituales sobre dichos tratamientos, y realización de un plan personalizado de adherencia al tratamiento',

    },
    {

        text: 'Extracción de analíticas, controles de anticoagulación y realización de PCR',

    },
    {

        text: 'Toma y monitorización de constantes y realización y seguimiento de controles de glucemia',

    },
    {

        text: 'Valoración global del paciente, consejo nutricional, educación sanitaria.',

    },
    {

        text: 'Acompañamiento a consultas médicas o tratamientos hospitalarios ambulantes (diálisis, quimioterapia…)',

    },
    {

        text: 'Valoración, cura y seguimiento de heridas quirúrgicas, retirada de puntos y drenajes.',

    },

    
]