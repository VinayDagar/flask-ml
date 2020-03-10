import React, { useState } from 'react'
import FormLayout from 'layout/form-layout';
import DefaultLayout from 'layout/default-layout';
import FormFieldInput from 'components/form-field-input';

export default function MovieRecommendation(props) {

    const [movie, setMovie] = useState('')
    const [recommendedMovies, setRecommendedMovies] = useState([])

    const getData = async () => {
        try {
            setRecommendedMovies([])
            const { data } = await window.$http.rawPost('recommended-movie', { movie })

            setRecommendedMovies(data.movies)

        } catch (err) {
            console.log(err)
            window.$utility.showErrorMessage(err.message)
        }
    };

    let movies;
    if (recommendedMovies && recommendedMovies.length) {
        movies = recommendedMovies.map(movie => (
            <div className="row justify-content-center my-4">
                <div className="col-sm-6">
                    <div className="container  text-center">
                        <div className="card" key={movie.title}>
                            <div className="card-body">
                                <h4 className="card-header"> {movie.title} </h4>
                                <div className="inline-block">
                                    <div className="card-title"> Director: {movie.director} </div>
                                    <div className="card-text"> Genres: {movie.genres} </div>
                                </div>
                                <div className="card-footer">
                                    <div className="inline-block">
                                        <span className="font-weight-bold"> Vote Count </span>
                                        <span className="font-weight-light"> {movie.vote_count} </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    } else {
        movies = (
            <div className="container text-center">
                <div className="text-muted test-uppercase"> No Recommended movies yet! </div>
            </div>
        )
    }

    return (
        <DefaultLayout>
            <FormLayout label="Which movie You have watched">
                <form onSubmit={e => { e.preventDefault(); getData() }}>
                    <div className="form-group has-feedback">
                        <FormFieldInput
                            value={movie}
                            handleChange={(e) => { e.persist(); setMovie(e.target.value) }}
                            attribute="Movie"
                            inputType="text"
                            placeholder="Watched Movie"
                            required={true}
                        />
                    </div>
                    <div className="col-xs-4 m-t-1">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Get Recommendations</button>
                    </div>
                </form>
            </FormLayout>

            <div className="card">
                <div className="card-body border">
                    {movies}
                </div>
            </div>
        </DefaultLayout>
    )
}
