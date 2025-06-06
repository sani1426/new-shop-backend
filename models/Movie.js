import { Schema, model } from 'mongoose'

const movieSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ['movie', 'tv'],
    },
    genres: {
      type: [String],
      required: true,
    },
    year: {
      type: String,
    },
    backdrop: {
      type: String,
    },
    movieImages: {
      type: [String],
      required: true,
    },
    rating: {
      type: Number,
      default: 0,
    },
    season: {
      type: Number,
    },
    episode: { type: Number },
    duration: {
      type: Number,
      default: 0,
    },
    language: {
      type: String,
      defaut: 'English',
    },
    ageGroup: {
      type: String,
    },
    Release: {
      type: String,
    },
    director: {
      type: String,
      required: true,
      trim: true,
    },
    Stars: {
      type: [String],
    },
    likes: {
      type: Number,

      default: 0,
    },
    disLikes: {
      type: Number,

      default: 0,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const MovieModel = model('Movie', movieSchema)

export default MovieModel
