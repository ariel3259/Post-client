
/**
 * 
 * @param {number} personId
 * @return {object} 
 */
export default async function getPeople(personId){

    const response = await fetch(`https://reqres.in/api/users/${personId}`);

    const { data } = await response.json();

    return data;

}