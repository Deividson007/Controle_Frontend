<template>
    <div class="card widget-flat">
        <div class="card-body">
            <div class="float-end widget-icon">
                <font-icon :icon="icon" />
            </div>
            <h5 class="text-muted fw-normal mt-0" title="Número de Clientes">{{titulo}}</h5>
            <h3 class="mt-3 mb-3">{{quantidade}}</h3>
            <p class="mb-0 text-muted">
                <span :class="[positive ? success : danger, me2]">
                    <font-icon :icon="arrow" />
                    {{porcentagem}}
                </span>
                <span class="text-nowrap">{{texto}}</span>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CardFlat",
        data() {
            return {
                success: "text-success",
                danger: "text-danger",
                me2: "me-2"
            }
        },
        props: {
            icon: String,
            titulo: String,
            quantidade: String,
            porcentagem: String,
            texto: String,
            arrow: String,
            positive: Boolean
        }
    }
</script>