
export default async function getAllPosts() {

   const data = await fetch ('https://api.lyrics.ovh/suggest/e')

return data.json();
}
