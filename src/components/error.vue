<template>
    <v-alert error dismissable @input="onclose" :value="true" >
        alert
    </v-alert>
</template>

<script>
export default {
    name: 'error',

    methods: {
        onclose () {
            this.$emit('dismissed')
        }
    }
}
</script>
