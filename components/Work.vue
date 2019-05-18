<template>
  <div class="work row _mg-at">
    <div class="col-lg-3 col-md-3 col-sm-3 col-6 _tal-ct _dp-b">
      <nuxt-link to="/minniec-branding">
        <img src="~/assets/images/work-bd.png" alt>
      </nuxt-link>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-6 _tal-ct _dp-b">
      <nuxt-link to="/minniec-website">
        <img src="~/assets/images/work-ux.png" alt>
      </nuxt-link>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-6 _tal-ct _dp-b">
      <nuxt-link to="/minniec-photo">
        <img src="~/assets/images/work-pg.png" alt>
      </nuxt-link>
    </div>
    <div class="col-lg-3 col-md-3 col-sm-3 col-6 _tal-ct _dp-b">
      <nuxt-link to="/minniec-project">
        <img src="~/assets/images/work-pp.png" alt>
      </nuxt-link>
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
  // box-shadow: 1px 1px 10px 1px grey;
  &:hover {
    box-shadow: 1px 1px 10px 1px grey;
    transition-duration: 1s;
  }
}
</style>
