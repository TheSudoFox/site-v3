import Vuex from 'vuex'

export const store = () => {
  return new Vuex.Store({
    state: {
      toggleMenu: false,
      bgcolor: 'landing'
    },  
    mutations: {
      toggleMenu (state) {
        state.toggleMenu = !state.toggleMenu
      },  
      changeBgColor (state, color) {
        state.bgcolor = color
      }   
    }   
  })  
}
