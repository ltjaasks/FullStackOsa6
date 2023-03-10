import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {

    const createNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        props.createAnecdote(content)

        props.setNotification(`You created '${content}'`, 5)
      }

      return (
        <div>
            <h2>create new</h2>
            <form onSubmit={createNew}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </div>
        
      )
}

const mapDispatchToProps = {
    createAnecdote,
    setNotification
}

const connectedNewAnecdote = connect(null, mapDispatchToProps)(NewAnecdote)
export default connectedNewAnecdote