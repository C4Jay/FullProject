<template>
<v-container>

<v-layout row> 
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-text>
                <v-container>
                    <v-form @submit.prevent="onSignup">
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                    name="email"
                                    label="Mail"
                                    id="email"
                                    v-model="email"
                                    type="email"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                    name="password"
                                    label="Password"
                                    id="password"
                                    v-model="password"
                                    type="password"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>

                        <v-layout row>
                            <v-flex xs12 offeset-sm3>
                                <v-text-field
                                    name="confirmPassword"
                                    label="Confirm Password"
                                    id="confirmPassword"
                                    v-model="confirmPassword"
                                    type="password"
                                    :rules="[comparePasswords]"
                                   
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>

                        <v-layout row>
                            <v-flex xs12>
                             <v-btn color="yellow" type="submit">
                                    SignUp</v-btn>

                            </v-flex>
                        </v-layout>



                    </v-form>



                </v-container>

            </v-card-text>

        </v-card>

    </v-flex>

</v-layout>
</v-container>

</template>

<script>
export default {
    name: 'SignUp',

    data () {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            loader: null,
            loading: false
        }
    },

     


    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
        },
        user () {
            return this.$store.getters.user
        },
  /*      loading () {
            return this.$store.getters.progressing
        }
*/
    },

    watch: {
        user (value) {
            if (value !== null && value !== undefined) {
                this.$router.push('/')
            }

        },
          loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      }
    },


    methods: {
        onSignup () {
            this.$store.dispatch('signUserup', {email: this.email, password: this.password})

        },

        oncan () {
            console.log('can alert')
        }
    }
}
</script>

