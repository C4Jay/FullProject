import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import ViewMeetups from '@/components/ViewMeetups'
import Organize from '@/components/Organize'
import Profile from '@/components/Profile'
import SignUp from '@/components/SignUp'
import SignIn from '@/components/SignIn'
import MeetUp from '@/components/MeetUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'ViewMeetups',
      component: ViewMeetups
    },
    {
      path: '/meetups/new',
      name: 'Organize',
      component: Organize
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: MeetUp
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    }
  ],
  mode: 'history'
})