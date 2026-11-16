import { createStore } from 'vuex';

export default createStore({
  state: { newsletterEmail: '' },
  mutations: {
    saveNewsletterInterest(state, email) {
      state.newsletterEmail = email;
      try { localStorage.setItem('wellbeing-newsletter-interest', email); } catch { /* Storage may be disabled. */ }
    },
  },
});
