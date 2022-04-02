import {sanityClient} from "../../sanity";
import {useRecoilState} from "recoil";
import {coinsData} from "../../atoms/Coins";

export default async function fetchData(req, res) {
    const [sanityTokens, setSanityTokens] = useRecoilState(coinsData);

    let headers = new Headers();
            headers.append('Access-Control-Allow-Origin', '*');
            headers.append("Access-Control-Allow-Headers",
                "Origin, X-Requested-With, Content-Type, Accept, Authorization");
            headers.append("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
            headers.append("Content-Type", "application/json");
    const query = `
                    *[_type == "coins"] {
                        name,
                        usdPrice,
                        contractAddress,
                        symbol,
                        logo
                    }
                `;
    const coins = await sanityClient.fetch(query, {
        mode: 'cors',
        credentials: 'include',
        method: 'POST',
        headers: headers
    });
    const tempSanityTokens = await coins.json();
    setSanityTokens(tempSanityTokens.result);
    // console.log("This is it", coins);
}

