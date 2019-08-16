<template>
  <div>
    <upload-gif 
        @file-upload="pushFile($event)"
    ></upload-gif>
    <card 
        :gifs="gifs"
        @file-removed="removeFile($event)"
    ></card>
  </div>
</template>


<script>
import axios from "axios";
import Swal from "sweetalert2";
import Navbar from "./components/Navbar.vue";
import Card from "./components/Card.vue";
import UploadGif from "./components/UploadGif.vue";

export default {
  data() {
    return {
      message: "Hello world",
      isLogin: false,
      gifs: [],
      token: localStorage.getItem("token") // buat login
    };
  },
  props: [],
  components: {
    Navbar,
    UploadGif,
    Card,
  },
  methods: {
    getGift: function() {
      axios({
        method: "get",
        url: "http://localhost:3000/gif/",
        headers: {
          // token: localStorage.getItem('token')
        }
      })
        .then(({ data }) => {
          console.log(data);
          this.gifs = data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    uploadGift() {
      // console.log('succes upload file');
      axios({
        method: "post",
        url: `http://localhost:3000/gif`
      })
        .then(({ data }) => {
          this.gifs.push(data);
        })
        .catch(err => {
          console.log(err);
        });
    },
    pushFile(file){
        this.gifs.push(file)
    },
    removeFile(id){
        console.log('masuk sini');
        this.gifs = this.gifs.filter(el => el._id !== id)
        this.getGift()
    }
  },
  created() {
    // if(this.token){
    this.getGift();
    // }
  }
};
</script>

<style scoped>
</style>