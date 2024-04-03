import {heroes} from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent = async ( element ) => {

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f9f80b591f499df32';

    try{
        const hero1 = await findHero(id1);
        const hero2 = await findHero(id2);

        element.innerHTML = `${hero1} / ${hero2}`;

    } catch(error){
        element.innerHTML = `<strong style="color:red">${error}</strong>`;
    }

}

const findHero = async id => {
    const { name } = heroes.find( hero => hero.id === id);
    if(!name)
        throw new Error `Hero with ${id} not found!`;
    return name;
}