<template>
<div>
    <Navbar></Navbar>

    <h1>{{ message }}</h1>
    <Card></Card>
</div>
</template>


<script>
    import Navbar from './components/Navbar.vue'
    import Card from "./components/Card.vue"

    export default {
        data() {
            return {
                message: 'Hello world'
            }
        },
        components: {
            Navbar,
            Card
        }
    }
</script>

<style scoped>

</style>




