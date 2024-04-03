/**
 *
 * @param {HTMLDivElement} element
 */
export const environmentsComponent = ( element ) => {

    console.log(import.meta.env); // es como el process.env pero en vite

    const html = `
        <dl>
            <dt> DEV: </dt>
            <dd>${import.meta.env.DEV} </dd>
            <dt> PROD: </dt>
            <dd>${import.meta.env.PROD} </dd>
            <dt> KEY: </dt>
            <dd>${import.meta.env.VITE_API_KEY} </dd>
            <dt> URL: </dt>
            <dd>${import.meta.env.BASE_URL} </dd>
        </dl>
    `;

    element.innerHTML = html;

}