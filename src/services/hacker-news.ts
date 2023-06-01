export const getTopStories = async (page: number, limit: number) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json`);
    const data = await response.json();
    // page starts with 1 but array index starts with 0 so we need to subtract 1 from page number to get the correct index nos sirve para hacer una paginacion a mano
    const startIndex = (page - 1) * limit; //sirve para posteriormete hacer el slice del array y obtener los 10 elementos que necesitamos
    const endIndex = page * limit;
    const paginatedIds = data.slice(startIndex, endIndex); //sirve para obtener los 10 elementos ids que necesitamos
    return paginatedIds;
    
    //junior dev tip: use Promise.all to make multiple requests in parallel
    //return await Promise.all(paginatedIds.map((id: number) => getItemInfo(id))); 
}


export const getItemInfo = async (id: number) => {
    const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
    const data = await response.json();
    return data;
}