<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex sm12 md6 class="text-sm-center text-md-right">
        <v-btn color="yellow" large to="/meetups">Explore Meetups</v-btn>
        
      </v-flex>
      <v-flex sm12 md6 class="text-sm-center text-md-left">
      
        <v-btn color="green" large to="/meetups/new">Organize Meetups</v-btn>
      
      
      </v-flex>
      
      
     
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel>
          <v-carousel-item 
          v-for="item in items"
          v-bind:src="item.img"
          :key="item.title">
          </v-carousel-item>
        </v-carousel>
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
        {img: 'https://i.ytimg.com/vi/gYLQThUxpvQ/maxresdefault.jpg', id: '', title: 'New York' },
        {img: 'https://d2mpqlmtgl1znu.cloudfront.net/AcuCustom/Sitename/DAM/020/Paris_AdobeStock_264549883_1.jpg', id: '', title: 'Paris' },
        //{img: '', id: '', title: '' },
        //{img: '', id: '', title: '' },
        //{img: '', id: '', title: '' },
        
      ]
    }
  }
}
</script>
