import{
    whatsApp,
    instagram
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
        color: "bg-red-500",
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