
async function getCarList (url) {
    let res
    await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then((response) => response.json())
    .then(resBody => {
        res = resBody
    })

    return res
}

async function getCarById (url, id) {

    await fetch(url+"/"+id, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    })
}

export default {getCarList, getCarById}