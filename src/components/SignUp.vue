<template>
<v-container>
<v-layout row> 
    <v-flex xs12 sm6 offset-sm3>
        <v-card>
            <v-card-text>
                <v-container>
                    <v-form>
                        <v-layout row>
                            <v-flex xs12 sm6 offeset-sm3>
                                <v-text-field
                                    name="mail"
                                    label="Mail"
                                    id="mail"
                                    v-model="mail"
                                    type="email"
                                    required
                                    >

                                </v-text-field>
                            </v-flex>

                        </v-layout>
                        <v-layout row>
                            <v-flex xs12 sm6 offeset-sm3>
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
                            <v-flex xs12 sm6 offeset-sm3>
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
            mail: '',
            password: '',
            confirmPassword: ''
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'Passwords do not match' : ''
        }

    },
    methods: {
        onSignup () {

        }
    }
}
</script>

