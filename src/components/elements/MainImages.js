import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import '../layout/bootstrap.css'
import '../layout/style.css'
import {Link} from 'react-router-dom'


function MainImages(){
return(
    <div style={{width:'100%'}}>
    <div className="container-main-img" style={{float:'left', background:'#151719'}}>
    <img
    className="has-shadow"
    src={require('./../../assets/images/mainSofa.jpeg')}
    />
    <h2 className="img-header">ДИЗАЙН ИНТЕРЬЕРА</h2>
    <Link to="/design"><button className="btn">ПОСМОТРЕТЬ ПРОЕКТЫ</button></Link>
    </div>
    <div className="container-main-img" style={{float:'right', background:'#151719'}}>
    <img
    className="has-shadow" 
    src={require('./../../assets/images/mainHoney.jpg')} />
    <h2 className="img-header">3D ВИЗУАЛИЗАЦИЯ</h2>
    <Link to="/visualization"><button className="btn">ПОСМОТРЕТЬ ПРОЕКТЫ</button></Link>
    </div>
    </div>
)
}

export default MainImages