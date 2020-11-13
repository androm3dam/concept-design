import React from 'react'
import Empty from '../elements/Empty'
import styled, { keyframes } from "styled-components";
import BounceIn from "@bit/formidablelabs.react-animations.bounce-in";
const BounceInAnimation = keyframes`${BounceIn}`;
const BounceInDiv = styled.div`
  animation:  1s ${BounceInAnimation};
`;
function Address(){
  const styles ={
    textAlign:'center',
    border:'2px solid #f8f9fa',
    margin:'10px',
    padding:'10px',
    color:'#151719'
  }
  return(
    <>
    <Empty/>
    <BounceInDiv>
      <div className="container" style={{marginTop:'100px',marginBottom:'50px', alignItems:'center'}}>  
        <div className="row"style={{justifyontent:'space-around'}}>
          <div className="col-sm"  style={styles}>
          <h5>РАБОЧЕЕ ВРЕМЯ</h5>
          <h6>10:00-18:00</h6>
          <h6>суббота, воскресенье - выходной</h6>
          </div>
        </div>
      </div></BounceInDiv>
      </>
  )
}

export default Address