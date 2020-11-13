import React from 'react'
import Empty from './Empty'



function ProjectHeader(props){
    const styles ={

        h2:{
            marginTop:'4rem',
            textAlign:'center',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            fontWeight:'100',
            color:'#151719'
        },

        p:{
            textAlign:'center',
            fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            color:'#151719',
            marginBottom:'0px'
        }
    }
    return(
        <>
        <Empty/>
        <h2 style={styles.h2}>{props.header}</h2>
        <div className="container">
        <p style={styles.p}>{props.description}</p></div>
        </>
    )
}

export default ProjectHeader