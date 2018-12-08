<template>
  <div
    class="piccard col-lg-4 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _bgs-cv _bgrp-nrp _bgpst-ct _mg-at"
    :style="`background-image: url(${imageUrl})`"
  >
    <p>{{ pictext }}</p>
  </div>
</template>

<style lang="scss" scoped>
.piccard {
  height: 350px;
  background: black;
  // border-radius: px;
  border: 10px solid white;
  padding: 5%;
  margin: 2% auto;
  background-image: url(/images/film/1.jpg);
  // background-image: url('{{imageUrl}}');

  p {
    font-family: "Muli", sans-serif;
    color: white;
    padding-top: 250px;
  }
}
</style>

<script>
export default {
  props: ["imageUrl", "pictext"]
};
</script>