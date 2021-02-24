import styled, {css} from 'styled-components';
import ScrollContainer from "react-indiana-drag-scroll";

export const MediaContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 80%;
    max-width: 100%;
    margin: auto;
`;

export const ScrollThumbails = styled(ScrollContainer)`
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    position: fixed;
    bottom: 0;
    left: 0;
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Thumbnail = styled.img`
    object-fit: contain;
    width: 100%;
    max-height: 100px;
    padding: 10px;
    transition: transform 450ms;
    &:hover {
        transform: scale(1.08);
    }
`;

export const Video = styled.video`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 90%;
    max-width: 100%;
    margin: auto;
`;

export const Image = styled.img`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    max-height: 90%;
    max-width: 100%;
    margin: auto;
    ${props => props.Fade && css`
        visibility: hidden;
        opacity: 0;
        transition: visibility 0s 1s, opacity 1s linear;
  `}
`;