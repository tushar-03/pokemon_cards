import React, { createContext } from 'react'
import { Link } from 'react-router-dom';
import Card from './Card';



const Name = createContext();

function Home(props) {


    function handleChange(e) {

        const value = e.target.value;
        props.updateName(value);
    }

    return (
        <div>

            <img className='object-scale-down h-60 w-110 mt-20 ml-80' src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png'></img>

            <span className=' mt-40 font-mono'>Enter the Pokemon Name</span>
            <form >
                <input id='pokemon' onChange={e => handleChange(e)} name='pokemon' value={props.name} className='bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded' type='text' />

                <Link to='/Card'>
                    <button className='  bg-transparent hover:bg-black text-black font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded' type='submit'> Show Card </button>
                </Link> </form>


        </div>
    )
}


export default Home
export { Name }
