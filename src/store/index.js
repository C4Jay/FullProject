import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    DoneMeetups: [
      {img: 'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg', id: '1111', title: 'New York', date: '2018-08-18' },
      {img: 'https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/020/Paris_AdobeStock_264549883_1.jpg', id: '2222', title: 'Paris', date: '2018-08-19' },
      //{img: '', id: '', title: '' },
      //{img: '', id: '', title: '' },
      //{img: '', id: '', title: '' },
    ],
    user: {
      id: 'user1',
      registeredMeetups: ['1111']
    }
  },
  mutations: {
    createmeetup (state, pay) {
      state.DoneMeetups.push(pay)
    }
  },
  actions: {
    createmeetup ({ commit }, pay) {
      const meetup = {
        title: pay.title,
        location: pay.location,
        img: pay.img,
        description: pay.description,
        date: pay.date,
        id: ('8888')
        
      }
      commit('createmeetup', meetup)
    }
  },
  modules: {
  },
  getters: {
    DoneMeetups (state) {
      return state.DoneMeetups.sort((meetupA, meetupB)=>{
        return meetupA.date > meetupB.date
      })
    },
    f_Meetups (state, getters) {
      return getters.DoneMeetups.slice(0, 5)
    },
    DoneMeetup (state) {
      return (meetupid) => {
        return state.DoneMeetups.find((meetup) => {
          return meetup.id === meetupid
        })
      }
    }
  }
})
