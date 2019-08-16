<template>

    <div class="container">
        <div class="row">
            <div class="gif " v-for="(a, index) in gifs" :key="index">
                <div class="card m-3">
                    <img :src="a.gif" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{a.title}}</h5>
                        <div class="button-card">
                            <a href="#" class="btn btn-primary" @click.prevent="deleteGif(a._id)">Remove</a>
                            <div>
                            <button v-on:click.prevent="shareFb(a.gif)" data-js="facebook-share" class="btn" id="shareBtn"><i class="fab fa-facebook-f"></i></button>
                            <button v-on:click.prevent="shareTwitter(a.gif)" data-js="twitter-share" class="btn" id="shareBtn"><i class="fab fa-twitter"></i></button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
</template>


<script>
    export default {
        data:{
            owner: false
        },
        props: ['gifs'],
        methods: {
            shareFb(url) {
                let facebookShare = document.querySelector('[data-js="facebook-share"]');
                let facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, 'facebook-popup', 'height=450,width=650');
                if(facebookWindow.focus) { facebookWindow.focus(); }
                return false;
            },
            shareTwitter(url) {
                let twitterWindow = window.open('https://twitter.com/share?url=' + url, 'twitter-popup', 'height=450,width=650');
                if(twitterWindow.focus) { twitterWindow.focus(); }
                return false;
                
            },
            deleteGif(id){
                console.log(id)
                axios({
                    method:'DELETE',
                    url: `http://localhost:3000/gif/${id}`,
                }).then(({data}) => {
                    this.$emit('file-removed', id)
                }).catch(err => {
                    console.log(err);
                })
            }
        }    
    }

</script>

<style scoped>
    .card {
        max-width: 500px;
        -webkit-box-shadow: 5px -4px 15px -6px rgba(46,81,255,1);
        -moz-box-shadow: 5px -4px 15px -6px rgba(46,81,255,1);
        box-shadow: 5px -4px 15px -6px rgba(46,81,255,1);
    }
    .card img:hover {
        opacity: 0.8;
    }
    .gif {
        margin-top: 50px;
    }
    .row {
        display: flex;
        justify-content: center;
    }
    .container {
        justify-content: center;
    }
    .card-body button{
        color: #21759b;
        font-size: 25px;
        width: 50px;
        height: 50px;
        text-align: right;
    }
    .card-body button:hover {
        box-shadow: 0 0 2px #21759b;
    }
    .button-card {
        display: flex;
        justify-content: space-between;
    }
</style>
