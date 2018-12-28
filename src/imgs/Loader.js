import React from 'react';
import styled from 'styled-components';

const Loader = () => {

        return (
            <Wrapper>
            <Out></Out>
            <In> </In>
            </Wrapper> 
        )
    
}

export default Loader;

//CSS//

const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    right: 50%;
`
  
 const Out = styled.div`
    border: 0.15rem solid #f3f3f3;
    border-top: 0.15rem solid #3498db;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    position: absolute;
    animation: rotate 0.7s linear infinite;
    transform: translate(-50%, -50%);

    @keyframes rotate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`

const In = styled.div`
`
  
  