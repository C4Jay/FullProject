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
          v-for="item in items"
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
data() {
    return {
      items: [
        {img: 'https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg', id: '1111', title: 'New York' },
        {img: 'https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/020/Paris_AdobeStock_264549883_1.jpg', id: '2222', title: 'Paris' },
        //{img: '', id: '', title: '' },
        //{img: '', id: '', title: '' },
        //{img: '', id: '', title: '' },
        
      ]
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
