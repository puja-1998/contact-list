export const addToFavContact = (key) => {
    return(dispatch)=>{
        fetch(`https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/contact-list/${key}.json`)
        .then(res => res.json())
        .then(data => {
            fetch("https://contact-list-31423-default-rtdb.asia-southeast1.firebasedatabase.app/fav-contact-list.json",
            {
                method: "POST",
                headers: {
                    "content-type": "application/json"

                },
                body: JSON.stringify(data)
            })
        })
        .catch(error => console.log(error))
    }
} 