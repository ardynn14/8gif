<template>
<div>
    <navbar></navbar>
    <upload-gift></upload-gift>
    <card></card>
</div>
</template>


<script>
    import Navbar from './components/Navbar.vue'
    import Card from "./components/Card.vue"
    import UploadGift from "./components/UploadGift.vue"

    export default {
        data() {
            return {
                message: 'Hello world'
            }
        },
        methods: {

        },
        components: {
            Navbar,
            UploadGift,
            Card
        }
    }
</script>

<style scoped>

</style>




