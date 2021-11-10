<template>
  <div>
      <div class="row">
          <div class="col-12">
              <div class="page-title-box">
                  <div class="page-title-right">
                      <form class="d-flex">
                          <div class="input-group">
                              <input type="text" class="form-control form-control-light" id="dash-daterange">
                              <span class="input-group-text bg-primary border-primary text-white">
                                  <font-icon icon="calendar" class="mdi mdi-calendar-range font-13" />
                              </span>
                          </div>
                          <a href="javascript: void(0);" class="btn btn-primary ms-2">
                              <font-icon icon="sync" class="mdi mdi-autorenew" />
                          </a>
                          <a href="javascript: void(0);" class="btn btn-primary ms-2">
                              <font-icon icon="filter" class="mdi mdi-autorenew" />
                          </a>
                      </form>
                  </div>
                  <h4 class="page-title">Home</h4>
              </div>
          </div>
      </div>

      <div class="row">
          <div class="col-xl-5 col-lg-6">
              <div class="row">
                  <div class="col-lg-6">
                      <CardFlat icon="user-friends" arrow="sort-up" titulo="Clientes" quantidade="35.984" porcentagem="25,64%" texto="Desde o último mês!" positive></CardFlat>
                  </div>
                  <div class="col-lg-6">
                      <CardFlat icon="user-friends" arrow="sort-down" titulo="Clientes" quantidade="35.974" porcentagem="25,64%" texto="Desde o último mês!"></CardFlat>
                  </div>
              </div>
              <div class="row">
                  <div class="col-lg-6">
                      <CardFlat icon="user-friends" arrow="sort-up" titulo="Clientes" quantidade="35.904" porcentagem="25,64%" texto="Desde o último mês!" positive></CardFlat>
                  </div>
                  <div class="col-lg-6">
                      <CardFlat icon="user-friends" arrow="sort-down" titulo="Clientes" quantidade="35.914" porcentagem="25,64%" texto="Desde o último mês!"></CardFlat>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
    import CardFlat from "@/components/CardFlat.vue";

    export default {
        name: "Home",
        components: {
            CardFlat
        }
    }
</script>