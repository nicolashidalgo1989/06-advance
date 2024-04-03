import { heroes } from '../data/heroes'
/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = ( element ) => {

    console.log('promises');

    const renderHero = (hero) => {
        element.innerHTML = hero.name;
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = '';
        element.innerHTML = `${hero1.name} / ${hero2.name}`;
    }

    const renderError = error => {
        element.innerHTML = `
            <strong style="color: red"> ${error} </strong>
        `;
    }

    const id1 = '5d86371f2343e37870b91ef1';
    const id2 = '5d86371f233c9f2425f16916';

    //! Forma 3 Promise.all
    Promise.all( [ findHero(id1), findHero(id2) ] )
        .then( ([hero1, hero2]) => renderTwoHeroes(hero1,  hero2) )
        .catch( renderError )

    //! Forma 2 (promesa en cadena )
    let hero1;
    findHero(id1)
        .then( hero => {
            hero1 = hero;
            return findHero(id2)
        })
        .then( hero2 => {
            renderTwoHeroes(hero1, hero2)
        })
        .catch( renderError )

    //! Forma 1 (promesa simple)
    findHero( id1 )
        // .then( superhero => renderHero(superhero ))
        // .cath( error => renderError(error) )
        .then( renderHero ) // al ser el parametro y argumento iguale sepueden omitir la funcion de flecha
        .catch( renderError )

    //! Promise hell
    findHero( id1 )
        .then( hero1 => {
            findHero(id2)
                .then( hero2 => {
                    renderTwoHeroes(hero1, hero2)
                })
                .catch( renderErrors )
        } )
        .catch( renderError )


}

/**
 *
 * @param {String} id
 * @return {Promise} returna una promesa
 */
const findHero = id => {
    // const hero = heroes.find( hero => hero.id === id )

    // const promise =
    return new Promise( ( resolve, reject ) => {

        const hero = heroes.find( hero => hero.id === id )

        if(hero) {
            resolve(hero);
            return;
        }

        reject( `Hero ${id} not found`); // error


    });

    // return promise;
}