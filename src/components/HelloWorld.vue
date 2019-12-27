<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn color="yellow" large to="/meetups">Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center" >
        <v-btn color="green" large to="/meetups/new">Organize Meetups</v-btn>
      </v-flex>
      
      
     
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'HelloWorld',

  
};
</script>
