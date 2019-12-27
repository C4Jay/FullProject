<template>
<v-container>
    <v-layout>
        <v-flex xs12>
            <v-card class="info">
                <v-container fluid>
                    <v-layout row>
                        <v-flex xs5>
                            <div class="card">
                            <v-img src="https://media.architecturaldigest.com/photos/5da74823d599ec0008227ea8/16:9/w_2560%2Cc_limit/GettyImages-946087016.jpg"></v-img>
                            </div>
                        </v-flex>
                        <v-flex xs10 sm8 md7>
                            <v-card-title primary-title>
                                <h3 class="white--text">New York MeetUp</h3>
                                <div>Our New York meetup was held on 8th lasth month</div>
                            </v-card-title>
                            <v-card-actions class="btns">
                                <v-btn to="/meetups/1" flat="true" color="blue">
                                    <v-icon left>mdi-anchor</v-icon>
                                    View New York Meetup
                                
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
    name: 'ViewMeetups'
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
