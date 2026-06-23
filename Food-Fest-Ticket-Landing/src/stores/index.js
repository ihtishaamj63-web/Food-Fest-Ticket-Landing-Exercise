import { createStore } from "vuex";
import { tickets } from "../data/tickets.js";

const store = createStore({
  state: {
    tickets: tickets,
    favorites: [],
  },

  mutations: {
    TOGGLE_FAVORITE(state, ticketId) {
      const index = state.favorites.indexOf(ticketId);
      if (index === -1) {
        state.favorites.push(ticketId);
      } else {
        state.favorites.splice(index, 1);
      }
    },
  },

  actions: {
    toggleFavorite({ commit }, ticketId) {
      commit("TOGGLE_FAVORITE", ticketId);
    },
  },

  getters: {
    getTickets: (state) => state.tickets,
    isFavorite: (state) => (ticketId) => {
      return state.favorites.includes(ticketId);
    },
    featuredTicket: (state) => {
      return state.tickets.find((ticket) => ticket.isFeatured);
    },
    ticketCount: (state) => {
      return state.tickets.length;
    },
  },
});

export default store;
