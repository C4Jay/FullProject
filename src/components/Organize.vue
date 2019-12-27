<template>
<v-container>
    <v-card>
    <v-layout row>
        <v-flex xs12 class="text-center">
            <h1>Create a New Meetup </h1>
        </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs12  >
            <v-form xs10 sm12  @submit.prevent="newcreatemeetup">
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        v-model="title"
                        name="title"
                        required
                        label="Title"
                        id="title"
                        
                        >

                        </v-text-field>
                    </v-flex>
                </v-layout>
                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>        
                        <v-text-field 
                        v-model="location"
                        name="location"
                        required
                        label="Location"
                        id="location"
                        
                        >

                        </v-text-field>                                               
                    </v-flex>
                </v-layout>

                <v-layout row>
                    <v-flex xs12 sm6 offset-sm3>
                        <v-text-field 
                        v-model="img"
                        name="Img"
                        required
                        label="Img"
                        id="Img"
                        
                        >
                        </v-text-field>    
                    </v-flex>
                </v-layout>


                        <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                        <v-img :hidden="img == ''" height="409" :src="img">
                        </v-img>
                        </v-flex>
                        </v-layout>




 
                        <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                        <v-textarea
                        v-model="description"
                        name="description"
                        label="Description"
                        required
                        id="Description"
                        > </v-textarea> 
                        </v-flex>
                        </v-layout>
                   

                   
                <v-layout row>
                    <v-flex xs12 class="text-center">
                        <v-btn
                        type="submit" 
                        color="lime" 
                        :disabled="!formIsValid">
                        Create meetup</v-btn>
                    </v-flex>
                </v-layout>
            </v-form>
        </v-flex>
    </v-layout>
    </v-card>
</v-container>
</template>

<script>
export default {
    name: 'Organize',

    data () {
        return {
            title: '',
            location: '',
            img: '',
            description: '', 
        }
    },

    computed: {
        formIsValid () {
            return this.title !== '' && 
                   this.location !== '' && 
                   this.img !== ''  && 
                   this.description !== ''
        }
    },

    methods: {
        newcreatemeetup () {
            if (!this.formIsValid) {
                return 
            }
            const meetupData = {
                title: this.title,
                location: this.location,
                img: this.img,
                description: this.description,
                date: new Date()
            }
            this.$store.dispatch ('createmeetup', meetupData)
            this.$router .push('/meetups')
        }
    }
}
</script>

