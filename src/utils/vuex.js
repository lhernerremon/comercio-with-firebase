export const set = property => (state, payload) => (state[property] = payload)
export const removeItem = property => (state, payload) => (state[property] = state[property].filter(item => item !== payload))
export const addItem = property => (state, payload) => (state[property].push(payload))
