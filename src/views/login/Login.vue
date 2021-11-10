<template>
    <div class="authentication-bg DejaVue">
        <div class="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xxl-4 col-lg-5">
                        <div class="card">
                            <div class="card-header pt-4 pb-4 text-center bg-primary">
                                <a href="index.html">
                                    <span><img :src="images.logo" alt="" height="25"></span>
                                </a>
                            </div>
                            <div class="card-body p-4">
                                <div class="text-center w-75 m-auto">
                                    <h4 class="text-dark-50 text-center mt-0 fw-bold">Login</h4>
                                    <p class="text-muted mb-4">Digite seu endereço de e-mail e senha para acessar o painel de administração.</p>
                                </div>
                                <form action="#">

                                    <div class="mb-3">
                                        <label for="emailaddress" class="form-label">Email</label>
                                        <input class="form-control" type="email" v-model="form.email" id="emailaddress" required="" placeholder="Informe seu email">
                                    </div>

                                    <div class="mb-3">
                                        <a href="pages-recoverpw.html" class="text-muted float-end"><small>Esqueceu sua senha?</small></a>
                                        <label for="password" class="form-label">Password</label>
                                        <div class="input-group input-group-merge">
                                            <input type="password" id="password" v-model="form.pass" class="form-control" placeholder="Informe sua senha" required>
                                            <button type="button" id="btnEye" class="btn btn-outline-secondary" @click="switchEye()" data-password="false" data-bs-toggle="tooltip" data-bs-placement="bottom" :title="tooltip.eye">
                                                <font-icon v-if="images.showEye" icon="eye" />
                                                <font-icon v-if="images.showEyeSlash" icon="eye-slash" />
                                            </button>
                                        </div>
                                    </div>

                                    <div class="mb-3 mb-3">
                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="checkbox-signin" checked="">
                                            <label class="form-check-label" for="checkbox-signin">Manter conectado</label>
                                        </div>
                                    </div>

                                    <div class="mb-3 mb-0 text-center">
                                        <button class="btn btn-primary" @click="login(form)">Entrar</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import LoginService from "@/services/loginService.js";
import Alert from "@/common/alert.js";

export default {
    name: "Login",
    data() {
        return {
            form: {
                email: null,
                pass: null,
            },
            images: {
                logo: require("@/assets/svg/logo-escuro.svg"),
                avatarDefault: require("@/assets/images/avatar_default.png"),
                showEye: true,
                showEyeSlash: false
            },
            tooltip: {
                eye: "Mostrar senha"
            }
        }
    },
    methods: {
        async login(user) {
            try {
                const resposta = await LoginService.doLogin(user);

                if (resposta) {
                    this.$router.push({name: "home"});
                } else {
                    this.form = {email:null, pass:null};
                    Alert.alertError("Erro no login", "Usuário ou Senha incorretos");
                }
            } catch(error) {
                Alert.alertError("Erro no login", "Ocorreu uma falha no sistema");
            }
        },
        switchEye() {
            var btn = document.getElementById("btnEye");
            var pass = document.getElementById("password");

            if (btn.dataset["password"] === "false") {
                pass.type = "text";
                btn.dataset["password"] = "true";
                this.images.showEye = false;
                this.images.showEyeSlash = true;
                this.tooltip.eye = "Ocultar senha";
            } else {
                pass.type = "password";
                btn.dataset["password"] = "false";
                this.images.showEye = true;
                this.images.showEyeSlash = false;
                this.tooltip.eye = "Mostrar senha";
            }
        }
    }
}
</script>