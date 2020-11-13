import React from 'react'
import black from '../../assets/images/home/logo-black.svg'
import white from '../../assets/images/home/logo-white.svg'
function Logo(props){
    if(props.type == 'white')
    return(<img src={white} className={props.classname} alt="ConceptDesignGroup" style={{zIndex:'100'}}/>)
    return(<img src={black} className={props.classname} alt="ConceptDesignGroup" style={{zIndex:'100'}}/>)
}

export default Logo