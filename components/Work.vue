<template>
    <div class="work row _mg-at">
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 _tal-ct _dp-b">
        <nuxt-link to="/work1"><img src="~/assets/images/work-bd.png" alt=""></nuxt-link>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 _tal-ct _dp-b">
        <nuxt-link to="/work2"><img src="~/assets/images/work-ux.png" alt=""></nuxt-link>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 _tal-ct _dp-b">
        <nuxt-link to="/work3"><img src="~/assets/images/work-pg.png" alt=""></nuxt-link>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 col-12 _tal-ct _dp-b">
        <nuxt-link to="/work4"><img src="~/assets/images/work-pp.png" alt=""></nuxt-link>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.work {
  background-color: white;
  padding: 2%;
}

.work img {
  width: 100%;
  margin-top: 10%;
  margin-bottom: 10%;
  box-shadow: 1px 1px 10px 1px grey;
  &:hover {
    box-shadow: 1px 1px 5px grey;
  }
}

</style>
