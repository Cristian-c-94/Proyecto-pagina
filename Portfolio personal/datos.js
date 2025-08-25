const miPerfil = {
    nombre: "Cristian",
    profesión: "Desarrollador Web Ultra Jr",
    ciudad: "Rosario",
    email: "correopersonal@hotmail.com"
};


const habilidades = ["HTML", "CSS", "JavaScript"];

const proyectos = [
    {
        nombre: "Mi sitio web",  
        tecnologias: "HTML",
        estado: "En desarrollo"
    },
    {
        nombre: "Aplicación móvil",
        tecnologias: "CSS",
        estado: "Completado"
    },
    {
        nombre: "E-commerce",
        tecnologias: "JavaScript",
        estado: "Completado"
    }
];

function obtenerProyectosCompletados() {
    return proyectos.filter(proyecto => proyecto.estado === "Completado");
}

function obtenerTecnologias() {
    const tecnologiasUnicas = [];

    proyectos.forEach(proyecto => {
        if (!tecnologiasUnicas.includes(proyecto.tecnologias)) {
            tecnologiasUnicas.push(proyecto.tecnologias);
        }
    });

    return tecnologiasUnicas;
}

console.log(obtenerProyectosCompletados());
console.log(obtenerTecnologias());




const educacion = [
    {curso: "Desarrollo Web", institucion: "ComuIT", año: 2025},
    {curso: "Pseint", institucion: "Egg", año: 2022}
];

let sobreMi = [miPerfil, habilidades, proyectos, educacion];

for (let i = 0; i < sobreMi.length; i++) {
    let about = sobreMi[i];
    console.log(sobreMi);
};
