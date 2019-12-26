<template>
  <v-app dark>
    
    <v-toolbar dark fixed app>
      <v-app-bar-nav-icon @click="Hamburg = !Hamburg"></v-app-bar-nav-icon>
        <v-toolbar-title>MeetUps</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn>MeetUps </v-btn>
          <v-btn>SignIn</v-btn>
           <v-btn>Join</v-btn>
       
        </v-toolbar-items>
        
      </v-toolbar>
<v-navigation-drawer color="purple" v-model="Hamburg">
      <v-list>
        <v-list-tile>
          <v-list-tile-action>
          </v-list-tile-action>
            <v-list-tile-content>View Meetups</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
<main>


   </main>
  </v-app>
</template>

<script>

import 'vue-material-design-icons/styles.css';
export default {

  name: 'App',
  data() {
    return {
      Hamburg: false
    }
  },
  components: {
 
  }
};
</script>
