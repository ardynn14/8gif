register: function(payload) {
    // console.log(payload, "dari app vue nih <<<<<<<<<<<<<");
    axios({
        method: "post",
        url: "http://localhost:3000/users/register",
        data: {
            username: payload.username,
            email: payload.email,
            password: payload.password
        }
    })
        .then(({ data }) => {
            // this.modalForm = false;
            Swal.fire({
                title: "Thank you!",
                text: "Please login to continue your journey..",
                type: "success",
                timer: 1300
            });
            // console.log(data);
        })
        .catch(err => {
            // console.log(err);
            Swal.fire({
                title: "Oops!",
                text: "Please use different email address.",
                type: "error",
                timer: 2500
            });
        });
},
login(payload) {
    //   console.log(payload, "sampe login di app vue <<<<<<<<<<<<<<<");
    axios({
        method: "post",
        url: "http://localhost:3000/users/login",
        data: {
            email: payload.email,
            password: payload.password
        }
    })
        .then(({ data }) => {
            //   console.log(data, "token dari server <<<<<<<<<<<<");
            Swal.fire({
                title: "Login Success!",
                text: "Let's start your journey..",
                type: "success",
                timer: 1300
            });
            localStorage.setItem("token", data);
            this.token = localStorage.getItem("token");
            this.getArticle();
        })
        .catch(err => {
            // console.log(err.response.data);
            Swal.fire({
                title: "Oops!",
                text: "Invalid username / password",
                type: "error",
                timer: 2000
            });
        });
},
logout: function() {
    Swal.fire({
        title: "Are you sure?",
        text: "You will be logged out after this",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout!"
    }).then(result => {
        if (result.value) {
            Swal.fire("See ya!", "", "success");
            localStorage.removeItem("token");
            this.token = "";
            this.articles = [];
        }
    });
},

deleteArticle: function(id) {
    //   console.log(id);
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then(result => {
        if (result.value) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
            axios({
                method: "delete",
                url: `http://localhost:3000/gif/delete/${id}`,
                headers: {
                    token: localStorage.getItem("token")
                }
            })
                .then(({ data }) => {
                    this.getArticle();
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
},