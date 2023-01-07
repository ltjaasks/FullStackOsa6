const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      const addGood = {
        ...state,
        good: state.good + 1
      }
      state = addGood
      return state
    case 'OK':
      const addOk = {
        ...state,
        ok: state.ok + 1
      }
      state = addOk
      return state
    case 'BAD':
      const addBad = {
        ...state,
        bad: state.bad + 1
      }
      state = addBad
      return state
    case 'ZERO':
      const resetAll = {
        good: 0,
        ok: 0,
        bad: 0
      }
      state = resetAll
      return state
    default: return state
  }
  
}

export default counterReducer