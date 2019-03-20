
<template>
  <div class="project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">Salala</h1>

    <div class="row text col-11 _tal-ct _alit-ct">
      <p class="_fs-5-md _fs-6-sm _fs-7 _mg-at">Group Project</p>
    </div>

    <!-- more pics -->
    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/salala.png" alt>
      </div>
    </div>

    <!-- des -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <h2 class="_fs-4-md _fs-5 _mg-at">Label design</h2>
    </div>

    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/salala-01.png" alt>
      </div>
    </div>

    <!-- des -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <h2 class="_fs-4-md _fs-5 _mg-at">Truck designs</h2>
    </div>

    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/truck1.png" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/truck2.png" alt>
      </div>
    </div>

    <div class="row col-12 _mg-at _pd-64px">
      <div class="bio-button -dark mgbutt">
        <a href="/pdf/minniecv.pdf" download>
          <p class="_fs-5-md _fs-6-sm _fs-7">DOWNLOAD MY CV</p>
        </a>
      </div>
      <div class="bio-button -dark mgbutt">
        <nuxt-link class="indexbutt" to="/contact">
          <p class="_fs-5-md _fs-6-sm _fs-7">GET IN TOUCH</p>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "About Minnie"
    };
  }
};
</script>


<style lang="scss" scoped>
.project {
  background-color: #9bd7db;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  padding-top: 10%;
  // padding-bottom: 5%;
  color: white;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  color: white;
}

p {
  font-family: "Poppins", sans-serif;
}

.text {
  margin: auto;
}

.projecthero {
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/images/pp/sumonehero.png);
  height: 100%;
}

.workvideo {
  background-color: white;
  // padding: 2%;
}

.workpic img {
  width: 100%;
  margin-top: 2%;
  margin-bottom: 2%;
}

.mgbutt {
  margin: 16px auto auto auto;
}

.bio-button p {
  color: white;
  &:hover {
    color: #9bd7db;
  }
}
</style>

