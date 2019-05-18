<template>
  <div>
    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <!-- Logo Row -->
      <div class="row">
        <div class="col-12">
          <!-- logo -->
          <div
            class="logo _mgt-128px _alit-ct _tal-ct _h-256px-lg _h-256px-md _h-256px-sm _h-128px"
          >
            <nuxt-link to="/">
              <img class="_dp-b _mg-at _h-70pct" src="~/assets/images/logomn.png" alt>
              change to logo with graphic
            </nuxt-link>
          </div>
        </div>
      </div>

      <h1 class="_fs-4-md _fs-5">Hey, it's MINNIECC!</h1>
      <p
        class="_fs-6-md _fs-6-sm _fs-7"
      >Welcome to my website! I am a graphic and industrial designer. I help my clients build better businesses by creating joyful digital ideas, products and experiences that connect the hearts of brands to the hearts of their consumers.</p>
    </div>

    <div class="hero row col-10 _mgh-at _mgv-12px">
      <div class="row col-10 _mg-at">
        <div
          class="col-lg-12 col-sm-12 col-12 _dp-b indexpic _h-512px-lg _h-512px-md _h-512px-sm _h-256px"
        ></div>
      </div>
      <div class="row col-lg-8 col-md-10 col-sm-12 col-12 _mg-at _pd-32px">
        <div class="bio-button -dark mgbutt">
          <nuxt-link class="indexbutt" to="/about">MORE ABOUT MINNIE?</nuxt-link>
        </div>
        <div class="bio-button -dark mgbutt">
          <a class="indexbutt" href="/pdf/minniecv.pdf" download>DOWNLOAD MY CV</a>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <h1 class="_fs-4-md _fs-5 _pdt-16px">MINNIECC'S WORK</h1>
      <p
        class="_fs-6-md _fs-6-sm _fs-7"
      >My work has been used for: Installations, Creative spaces, Videos, Film and Photo Set, Events, Advertising Campaigns, Media Contents, Magazines, Books, Product Styling, Catalogues, Print on fabric, Wallpapers, Product Collaborations.</p>
    </div>

    <div class="col-10 _mg-at">
      <Work/>
    </div>

    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <h1 class="_fs-4-md _fs-5">CONTACT</h1>
      <p
        class="_fs-6-md _fs-6-sm _fs-7"
      >I look forward to get to know you. Please get in touch to arrange an appoinment or request for a quotation.</p>
      <div class="row _pd-24px">
        <div class="bio-button -dark mgbutt _mg-at">
          <nuxt-link class="indexbutt" to="/contact">GET IN TOUCH</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  // padding-top: 10%;
  padding-bottom: 5%;
  // color: #f26e64;
  background: -webkit-linear-gradient(#f26e64, #9bd7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  padding-top: 10%;
  padding-bottom: 5%;
  color: #f26e64;
}

p {
  font-family: "Poppins", sans-serif;
  margin: 0 auto;
  color: #333333;
  padding-bottom: 5%;
}

.hero {
  background: linear-gradient(-45deg, #f26e64, #ffa69e, #9bd7db);
}

.mgbutt {
  margin: 16px auto auto auto;
  border: none;
  border-radius: 45px;
}

.indexpic {
  display: block;
  padding: 5%;
  margin-top: 5%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(~/assets/images/minniecc.jpg);
}

.work {
  background-color: white;
}

.work img {
  max-width: 70%;
  padding: 20%;
}

.indexbutt {
  padding: 15px;
  color: white;
  &:hover {
    color: #ffa69e;
  }
}
</style>

<script>
import Work from "~/components/Work";
export default {
  components: { Work },
  head() {
    return {
      title: "Minnie C"
    };
  }
};
</script>