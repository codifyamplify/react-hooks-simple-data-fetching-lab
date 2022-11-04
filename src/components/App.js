// create your App component here
import React, {useEffect, useState} from "react"

function App(){
    // const [isLoaded, setIsLoaded] = useState(false)
    console.log("beginning of app")
    const [dogPic, setDogPic] = useState(null)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                console.log(data.message)
                console.log(data.status)
                setDogPic(data.message)
            })

    }, [])
    if (!dogPic) return <p>Loading...</p>
    return <img alt="A Random Dog" src={dogPic}/>
}

export default App