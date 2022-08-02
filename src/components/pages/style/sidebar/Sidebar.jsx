import React from 'react';
import getItem from './menuItem';
// import { NavLink }  from 'react-router-dom';
// import { HashLink as NavLink } from 'react-router-hash-link';
import { Link } from 'react-scroll';

export default class Sidebar extends React.Component{
    constructor(props){
        super()
        this.state = {
            menu: getItem()
        }
    }


    render() {
        return <div className='container'>
         <div className='sidebar'>
            <div className='top_section'>
                <img src='Rahel.png' alt='Avatar'></img>
                <div className='bars'>

                </div>
                {
                    this.state.menu.map((item, index) => (
                        <Link spy={true} smooth={true} offset={50} duration={500} to = {item.path} key={index} className="link" activeclassname='active'>
                            <div className='link_text'>{item.name}</div>

                        </Link>
                         
                        
                    ))
                }
            </div>
         </div> 
         <main>{this.props.children}</main>
        </div>
    }
}