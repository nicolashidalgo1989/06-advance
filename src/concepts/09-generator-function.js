/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorFunctionComponent = ( element ) => {

    // const myGenerator = myFirstGeneratorFunction();

    // console.log( myGenerator.next() ); // { value: 'primer valor', done: false }
    // console.log( myGenerator.next() ); // { value: 'segundo valor', done: false }
    // console.log( myGenerator.next() ); // { value: 'no hay mas valores', done: true }
    // console.log( myGenerator.next() ); // { value: undefined, done: true }

    const button = document.createElement('button');
    button.innerText = 'Click me'
    element.append(button);

    const genId = idGenerator(2024)

    const renderButton = () => {
        const { value } = genId.next();
        button.innerText = `Click ${value}`;
    }

    button.addEventListener('click', renderButton );

}

function* idGenerator(year = 0){
    let counter = year;
    while(true){
        yield ++counter;
    }
}

function* myFirstGeneratorFunction(){

    // es como un return, se pausa al encontrar un yield
    yield 'primer valor';
    yield 'segundo valor';

    // hasta encontrar return la funcion se detiene
    return 'no hay mas valores';

}