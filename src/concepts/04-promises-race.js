/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesRaceComponent = ( element ) => {
    element.innerHTML = 'loading...'

    const renderValue = value => element.innerHTML = value;

    // retorna la primera en cargar
    Promise.race( [slowPromise(), mediumPromise(), fastPromise()])
        .then( value => {
            renderValue(value);
        })
        .catch( 'error' )

}

const slowPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('slow promise')
    }, 2000)
})

const mediumPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('medium promise')
    }, 1000)
})

const fastPromise = () => new Promise( resolve => {
    setTimeout( () => {
        resolve('fast promise')
    }, 200)
})