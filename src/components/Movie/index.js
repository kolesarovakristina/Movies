import React from 'react';
import {Wrapper, Year, Title, Description} from './styles';


const Movie = ({src, title, year, description}) => (
    <Wrapper>
        <Title>{title}</Title>
        <Year>{year}</Year>
        <Description>{description}</Description>
    </Wrapper>
)

export default Movie;