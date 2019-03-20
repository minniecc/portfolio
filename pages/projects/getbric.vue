<template>
  <div class="project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">Getbric boardgame</h1>
    <div class="row text col-11 _tal-ct _alit-ct">
      <p class="_fs-5-md _fs-6-sm _fs-7 _mg-at">Group Project</p>
    </div>

    <!-- des -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <h2 class="_fs-4-md _fs-5 _mg-at">What is "Getbric" ?</h2>
    </div>

    <!-- more pics -->
    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/getbric-1.png" alt>
      </div>
    </div>

    <!-- des -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <h2 class="_fs-4-md _fs-5 _mg-at">Instruction</h2>
    </div>

    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/getbricguide1.png" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/getbricguide2.png" alt>
      </div>
    </div>

    <!-- video -->
    <div class="row text col-11 _tal-ct _alit-ct">
      <h2 class="_fs-4-md _fs-5 _mg-at">Tutorial & Ads</h2>
    </div>
    <div class="workpic row col-11 _mg-at _alct-ct">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/nr94VG4E-Cs"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/ehkC5k92HJo"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
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
  background-image: url(~assets/images/branding-web.png);
  height: 100%;
}

.workpic {
  background-color: white;
  padding: 2%;
}

.workpic img {
  width: 100%;
  margin-top: 10%;
  margin-bottom: 10%;
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

