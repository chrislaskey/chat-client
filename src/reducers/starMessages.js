import { omit } from 'lodash'

const initialState = {

}

const starMessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'STAR_MESSAGE':
      return {...state, [action.messageId]: true}
    case 'UNSTAR_MESSAGE':
      return omit(state, action.messageId)
    case 'REPLACE_STAR_MESSAGES':
      return action.starredMessages.map((item) => (
        {[item['message_id']]: true}
      ))
  default:
      return state
  }
}

export const isStarred = (state, messageId) =>{
  return state.starMessages[messageId] === true || state.starMessages[0][messageId] === true
}

export default starMessagesReducer
