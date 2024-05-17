import './style.css'
import React from 'react';
import ReactAnime from 'react-animejs'
const { Anime, stagger } = ReactAnime


export default App => {

    return (
        <div className="App">
            <div className='center'>
                <Anime
                    initial={[
                        {
                            targets: [".animated"],
                            translateY: 50,
                            easing: "linear"
                        }
                    ]}

                >
                    <h1 className='animated'>FRANK HUI</h1>
                    <h1 className='animated'>FRANK HUI</h1>
                    <h1 className='animated'>FRANK HUI</h1>
                </Anime>

            </div>
        </div>
    )

}