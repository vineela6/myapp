import React from 'react'

const Map = ({ movies }) => {
    console.log(movies);
    return (
        <div>
            <div class="row">
                {movies.map((movies) => (
                    <>
                        <div class=" col-4">
                            <div class="card ml-4 mt-5" style={{ width: '20rem' }}>
                                <img src={movies.Poster} width="50" height="250" class="card-img-top" alt="..." />
                                <div class="card-body bg-warning">
                                    <h5 class="card-title">{movies.Title}</h5>
                                    <p class="card-title">Year:{movies.Year}</p>
                                    <p class="card-title">Type:{movies.Type}</p>
                                    <i class='fas fa-comment'>Comments</i><br />
                                    <kbd class="p-2 float-right">Add to Fav</kbd>
                                </div>


                            </div><br />
                        </div></>

                ))}
            </div>
        </div>
    )
}

export default Map
