import { useEffect, useRef, useState } from "react"
import api from '../../services/api'
import ConvIcon from '../../assets/convincely.svg'
import { General, Header, Container, Box1, Box2, ContainerItems } from './styles'
import Card from "../../Card"

function Home() {
    const input = useRef()
    const [movies, setMovies] = useState()
    const [fiteredMovies, setFiteredMovies] = useState()
    const [aveValue, setAveValue] = useState({
        runtime: 0,
        budget: 0
    })

    useEffect(() => {
        if (movies && movies.length > 0) {
            aveMovies(movies)
        }
    }, [movies])

    function aveMovies(movies) {
        const runtime =
            movies.reduce((acc, cur) => cur.runtimeInMinutes + acc, 0) / movies.length

        const budget =
            movies.reduce((acc, cur) => cur.budgetInMillions + acc, 0) / movies.length

        setAveValue({
            runtime,
            budget
        })

    }


    useEffect(() => {

        async function loadData() {
            const { data: { docs } } = await api.get('/movie')

            setMovies(docs)
            setFiteredMovies(docs)
            console.log(docs)
        }

        loadData()

    }, [])

    function FindMovie() {
        const newMovies = movies.filter(movie => movie.name.toLowerCase().includes(input.current.value.toLowerCase()))

        aveMovies(newMovies)
        setFiteredMovies(newMovies)
    }

    return (
        <>
            <General>

                <Header movies={movies} setFiteredMovies={setFiteredMovies}>
                    <img src={ConvIcon} alt="" />
                    <p>Senior Frontend Test</p>
                </Header>

                <Container>
                    <Box1>
                        <h1>Lord of the Rings Movies</h1>
                        <p>Ave. movie runtime: {aveValue.runtime} min</p>
                        <p>Ave. movie budget: ${aveValue.budget}M</p>
                    </Box1>

                    <Box2>
                        <input placeholder="Finter movies by name" type="text" ref={input} onChange={FindMovie} />

                    </Box2>
                </Container>

                <ContainerItems>

                    {fiteredMovies && fiteredMovies.map(movie => (
                        <Card movieData={movie} key={movie._id} />
                    ))}

                </ContainerItems>

            </General>


        </>
    )
}

export default Home