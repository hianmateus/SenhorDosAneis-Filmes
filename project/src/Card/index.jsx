/* eslint-disable react/prop-types */

import { Container } from './styles'
import MovieIcon from '../assets/movieicon.svg'
import AwardIcon from '../assets/award.svg'

function Card({ movieData }) {


    return (
        <Container>
            <div className='Boximg'>
                <img src={MovieIcon} alt="movie-icon" />
            </div>
            <div className='Boxdesc'>
                <h3>{movieData.name}</h3>
                <p>{ movieData.runtimeInMinutes} min</p>
                <div className='Award'>
                <img src={AwardIcon} alt="award-icon" /> <p>{movieData.academyAwardWins} Wins & {movieData.academyAwardNominations} Nominations</p>
                </div>

                <div className='Boxval'>
                    <div className='val1'>
                        <h4>Budget</h4>
                        <p>${movieData.budgetInMillions}M</p>
                    </div>
                    <div className='val2'>
                        <h4>Revenue</h4>
                        <p>${movieData.boxOfficeRevenueInMillions}M</p>
                    </div>
                </div>
            </div>

        </Container>
    )
}

export default Card