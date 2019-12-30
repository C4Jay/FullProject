<template>
   <span>
        <v-navigation-drawer app v-model="Hamburg" class="brown lighten-2" dark disable-resize-watcher="">
            <v-list>    
              <v-list-tile 
              v-for="item in Items" 
              :key="item.title">
                  <v-list-tile-action>
                    
                  </v-list-tile-action>

                        <v-list-tile-content>
                          <v-btn 
                          text width="200" 
                          :to="item.to">
                            {{item.title}}
                          </v-btn>
                        </v-list-tile-content>
                    </v-list-tile>
                
            </v-list>
        </v-navigation-drawer>
        <v-toolbar color="white">   
           
            <v-app-bar-nav-icon class="hidden-md-and-up" @click="Hamburg = !Hamburg"></v-app-bar-nav-icon>
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-btn flat color="white" to="/">
            
                <v-toolbar-title data-cy="titleBtn">MeetUps</v-toolbar-title>
            </v-btn>
       <!--     <v-btn flat class="hidden-sm-and-down nav-menu" to="/menu" data-cy="menuBtn">Menu</v-btn>  -->
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            
            <v-toolbar-items class="hidden-xs-only">
                <v-btn 
                flat 
                v-for="item in Items" 
                :key="item.title" 
                :to="item.to">
                {{item.title}}
                </v-btn> 
            </v-toolbar-items>
        </v-toolbar>
   
   </span>
</template>

<script>
//import ViewMeetups from '@/components/ViewMeetups';
import 'vue-material-design-icons/styles.css';
export default {

  name: 'AppNav',
  data() {
    return {
      Hamburg: false,
    
    }
  },

  computed: {
    Items () {
      let Items = [
        {icon:'mdi-face' ,title:'Sign Up' , to: '/signup'},        
        {icon:'mdi-account' ,title:'Sign In' , to: '/signin' },

      ]
      if (this.userIsauthenticated ) {
        Items = [          
        {icon:'mdi-anchor' , title:'View MeetUps' , to: '/meetups' },        
        {icon:'mdi-room' ,title:'Organize MeetUp' , to: '/meetups/new' },        
        {icon:'mdi-person' ,title:'Profile' , to: '/profile'},        
      
        ]
      }
      return Items
    },
    userIsauthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }

  },





  components: {
  //  ViewMeetups
  }
};
</script>
