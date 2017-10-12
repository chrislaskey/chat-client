import { omit } from 'lodash'

const initialState = {}

export const channelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANNEL_JOIN':
      return {
        ...state,
        [action.key]: action.channel
      }
    case 'CHANNEL_LEAVE':
      return omit(state, action.key)
    case 'SOCKET_CLOSE':
      return initialState
    default:
      return state
  }
}

export const getChannels = (state) => state.channels || {}
export const getChannel = (state, key) => getChannels(state)[key] || {}

export default channelsReducer
