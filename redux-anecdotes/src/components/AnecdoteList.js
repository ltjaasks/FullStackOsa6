import { useSelector, useDispatch } from 'react-redux'
import { voteAndUpdateAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(state => {
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    })
  
    const vote = (id) => {
      console.log('vote', id)
      const voted = anecdotes.find(a => a.id === id)
      dispatch(voteAndUpdateAnecdote(voted))

      dispatch(setNotification(`You voted '${voted.content}'`, 5))
    }

    return (
        anecdotes.map(anecdote =>
            <div key={anecdote.id}>
              <div>
                {anecdote.content}
              </div>
              <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
              </div>
            </div>
          )
    )
}

export default AnecdoteList