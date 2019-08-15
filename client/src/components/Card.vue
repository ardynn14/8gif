<template>
    <div class="container">
        <div class="gif d-flex row">

            <div class="card m-3">
                <img src="../../assets/img/happy-fox.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                    <button v-on:click.prevent="shareFb('https://storage.googleapis.com/gif8/1565878318455giphy.gif')" data-js="facebook-share" class="btn" id="shareBtn">Share on Facebook</button>
                </div>
            </div>

        </div>
    </div>
    
</template>


<script>
    export default {
        data:{
            
        },
        methods: {
            shareFb(url) {
                let facebookShare = document.querySelector('[data-js="facebook-share"]');
                let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-popup', 'height=350,width=600');
                if(facebookWindow.focus) { facebookWindow.focus(); }
                return false;
            }
        }    
    }

</script>

<style scoped>
    .card {
        max-width: 500px;
    }
    .gif {
        margin-top: 50px;
        justify-content: center;
    }
</style>
