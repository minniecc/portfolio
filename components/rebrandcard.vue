<template>
  <div class="row col-lg-6 col-md-12 col-sm-12 col-12 _mg-at rebrand">
    <div
      class="rebrandpic old col-lg-5 col-md-5 col-sm-5 col-5 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct"
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

    <div class="brand _mg-at">
      <h2 class="_fs-4-md _fs-5">{{ brand }}</h2>
      <hr>
      <p class="_fs-5-md _fs-6-sm _fs-7">{{ sub }}</p>
    </div>
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
  border: 2px dotted grey;
}

.old {
  filter: saturate(20%);
}

.brand {
  height: 200px;
}
h2 {
  padding-top: 10px;
  text-align: center;
  letter-spacing: 0.1em;
  font-weight: 300;
  color: black;
}

p {
  font-family: "Poppins", sans-serif;
  color: grey;
  text-align: left;
}

hr {
  width: 280px;
  margin-left: auto;
  margin-right: auto;
  height: 3px;
  border-style: none;
  background-color: #ffcd00;
  opacity: 0.5;
}
</style>

<script>
export default {
  props: ["oldpic", "newpic", "brand", "sub"]
};
</script>