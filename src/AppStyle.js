import styled from 'styled-components'

export const SkillsParagraph = styled.p`
    
`

export const SkillsParSpan = styled.span`
    display: ${({isClicked}) => !isClicked && 'none'};
`
export const ThreeDots = styled.span`
    display: ${({isClicked}) => isClicked && 'none'};
`

export const VisistSiteBtn = styled.a`
text-decoration: none;
padding: 0.2rem 1.5rem;
margin-top: 1rem;
border: 2px solid crimson;
border-radius: 7px;
color: crimson;
background-color: wheat;
:hover{
    border: 2px solid #222222; 
    color: #222222;
    transform: scale(1.07) translateZ(5px);

}
`