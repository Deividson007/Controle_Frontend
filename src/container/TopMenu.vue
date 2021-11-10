<template>
    <div class="topnav">
        <div class="container-fluid active">
            <nav class="navbar navbar-dark navbar-expand-lg topnav-menu" id="topnav-menu-content">
                <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboards" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <font-icon icon="tachometer-alt"/> Dashboards
                            <div class="arrow-down"></div>
                        </a>
                        <div class="dropdown-menu" aria-labelledby="topnav-dashboards">
                            <a href="#" class="dropdown-item">Menu 1</a>
                            <a href="#" class="dropdown-item">Menu 2</a>
                            <a href="#" class="dropdown-item">Menu 3</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" role="button">
                            <font-icon icon="jedi" />
                            Jedi
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: "TopMenu"
}
</script>