import axios from 'axios'

/**
 * ACTION TYPES
 */
const GET_CATEGORIES = 'GET_CATEGORIES'

/**
 * INITIAL STATE
 */
const defaultCategories = []

/**
 * ACTION CREATORS
 */
const getCategories = categories => ({ type: GET_CATEGORIES, categories })

/**
 * THUNK CREATORS
 */
export const fetchCategories = () => dispatch =>
  axios
    .get('/api/categories/')
    .then(res => dispatch(getCategories(res.data || defaultCategories)))
    .catch(err => console.log(err))

export const addCategory = category => () => {
  axios
    .post('/api/categories', category)
    .then()
    .catch(err => console.log(err))
}

/**
 * REDUCER
 */
export default function(state = defaultCategories, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return action.categories
    default:
      return state
  }
}
