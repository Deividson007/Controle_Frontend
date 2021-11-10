/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
import NProgress from "nprogress";

const Layout = () => import("@/container/Layout.vue");
const viewLogin = () => import("@/views/login/Login.vue");
const viewHome = () => import("@/views/Home.vue");

Vue.use(VueRouter);

const confRotas = () => {
    return [
        {
            path: "/",
            nome: "login",
            component: viewLogin
        },
        {
            path: "",
            redirect: "/home",
            name: "home",
            component: Layout,
            children: [
                {
                    path: "/home",
                    component: viewHome
                }
            ]
        }

    ]
};

const router = new VueRouter({
    mode: "history",
    linkActiveClass: "open active",
    scrollBehavior: () => ({ y: 0 }),
    routes: confRotas()
});

// Lógica inerente ao NProgress
router.beforeResolve((to, from, next) => {
    // Se caso não for uma página inicial de carregamento
    if (to.name) {
        // Quando houver carregamento de uma página inicial, então usar o NProgress:
        NProgress.start();
    }
    next();
});

// Lógica inerente ao realizar o "Log out" remover o token no local Storage:
router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requireAuth)) {
        if (localStorage.getItem("jwt") == null) {
            next({
                path: "/",
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    // Completando a animação da rota no NProgress
    NProgress.done();
});

export default router;
