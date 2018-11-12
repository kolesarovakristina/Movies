import React from 'react';
import Movie from '../../components/Movie';
import {Wrapper} from './styles'

class HomePage extends React.Component {
    state = {
        movieData: [
            {id: 1, title: "The Nun", year: "2018", description:"A priest with a haunted past and a novice on the threshold of her final vows are sent by the Vatican to investigate the death of a young nun in Romania and confront a malevolent force in the form of a demonic nun."},
            {id: 2, title: "The Equalizer", year: "2016", description:"Robert McCall serves an unflinching justice for the exploited and oppressed, but how far will he go when that is someone he loves?"},
            {id: 3, title: "I feel pretty", year: "2014", description:"A woman struggling with insecurity wakes from a fall believing she is the most beautiful and capable woman on the planet. Her new confidence empowers her to live fearlessly, but what happens when she realizes her appearance never changed?"},
            {id: 4, title: "Pain and gain", year: "2015", description:"A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong."}
    ]
    };

    render(){
        return(
            <Wrapper>
            {this.state.movieData.map(item => (       
                <Movie
                    id={item.id}
                    title={item.title}
                    year={item.year}
                    description={item.description}
                    key={item.id}
                    />
                    ))}
            </Wrapper>
        );
    }
}

export default HomePage;