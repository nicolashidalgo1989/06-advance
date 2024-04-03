/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitSecuencialComponent = async ( element ) => {

    console.time('Start');

    element.innerHTML = 'loading...'

    try{
        const [value1, value2, value3] = await Promise.all( [slowPromise(), mediumPromise(), fastPromise()]);
        element.innerHTML = `${value1} / ${value2} / ${value3}`;
    } catch(error){
        element.innerHTML = error
    }

    console.timeEnd('Start');

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