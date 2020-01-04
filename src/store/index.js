import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase';

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
    user: null,
    progressing: false,
    error: null
  },
  mutations: {
    meetupsset (state, pay) {
      state.DoneMeetups = pay
    },
    createmeetup (state, pay) {
      state.DoneMeetups.push(pay)
    },
    setUser (state, pay) {
      state.user = pay
    },
    setProgressing (state, pay) {
      state.progressing = pay
    },
    setError (state, pay) {
      state.error = pay
    },
    clearError (state) {
      state.error = null
    }
  },



  actions: {
    meetupsfetch ({commit}) {
      firebase.database().ref('meetups').once('value')
      .then((data) => {
        const meetups = []
        const obj = data.val()
        for(let key in obj) {
          meetups.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            img: obj[key].img,
            date: obj[key].date
          })
        }
        commit('meetupsset',meetups)

      })
      .catch(
        (error) => {
          console.log(error)
        }
      )

    },
    createmeetup ({ commit }, pay) {
      const meetup = {
        title: pay.title,
        location: pay.location,
        img: pay.img,
        description: pay.description,
        date: pay.date.toISOString()
      }
      firebase.database().ref('meetups').push(meetup)
      .then((data) => {
        const key = data.key
        //go fire to create the meetup
        commit('createmeetup', {
          ...meetup,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
      
    
    },


    signUserup ({commit}, pay) {

      commit('setProgressing', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(pay.email,pay.password)
      .then(
        
        user => {
          commit('setProgressing', false)
          const newUser = {
            id: user.user.uid,
            registeredMeetups: []
          }


     
          commit ('setUser', newUser)
        }
      )
      .catch (
        error => {
          commit('setProgressing', false)
          commit('setError', true)
          console.log(error)
        }
      )

    },
    signUserin ({commit}, pay) {
      commit('setProgressing', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(pay.email, pay.password)
      .then(
        user => {
          const newUser = {
            id: user.user.uid,
            registeredMeetups: []
          }
          commit('setUser', newUser)
        }
      )
      .catch(
        error => {
        commit('setProgressing', false)
        commit('setError', error)
        console.log(error)
        }

        )
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
    },
    user (state) {
      return state.user
    }
  }
})
