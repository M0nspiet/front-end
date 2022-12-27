export function postFetch(endpoint,bodyObj){
    return fetch(endpoint, {
        method: "POST",
        headers:{
            "Content-Type": "applicatoin/json",
        },
        body:JSON.stringify(bodyObj),
    }).then(
        res => {
            return res.json(); 
        },)  
        .then(res => {
            if (res.success) {
                return res;
            }
            throw Error(JSON.stringify(res));
        })
}