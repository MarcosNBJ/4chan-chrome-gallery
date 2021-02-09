import styled from 'styled-components';

export const Responsive = styled.div`
    float: left;
    margin-left: 10px;
    margin-top: 15px;
    @media only screen and (max-width: 700px) {
        width: 49.99999%;
        margin: 6px 0;
    }
    
    @media only screen and (max-width: 500px) {
        width: 100%;
    }
`;

export const Card = styled.img`
    width: 180px;
    height: 150px;
    object-fit: cover;
    object-position: 20% 10%;
`;