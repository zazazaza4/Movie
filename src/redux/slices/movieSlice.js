import { 
  createSlice,
  createEntityAdapter,
  createAsyncThunk
} from '@reduxjs/toolkit';
import useMoviesService from '../services/useMoviesService.js';

const moviesAdapter = createEntityAdapter();
const initialState = moviesAdapter.getInitialState({
  movieStatus: 'idle'
});

const fetchById = createAsyncThunk(
  'users/fetchByIdStatus',
  async (id) => {
      const {getMovieById} = useMoviesService();
      return getMovieById(id)
  }
)

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
   extraReducers: (builder) => {
    builder
      .addCase(fetchById.panding, (state) => {
        state.movieStatus = 'loading'
      })
      .addCase(fetchById.fulfilled, (state, action) => {
        state.entities.setOne(action.payload);
      })
  }
})
