<template>
    <div class="content-page">
        <div class="content">
        <Header></Header>
        <TopMenu></TopMenu>
        <RightSidebar></RightSidebar>
        <div class="container-fluid">
            <router-view></router-view>
        </div>
        <Footer></Footer>
        </div>
    </div>
</template>

<script>
    import Header from "@/container/Header.vue";
    import Footer from "@/container/Footer.vue";
    import RightSidebar from "@/container/RightSidebar.vue";
    import TopMenu from "@/container/TopMenu.vue";

    export default {
        name: "Layout",
        components: {
            Header,
            Footer,
            RightSidebar,
            TopMenu
        }
    }
</script>