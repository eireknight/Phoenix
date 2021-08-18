import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100%;
  max-width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: "K2D", sans-serif;
  font-size: 22px;
  font-style: italic;
  background: linear-gradient(90deg, lightgreen, lightblue);
  width: 1250px;
    margin: 20px auto;
    padding: 5px 15px;
    font-weight: 550;
    font-size: 22px;
    background: linear-gradient(35deg, #ccffff, #ffcccc);
    text-align: center;
    border-radius: 20px;
    box-shadow: 0px 0px 2px 1px gray;
`;

function Splash() {
    return (
       <Wrapper className="container">
       <div>
       <p>Most Popular Crypto Coins</p>
       <p>ethereum
        (usd: 3064.77)
<br></br>
        monero
       (usd: 257.3)
<br></br>
        ripple
        (usd: 1.16)
<br></br>
        dash
        (usd: 206.72)
<br></br>
        litecoin
        (usd: 171.46)
<br></br>
        bitcoin
        (usd: 45488)
<br></br>
        zcash
        (usd: 142)
        </p>
       </div>
       </Wrapper>
    );
};
export default Splash;