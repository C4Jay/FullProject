<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex sm12 md6 class="text-center text-sm-right">
        <v-btn color="yellow" large to="/meetups">Explore Meetups</v-btn>
        
      </v-flex>
      <v-flex sm12 md6 class="text-center text-sm-left">
      
        <v-btn color="green" large to="/meetups/new">Organize Meetups</v-btn>
      
      
      </v-flex>
      
      
     
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel style="cursor: pointer;">
          <v-carousel-item 
          v-for="item in meetups"
          v-bind:src="item.img"
          :key="item.title"
          @click="Onmeetup(item.id)">
          <v-row justify="center">
          <div class="title">
            {{ item.title }}
          </div>
          </v-row>
          </v-carousel-item>
        </v-carousel>
        <v-layout class="mt-2" row wrap>
          
          <v-flex xs12 class="text-center">
          <p>Join Our Meetups</p>
          </v-flex>
        </v-layout>
    
      </v-flex>
    </v-layout>


  </v-container>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
  //  HelloWorld
  },

  computed: {
    meetups () {
      return this.$store.getters.f_Meetups

    }
  },

  methods: {
    Onmeetup(id) {
      this.$router.push('/meetups/' + id);

    }

  }
}
</script>

<style scoped>
.title {
  
  position: absolute;
  bottom: 55px;
  color:ghostwhite;
  font-size: 2em;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5)
}
</style>
