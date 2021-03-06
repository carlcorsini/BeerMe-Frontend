import { CREATE_BEER_SUCCESS } from '../actions/createBeer'

const initialState = { beers: [] }

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_BEER_SUCCESS:
      return {
        beers: [...state.beers, { ...payload }]
      }
    default:
      return state
  }
}
