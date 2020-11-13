import React from 'react'


const styles={
    div:{
        display:'block',
        margin:'10px'
    }
}

function Merit(props){

    return(
        <div style={styles.div}>
            <div style={styles.div}>
                <p className="merit-header">{props.header}</p>
                <p className="merit-text">{props.text}</p>
            </div>
        </div>
    )
}

export default Merit