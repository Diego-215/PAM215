const personas =[
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "María", edad: 28}
];

const luis = personas.find (p => p.nombre == "Luis");
console.log(luis);

personas.forEach ((personas) => {
    console.log(personas)
});

const total = personas.reduce((suma, p) => suma + p.edad, 0);
console.log(total);