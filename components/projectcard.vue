<template>
  <div class="row _dp-b col-lg-4 col-md-6 col-sm-6 col-12 _mg-at _tal-ct projectcard">
    <nuxt-link :to="`/projects/${page}`">
      <!-- :onclick="`window.open('${web}','_blank');`" -->
      <div
        class="projectcardpic col-12 _mg-at _dp-b _bgs-cv _bgrp-nrp _bgpst-ct"
        :style="`background-image: url(${pic})`"
        style="cursor: pointer;"
      ></div>
    </nuxt-link>
    <h2 class="_fs-5-md _fs-6">{{project}}</h2>
    <p class="_fs-6-md _fs-7-sm _fs-8">{{des}}</p>
  </div>
</template>

<style>
.projectcard {
  background-color: white;
  /* margin: 2% auto; */
  transition: all 0.3s ease;
  padding: 15px;
  border-style: groove;
  border: 2px solid #f26e64;
}

.projectcard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 29px white;
}

.projectcardpic {
  height: 200px;
  background-size: cover;
  /* border-bottom: 2px solid #ffa69e; */
}

.projectcard h2 {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 400;
  color: #f26e64;
  margin-top: 15px;
  border-top: 2px solid #f26e64;
}

.projectcard p {
  font-family: "Poppins", sans-serif;
  text-align: left;
}
</style>

<script>
export default {
  props: ["project", "des", "pic", "page"]
};
</script>