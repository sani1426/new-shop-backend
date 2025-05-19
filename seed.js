
import Movies from './data/movies.js'


import MovieModel from './models/Movie.js'
import ConnectToDb from './config/db.js'




const main = async () => {
  try {
   
    await ConnectToDb()

    await MovieModel.deleteMany()
    const createdMovies = await MovieModel.insertMany(Movies)

    console.log({
      createdMovies,
      message: 'Seeded database successfully',
    })
    process.exit(0)
  } catch (error) {
    console.error(error)
    throw new Error('Failed to seed database')
  }
}

main()