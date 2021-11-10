<template>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div class="offcanvas-header">
            <h5 id="offcanvasRightLabel">Configurações</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="rightbar-content h-100" data-simplebar="init">
            <div class="simplebar-wrapper" style="margin: 0px">
                <div class="simplebar-height-auto-observer-wrapper">
                    <div class="simplebar-height-auto-observer"></div>
                </div>
                <div class="simplebar-mask">
                    <div class="simplebar-offset" style="right: 0px; bottom: 0px;">
                        <div class="simplebar-content-wrapper" style="height: 100%; overflow: hidden;">
                            <div class="simplebar-content" style="padding: 0px;">
                                <div class="p-3">
                                    <div class="alert alert-warning" role="alert">
                                        <strong>Customize</strong>
                                        o esquema geral de cores, menu da barra lateral, etc.
                                    </div>
                                    <h5 class="mt-3">Configuração de Cores</h5>
                                    <hr class="mt-1">
                                    <div class="form-check form-switch mb-1">
                                        <input type="radio" class="form-check-input" @change="switchMode(mode)" v-model="mode" name="color-schema-mode" value="light" id="theme-light">
                                        <label class="form-check-label" for="theme-light">Claro</label>
                                    </div>
                                    <div class="form-check form-switch mb-1">
                                        <input type="radio" class="form-check-input" @change="switchMode(mode)" v-model="mode" name="color-schema-mode" value="dark" id="theme-dark">
                                        <label class="form-check-label" for="theme-dark">Escuro</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RightSidebar",
    data() {
        return {
            mode: "light"
        }
    },
    methods: {
        initMode() {
            for (let index = 0; index < document.getElementsByTagName("style").length; index++) {
                if (document.getElementsByTagName("style")[index].innerText.indexOf("_dark-mode_") > 0) {
                    document.getElementsByTagName("style")[index].disabled = true;
                }
                if (document.getElementsByTagName("style")[index].innerText.indexOf("_light-mode_") > 0) {
                    document.getElementsByTagName("style")[index].disabled = false;
                }
            }
        },
        switchMode(mode) {
            let qtd = document.getElementsByTagName("style").length;
            let indexDarkMode = 0;
            let indexlightMode = 0;

            for (let index = 0; index < qtd; index++) {
                if (document.getElementsByTagName("style")[index].innerText.indexOf("_dark-mode_") > 0) {
                    indexDarkMode = index;
                }
                if (document.getElementsByTagName("style")[index].innerText.indexOf("_light-mode_") > 0) {
                    indexlightMode = index;
                }
            }

            if (mode === "dark") {
                document.getElementsByTagName("style")[indexDarkMode].disabled = false;
                document.getElementsByTagName("style")[indexlightMode].disabled = true;
            } 
            if (mode === "light") {
                document.getElementsByTagName("style")[indexDarkMode].disabled = true;
                document.getElementsByTagName("style")[indexlightMode].disabled = false;
            }

            return;
        }        
    },
    mounted() {
        this.initMode();        
    }
}
</script>