import React from 'react';
import styled from 'styled-components';
const Wrapper  = styled.section`
.BecomingAmentor{
    padding-top:15%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorDiv{
    background: white;
    padding-top:10%;
    padding-bottom: 14%;
 
}
.images-div{
position: relative;
}
.colorBlue{
    display: none;
    z-index: 1;
}
img{
    border-radius: 5%;
    width: 70%;
    display: flex;
    margin: 0 auto;
    z-index: 2;
}
.img-2{
    width: 32%;
    position: absolute;
    z-index: 3;
    left: 251px;
    top: 176px;
}
h4{
    padding: 0 40px;
    line-height: 30px;
    padding-top:19%;
    text-align:center;
    padding-bottom: 4%;
}

p{
    text-align: center;
    font-size: 20px;
    line-height: 1.3;
    font-weight: 300;
    padding: 0 62px;
}
@media (min-width:768px) {
  .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 90%;
    margin: 0 auto;
    border-radius: 2%;
} 
img {
  border-radius: 5%;
    width: 213px;
    display: flex;
    margin: 0;
    position: relative;
    margin-left: 18px;
    z-index: 2;
    left: 15px;
}
.img-2 {
  width: 52%;
    position: absolute;
    z-index: 3;
    top: 112px;
    left: 104px;
}
.BecomingAmentor {
    padding-top: 8%;
    padding-bottom: 15%;
    background: #F2F3FE;
}
.colorBlue{
  border-radius: 3%;
    display: block;
    width: 131px;
    height: 170px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -13px;
    left: 17px;
}
.img-text-combo{
  display: flex;
    margin-left: 46px;
}

 h4 {
    padding: 0px 28px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 19px;
    font-weight: bold;
    margin-left: 37px;
}

p {
  text-align: left;
    font-size: 19px;
    line-height: 1.5;
    font-weight: 300;
    padding: 0 45px;
    margin-left: 25px;
}
}
@media (min-width: 992px) {
 .colorDiv {
    background: white;
    padding-top: 8%;
    padding-bottom: 5%;
    display: flex;
    width: 79%;
    margin: 0 auto;
    border-radius: 2%;
}
 .BecomingAmentor {
    padding-top: 4.5%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
}
.img-text-combo{
  display: flex;
    margin: 0 18px;
}
 img {
  border-radius: 5%;
    width: 244%;
    display: flex;
    margin: 0;
    height: 230px;
    position: relative;
    margin-left: 18px;
    z-index: 2;
    object-fit: cover;
    left: 78px;
}
h4 {
  padding: 0 19px;
    line-height: 40px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 23px;
    font-weight: bold;
    margin-left: 205px;
}
 p {
    text-align: left;
    font-size: 20px;
    line-height: 1.5;
    font-weight: 300;
    padding: 0px 53px;
    margin-left: 77px;
}
 .colorBlue {
  border-radius: 3%;
    display: block;
    width: 159px;
    height: 223px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -23px;
    left: 76px;
}
 .img-2 {
  width: 122%;
    position: absolute;
    z-index: 3;
    height: 81px;
    top: 161px;
    left: 179px;
    object-fit: cover;
}
 /* h4 {
    padding: 0 19px;
    line-height: 30px;
    padding-top: 0;
    text-align: left;
    padding-bottom: 2%;
    font-size: 21px;
    font-weight: bold;
    margin-left: 141px;
} */
 p {
  line-height: 1.5;
    padding: 0px 53px;
    margin-left: 164px;
}
}
@media (min-width: 1200px) {
    .BecomingAmentor {
    padding-top: 4%;
    padding-bottom: 4.5%;
    background: #F2F3FE;
} 
.colorDiv {
    background: white;
    padding-top: 4%;
    padding-bottom: 4%;
    display: flex;
    width: 80%;
    margin: 0 auto;
    border-radius: 2%;
}
.img-text-combo{
    display: flex;
    margin: 0 100px;
}
img {
  margin-top: 4%;
    border-radius: 3%;
    width: 196%;
    display: flex;
   
    height: 200px;
    position: relative;
    margin-left: 35px;
    z-index: 2;
    object-fit: cover;
    left: -13px;
}
.colorBlue {
    border-radius: 3%;
    display: block;
    width: 180px;
    height: 205px;
    background: blue;
    position: absolute;
    z-index: 1;
    top: -18px;
    left: 7px;
}
.img-2 {
    width: 100%;
    position: absolute;
    z-index: 3;
    height: 95px;
    top: 120px;
    left: 110px;
    object-fit: cover;
    border-radius:20px;
}
 h4 {
    font-size: 22px;
padding-right:90px;
font-weight: 700;

line-height: 32.784px;

 color: rgb(0, 0, 0);
 margin-left: 180px;
}
p {
    font-size: 21px;
   line-height: 1.5;
    padding: 0px 53px;
    margin-left: 150px;
}
.images-div{
  margin-top: 2%;
}
}
 


`;

function Ned() {
    return (
  <Wrapper>
   <div class="BecomingAmentor">
    <div class="colorDiv">
<div className='img-text-combo'>
        <div class="images-div">
            <div class="colorBlue"></div>
            <img className='img-2' src='https://uncommon.org/wp-content/uploads/2021/10/dr-sibongile-moyo.jpg'/>
            <img src='https://uncommon.org/wp-content/uploads/2021/10/dr-sibongile-moyo.jpg'/>
        </div>
        <div class="BecomingAmentor-text-div">
            <h4>When we first learned about Uncommon, we knew this was a mission we had to support. Not only are we happy to invest in education, we’re eager to begin hiring graduates from our Hub</h4>
            <p>– Sibongile Moyo, Managing Director, Nedbank Zimbabwe</p>
        </div>
        </div>
    </div>
</div>

    </Wrapper>
  )
}

export default Ned