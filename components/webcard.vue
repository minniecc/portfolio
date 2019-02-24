<template>
  <div class="webcard col-lg-5 col-md-5 col-sm-10 _tal-ct">
    <div
      class="webcardpic row col-12 _mg-at _dp-b _bgs-cv _bgrp-nrp _bgpst-ct"
      :onclick="`window.open('${web}','_blank');`"
      :style="`background-image: url(${pic})`"
      style="cursor: pointer;"
    ></div>
    <h2 class="_fs-4-md _fs-5">{{heading}}</h2>
    <p class="_fs-5-md _fs-6-sm _fs-7">{{des}}</p>
  </div>
</template>

<style>
.webcard {
  background-color: white;
  margin: 2% auto;
  transition: all 0.3s ease;
  padding: 15px;
}

.webcard:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 29px lightgrey;
}

.webcardpic {
  height: 200px;
  background-size: cover;
  /* border-bottom: 2px solid #ffa69e; */
}

.webcard h2 {
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: #ffa69e;
  margin-top: 15px;
  border-top: 2px solid #ffa69e;
}

.webcard p {
  font-family: "Poppins", sans-serif;
  text-align: left;
}
</style>

<script>
export default {
  props: ["heading", "des", "pic", "web"]
};
</script>