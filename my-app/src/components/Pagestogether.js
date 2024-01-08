import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.section`
.PagesLetsBUILD{
  padding-top: 20%;
}
.blue-div{
  background: #4A5AF8;
    width: 100%;
    height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
h2{
  font-size: 27px;
  font-weight: 600;
  color: #ffffff;
}
button{
  width: 166px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 19px;
    color: blue;
}

@media (min-width: 992px) {
  .blue-div{
    background: #4A5AF8;
    width: 100%;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
}
h2{
  font-size: 70px;
  font-weight: 800;
  color: #ffffff;
}
button{
  width: 166px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    color: blue;
}
}


@media (min-width: 1200px) {
  .PagesLetsBUILD{
  padding-top: 6%;
}
  h2{
    padding-top: 7%;
  font-size: 60px;
  font-weight: 800;
  color: #ffffff;
}
button{
  width: 166px;
    height: 50px;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    color: blue;
} 
.btn-div{
padding-bottom: 3%;
}
}
`
function Pagestogether() {
  return (
    <Wrapper>
    <div className='PagesLetsBUILD'>
    <div className='blue-div'>
        <h2>Let’s Build Together.</h2>
        <div className='btn-div'>
        <button> Contact Us</button>
        </div>
    </div>
    </div>
    
        </Wrapper>
  )
}

export default Pagestogether


