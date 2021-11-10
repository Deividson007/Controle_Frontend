import Api from "./api";

export default {
    doLogin (usuario) {
        return new Promise((resolve, reject) => {
            try {
                Api().post("/login", usuario).then(res => {
                    const { access_token } = res.data;
                    if (access_token) {
                        localStorage.setItem("jwt", access_token);
                        resolve(true);
                    }
                    reject(false);
                });
            }
            catch (err) {
                reject(err);
            }
        });
    }
}