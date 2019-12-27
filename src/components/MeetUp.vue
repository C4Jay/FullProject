<template>
<v-container>
    <v-layout row wrap>
        <v-flex xs12>
            <v-card>
                <v-card-title>
                  <h4 class="blue--text">  {{ meetup.title }} </h4>
                </v-card-title>
                <v-img height="400" :src="meetup.img">
                </v-img>
                <v-card-text>
                    <div class="text display-1 blue-grey--text">{{ meetup.date }}</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quas ipsum impedit voluptatibus reprehenderit ipsam ut ex explicabo deleniti, maiores vero animi blanditiis id doloremque commodi facere assumenda ullam, unde magni, perferendis accusamus quis officia nesciunt! Voluptatem, officia. In, ad.</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="yellow" flat>
                            REGISTER
                        </v-btn>
                    </v-card-actions>
            </v-card>

        </v-flex>
    
    </v-layout>
</v-container>
</template>

<script>
export default {
    name: 'MeetUp',
    props: ['id'],
    computed: {
        meetup() {
            return this.$store.getters.DoneMeetup(this.id)

            }
        }
    }
    
</script>
