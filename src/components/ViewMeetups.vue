<template>
<v-container>
    <v-layout v-for="item in meetups" :key="item.title" class="mb-2">
        <v-flex xs12>
            <v-card class="info" >
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs10 sm5 >
                            <div class="card">
                            <v-img height="298" :src="item.img"></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs10 sm8 md7>
                            <v-card-title primary-title>
                                <h3 class="white--text">{{item.title}}</h3>
                                <div>Our New York meetup will be held on {{item.date}}</div>
                            </v-card-title>
                            <v-card-actions class="btns">
                                <v-btn :to="'/meetups/' + item.id" flat="true" color="blue">
                                    <v-icon left>mdi-anchor</v-icon>
                                    View {{ item.title }} MeetUp
                                
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-container>

            </v-card>
        </v-flex>
    </v-layout>
</v-container>
</template>


<script>
export default {
    name: 'ViewMeetups',
    computed: {
        meetups () {
            return this.$store.getters.DoneMeetups
        }
    }
}

</script>

<style scoped>
.btns{
    position: relative;
    left: 10px;
}
.card {
    position: relative;
    left: 8px;
}

</style>
