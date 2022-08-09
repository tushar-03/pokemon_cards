import React, { useEffect, useState } from 'react'
import './card.css'


function Card(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);




    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/" + props.name + "/")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    const imgLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + items.id + ".png";

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>

                <div className=' align-middle hover:bg-violet-600  hover:text-white  box-border border-black h-32 w-32 p-4 border-4  box-content h-60 w-50  bg-yellow-300 shadow-lg mt-40 ml-40 '>
                    <h1 className='card_name italic font-semibold text-lg font-mono '>{items.name}</h1>
                    <span className=''>Bp:  {items.base_experience}</span>

                    <div className='mt-20 ml-5'>
                        <img src={imgLink} alt='' />

                    </div>
                </div>
            </div>)
    }
}
export default Card
