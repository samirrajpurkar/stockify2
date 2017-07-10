import { SET_INVESTMENTS } from './actions'

export default function investments(state = [], action = {}) {
  switch (action.type) {
    case SET_INVESTMENTS:
      return action.investments
    default:
      return state
  }
}
