import {heroes} from '../data/heroes'
/**
 *
 *
 * @param {HTMLDivElement} element
 */
export const forAwaitComponent = async( element ) => {

    const id = '5d86371f1efebc31def272e2';
    const heroesId = heroes.map( hero => hero.id )

    const heroPromise = getHeroesSync( heroesId );

    for await(const hero of heroPromise){
        element.innerHTML += `
            <div style="float: left; margin: 20px;">
                <p> ${hero.name} </p>
                <img src="${hero.picture}" height="200" />
            </div>`;
    }

    //! el await puede ir dentro de alguna condicional
    // if(await getHeroSync(id)){
    //     const hero = await getHeroSync(id);
    //     element.innerHTML = hero.name;
    //     return;
    // }
    // element.innerHTML = 'no existe';


}

/**
 *
 * @param {Array<String>} array
 * @returns {Array<Promise>}
 */
const getHeroesSync =  ( array ) => {

    const heroPromisesId = [];

    array.forEach( id => {

        heroPromisesId.push( getHeroSync(id));

    })

    return heroPromisesId;
}

const getHeroSync = async(id) => {
    await new Promise( (resolve) => {
        setTimeout( () => resolve(), 1000)
    })
    return heroes.find( hero => hero.id === id )
}
