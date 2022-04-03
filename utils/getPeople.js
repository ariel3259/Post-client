
/**
 * 
 * @param {number} pagination 
 * @return {Array<object>}
 */
export default async function getPeople(pagination){

    const response = await fetch(`https://reqres.in/api/users?page=${pagination}`);

    const { data } = await response.json();

    return data;
}