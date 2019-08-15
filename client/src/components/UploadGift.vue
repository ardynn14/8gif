<template>
    <!-- search -->
    <div class="container">
        <div class="main-title">
            <h1>8gif</h1>
            <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFileLang" lang="es" accept=".gif">
                <label class="custom-file-label" for="customFileLang">upload your gift here...</label>
                <!-- <a href=""><small>upload your gift here...</small></a> -->
            </div>
        </div>
    </div>
    
</template>

<script>
    export default {

    }
</script>

<style scoped>
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