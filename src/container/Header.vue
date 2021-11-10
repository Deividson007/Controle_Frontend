<template>
    <div class="navbar-custom topnav-navbar">
        <div class="container-fluid">
            <a href="/" class="topnav-logo">
                <span class="topnav-logo-lg">
                    <img :src="images.logo" width="200px">
                </span>
                <span class="topnav-logo-sm">
                    <img :src="images.logo" width="150px">
                </span>
            </a>
            <ul class="list-unstyled topbar-menu float-end mb-0">
                <li class="notification-list">
                    <a href="javascript:void();" class="nav-link end-bar-toggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                        <font-icon icon="cog" class="dripicons-gear noti-svg" />
                    </a>
                </li>
                <li class="dropdown notification-list">
                    <a href="#" class="nav-link dropdown-toggle nav-user arrow-none me-0" data-bs-toggle="dropdown" id="topbar-userdrop" role="button" aria-haspopup="true" aria-expanded="false">
                        <span class="account-user-avatar">
                            <img :src="images.avatarDefault" alt="user-image" class="rounded-circle">
                        </span>
                        <span>
                            <span class="account-user-name">Deividon Santos</span>
                            <span class="account-position">Dev</span>
                        </span>                    
                    </a>
                    <div class="dropdown-menu dropdown-menu-end dropdown-menu-animated topbar-dropdown-menu profile-dropdown" aria-labelledby="topbar-userdrop">
                        <div class=" dropdown-header noti-title">
                            <h6 class="text-overflow m-0">Bem Vindo!</h6>
                        </div>
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="mdi mdi-account-circle me-1"></i>
                            <span>My Account</span>
                        </a>
                        <a href="javascript:void(0);" class="dropdown-item notify-item">
                            <i class="mdi mdi-logout me-1"></i>
                            <span>Sair</span>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                images: {
                    logo: require("@/assets/svg/logo.svg"),
                    avatarDefault: require("@/assets/images/avatar_default.png")
                }
            }
        }
    }
</script>