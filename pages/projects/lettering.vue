<template>
  <div class="project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <!-- <div class="row">
      <nuxt-link to="/minniec-project">
        <p class="_fs-5-md _fs-6-sm _fs-7">Personal Projects/</p>
      </nuxt-link>
      <p class="_fs-5-md _fs-6-sm _fs-7">Lettering</p>
    </div>-->
    <h1 class="_fs-3-md _fs-4">Lettering</h1>

    <!-- des -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <p
        class="_fs-5-md _fs-6-sm _fs-7"
      >In art, graphic design and typography, lettering refers to the creation of hand-drawn letters to apply to an object or surface.</p>
    </div>

    <!-- more pics -->
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/1.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/2.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/3.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/4.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/5.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/6.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/7.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/8.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/9.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/10.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/11.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/12.jpg" alt>
      </div>
    </div>
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/13.jpg" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/lettering/14.jpg" alt>
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
  padding-bottom: 5%;
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
  margin: auto auto 50px auto;
}

.projecthero {
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(~assets/images/branding-web.png);
  height: 100%;
}

.workpic {
  background-color: white;
  padding: 2%;
}

.workpic img {
  width: 100%;

  box-shadow: 0 5px 20px lightgrey;
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

