//import Vuex from "vuex";

export const state = () => ({
  GA_CODE: process.env.GA_CODE,
  GOOGLE_KEY: process.env.GOOGLE_KEY,
  WEB_ADDRESS: "https://www.princesstreethostel.com/",
  company: {
    name: "Princes Street Hostel",
    address: "5 West Register Street",
    address2: "Edinburgh EH2 2AA - United Kingdom",
    email: "hello@princesstreethostel.com",
    phone: "+44 131 556 6894",
  },
  pageData: {},
  loading: true,
});

export const mutations = {
  SET_INIT(state, payload) {
    state.initiated = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
  SET_PAGE_DATA(state, payload) {
    state.pageData = payload;
  },
  SET_NEXT_LINK(state, payload) {
    state.nextLink = payload;
  },
};

export const actions = {
  setInit({ commit }, payload) {
    commit("SET_INIT", payload);
  },
  setLoading({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
  setPageData({ commit }, payload) {
    commit("SET_PAGE_DATA", payload);
  },
  setNextLink({ commit }, payload) {
    commit("SET_NEXT_LINK", payload);
  },
};
