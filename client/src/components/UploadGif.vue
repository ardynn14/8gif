<template>
  <!-- search -->
  <div class="container">
    <div class="main-title">
      <h1>8gif</h1>
     <h5>Sharing for Caring</h5>
      <form action class="d-flex" enctype="multipart/form-data" @submit.prevent="submitForm">
        <div class="custom-file input-title">
          <input v-model="title" type="text" placeholder="insert title..." />
        </div>
        <div class="custom-file upload-file" >
            <input
                type="file"
                v-on:change="handlefileupload($event)"
                class="custom-file-input"
                id="customFileLang"
                lang="es"
                accept=".gif"
            />
            <label class="custom-file-label" for="customFileLang">upload your gif here...</label>
        </div>
        <div class="custom-file">
            <button type="submit" class="btn btn-primary">submit</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      title: ""
    };
  },
  methods: {
    handlefileupload(event) {
      let file = event.target.files || event.dataTransfer.files;
      this.file = file[0];
    },
    submitForm() {
      let formData = new FormData();
      formData.set("gif", this.file);
      formData.set("title", this.title);
      axios({
        method: "POST",
        url: "http://localhost:3000/gif/",
        data: formData
      }).then(({data}) => {
          this.$emit('file-upload',data)
      });
    },

  }
};
</script>

<style scoped>
.container .main-title form {
    justify-content: center;
}
.custom-file {
  margin-top: 20px;
  /* margin: 50px */
  max-width: 500px;
}
.custom-file label {
  font-size: 14px;
  /* text-align: left; */
}

.main-title {
  margin-top: 30px;
  text-align: center;
}

.main-title h1 {
  font-size: 50px;
}

</style>