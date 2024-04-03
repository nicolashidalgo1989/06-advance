import {heroes} from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = ( element ) => {

    console.log('inicio de componente');

    const html = (name, picture) => element.innerHTML = `
        <h3>${name}</h3>
        <img src="${picture}" alt="${name}" style="height: 200px; border-radius: 20px;">
    `;

    const id1 = '5d86371f9f80b591f499df32';

    // const { name, picture } = findHero('5d86371f9f80b591f499df32');
    element.innerHTML = html;

    findHero(id1)
        // .then( console.log )
        .then( ({ name, picture }) => html(name, picture) )
        .catch( error => html(error) )


    console.log('fin de componente');

}

//! async transforma la funcion en una promesa
const findHero = async id => heroes.find( hero => {
    const heroe = hero.id === id;
    if(!hero)
        throw `Hero with ${id} not found`;
    return heroe;
})