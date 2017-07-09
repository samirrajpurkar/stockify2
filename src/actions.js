
export const SET_INVESTMENTS = 'SET_INVESTMENTS'

export function setInvestments(investments) {
  return {
    type: SET_INVESTMENTS,
    investments,
  }
}

export default function getInvestments() {
  return (dispatch) => {
    fetch('http://localhost:8080/api/investments')
      .then(res => res.json())
      .then(data => dispatch(setInvestments(data.investments)))
  }
}
