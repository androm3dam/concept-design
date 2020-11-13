import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { scroller } from 'react-scroll'
import { useRadio } from '../sections/context/RadioContext'


const navStyle = {

    background:'none',
    position:'fixed',
    zIndex:'2000',
    left:'4.5%',
    top:'50%',
    transform:'translate(0%, -50%)'
}



function RadioNav(){
    const radio = useRadio()
    const handleChange = (event) => {
        radio.toggle(event.target.value);
        scrollToElement(event.target.value)
    };

    function scrollToElement(target){
        scroller.scrollTo(target, 
            {
                duration: 1000,
                delay: 100,
                smooth: true
            })
    }

    return(
    <div style={navStyle} className="radio-navigation">
        <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="gender1" value={radio.state} onChange={handleChange}>
            <FormControlLabel value="interior-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="visualization-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="furniture-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="main-text" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="team-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="dignity-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="contacts-block" control={<Radio size="small" color="default"/>}/>
            <FormControlLabel value="callus-block" control={<Radio size="small" color="default"/>}/>
        </RadioGroup>
        </FormControl>  
    </div>)
}

export default RadioNav