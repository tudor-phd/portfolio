
import React from 'react';
import './navigation.css';

export default function Navigation() {
    const smoothScroll = (section) => {
        const position = document.getElementsByClassName(section)[0]
        if(position){
          position.scrollIntoView({
            behavior: 'smooth'
          })
        };
    }
    return (
        <>
            <nav role='navigation' className="navigation">
                <input type="checkbox" id="post" className="postToggle" />
                <label for="post" className="postBtn"></label>
                <ul>
                    {/* <li className="text"></li>
                    <li className="quote"></li> */}
                    <li onClick={()=>smoothScroll('first-section')} className="welcome">🪐</li>
                    <li onClick={()=>smoothScroll('second-section')} className="about">🔬</li>
                    <li onClick={()=>smoothScroll('third-section')} className="work">⚒</li>
                </ul>
            </nav>
            <div className="overlay"></div>
        </>
    )
}