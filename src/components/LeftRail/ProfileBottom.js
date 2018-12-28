import React, { Component } from 'react';
import styled from 'styled-components';
import icon from '../../imgs/leftrail_profile_premium_icon.png'

class ProfileBottom extends Component {

    render() {
        return (
            
            <Bottom>
                <Link href="#">
                <FirstLine>Access exclusive tools & insights</FirstLine>
                <SecoundLine><img src={icon} alt=""/> Try Premium Free for 1 Month</SecoundLine>
                </Link>
            </Bottom>
        )
    }
}

export default ProfileBottom;

//CSS//

const Bottom = styled.div`
height: 5.2rem;
width: 21.6rem;
`

const FirstLine = styled.div`
font-size: 1.2rem;
font-weight: 400;
color: rgba(0,0,0,.6);
`
const SecoundLine = styled(FirstLine)`
color: rgba(0,0,0,.9);
font-weight: 600;

& img {
    width: 0.9rem;
    height: 0.9rem;
    margin-right: 0.3rem;
}
`

const Link = styled.a`
height: 5.2rem;
width: 21.6rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-decoration: none;

&:hover ${SecoundLine}{
color: #665ed0;
}
`