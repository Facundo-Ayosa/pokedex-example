import axios from "axios";


export async function pokeFetcher(limit = 20, offset = 0) {
    let arr = new Array(limit);
    for (let i = 0; i < limit; i++) {
        arr[i] = offset + i + 1;
    }
    let response = [];
    await Promise.all(
        arr.map((id) => {
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then((result) => {
                    response.push(result.data);
                });
        })
    );
    console.log(response)
    return response;
}