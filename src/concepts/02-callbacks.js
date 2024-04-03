import { heroes } from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = ( element ) => {

    console.log('callbacks');
    const id = '5d86371f25a058e5b1c8a65e';
    findHero(id, (error, superhero) => {
        // element.innerHTML = superhero?.name || 'No exist el heroe';
        if(error) {
            element.innerHTML = error;
            return;
        }
        element.innerHTML = superhero.name;
    });

}

/**
 *
 * @param {String} id
 * @param { (error: String|null, hero: Object) => void} callback
 */
const findHero = (id, callback) => {

    const hero = heroes.find( hero => hero.id === id);

    if(!hero){
        callback(`Hero ${id} is not found`)
        return;
    }

    callback( null, hero );

}