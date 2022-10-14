let nombre = 'JeffersonAhimar'

const genero = 'masculino'

function nombreCompleto(name, lastname){
    return name + ' ' + lastname
}

function saludo(name, lastname, nickname){
    const completeName = nombreCompleto(name, lastname);
    console.log("Mi nombre es "+completeName+ ", pero prefiero que digas "+ nickname + ".");
}

saludo('Jefferson',"Huaman","jeffersonahimar");



// ARRAYS

arrFrutas=['apple','pear','strawberry','grapes','banana'];

function imprimirElementoPorElemento(arr){
    for (let i = 0; i < arr.length; i++) {
        console.log(`Posición ${i}: `+arr[i]);
    }
}

imprimirElementoPorElemento(arrFrutas);


// OBJETOS

const obj = {
    name: 'Jefferson',
    age: 23,
    favFoods: ['Chaufa','Ceviche']
};

console.log(Object.entries(obj));


const arrObj = Object.values(obj);

for (let i = 0; i< arrObj.length; i++){
    console.log(arr[i])
}



// REDUCCIÓN DE CONDICIONALES

function conseguirTipoSuscripcion(suscripcion) {
    if (suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    
    if (suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    
    if (suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    }
    
    if (suscripcion == 'ExpertDuo') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}


// 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays o objetos y un solo condicional. 😏

const tiposDeSuscripciones = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'Puedes tomar casi todos los cursos de Platzi durante un año',
    expertduo: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function conseguirTipoSuscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }

    console.warn('Ese tipo de suscripción no existe')
}

