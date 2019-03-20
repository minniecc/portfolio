<template>
  <div class="project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <!-- <div class="row">
      <nuxt-link to="/minniec-project">
        <p class="_fs-5-md _fs-6-sm _fs-7">Personal Projects/</p>
      </nuxt-link>
      <p class="_fs-5-md _fs-6-sm _fs-7">Lettering</p>
    </div>-->
    <h1 class="_fs-3-md _fs-4">Kraivith: Line sticker</h1>

    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/stickerline-08.png" alt>
      </div>
      <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum aspernatur repellendus voluptatem facere aperiam reiciendis quia!</p>
      </div>
    </div>

    <!-- pic -->
    <div class="workpic row col-11 _mg-at">
      <div class="col-12 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/stickerline-02.png" alt>
      </div>
    </div>

    <div class="col-lg-6 col-md-6 col-sm-6 col-12 _tal-ct _dp-b _mg-at">
      <p class="_fs-5-md _fs-6-sm _fs-7">Scan this code to download.</p>
    </div>
    <!-- qr code -->
    <div class="workpic row col-11 _mg-at">
      <div class="col-lg-3 col-md-3 col-sm-6 col-6 _tal-ct _dp-b _mg-at">
        <img src="/images/pp/stickerline-06.png" alt>
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
  // background-color: white;
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

