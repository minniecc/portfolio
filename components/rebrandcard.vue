<template>
  <div class="row col-lg-6 col-md-12 col-sm-12 col-12 _mg-at rebrand">
    <div
      class="rebrandpic old ol-lg-5 col-md-5 col-sm-5 col-5 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct"
      :style="`background-image: url(${oldpic})`"
    ></div>

    <div class="_pd-0px col-lg-1 col-md-1 col-sm-1 col-1 _tal-ct _dp-b _mg-at">
      <p class="_fs-3-md _fs-4-sm _fs-5">
        <i class="fas fa-arrow-right"></i>
      </p>
    </div>

    <div
      class="rebrandpic col-lg-5 col-md-5 col-sm-5 col-5 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct"
      :style="`background-image: url(${newpic})`"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
.rebrand {
  padding: 2%;
  background: white;
}

.rebrandpic {
  display: block;
  height: 180px;
  // background: #ffcd00;
  margin: auto;
  // box-shadow: 0 12px 20px lightgrey;
  border: 2px dotted black;
}

.old {
  filter: saturate(20%);
}

p {
  color: black;
  text-align: center;
}
</style>

<script>
export default {
  props: ["oldpic", "newpic"]
};
</script>