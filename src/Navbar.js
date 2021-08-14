import React,{useEffect,useState} from 'react';
import './Navbar.css';

function Navbar() {
    const [show,handleShow]=useState(false)


    useEffect(()=> {
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 150){
                handleShow(true);
            } else handleShow(false);
        });
        return ()=>{
            window.removeEventListener('Scroll');
        };
    },[]);

    
    return (
        <div className={`navbar ${show && 'navbar_black'}`}>
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Netflix Logo"/>
            <img className='avatar' src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg" alt=""/>    
        </div>
    )
}

export default Navbar
