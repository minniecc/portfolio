<template>
  <div>
    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <p
        class="_fs-5-md _fs-6-sm _fs-7"
      >Hello & Welcome to my website! I am a graphic and industrial designer. I help my clients build better businesses by creating joyful digital ideas, products and experiences that connect the hearts of brands to the hearts of their consumers.</p>
    </div>

    <!-- put something here -->
    <div class="hero col-10 _mg-at">
      <div class="row col-10 _mg-at">
        <div
          class="col-lg-12 col-sm-12 col-12 _dp-b indexpic _h-512px-lg _h-512px-md _h-512px-sm _h-256px"
        ></div>
      </div>
      <div class="row _pd-32px">
        <div class="bio-button -dark _mg-at">
          <nuxt-link class="indexbutt" to="/about">MORE ABOUT MINNIE?</nuxt-link>
        </div>
      </div>
    </div>

    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <h1 class="_fs-3-md _fs-4">MY WORK</h1>
      <p
        class="_fs-5-md _fs-6-sm _fs-7"
      >My work has been used for: Installations, Creative spaces, Videos, Film and Photo Set, Events, Advertising Campaigns, Media Contents, Magazines, Books, Product Styling, Catalogues, Print on fabric, Wallpapers, Product Collaborations.</p>
    </div>

    <div class="col-10 _mg-at">
      <Work/>
    </div>

    <div class="col-lg-4 col-md-6 col-10 _dp-b _tal-ct _mg-at">
      <h1 class="_fs-3-md _fs-4">CONTACT</h1>
      <p
        class="_fs-5-md _fs-6-sm _fs-7"
      >I look forward to get to know you. Please get in touch to arrange an appoinment or request for a quotation.</p>
      <div class="row _pd-24px">
        <div class="bio-button -dark _mg-at">
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
  padding-top: 10%;
  padding-bottom: 5%;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  padding-top: 10%;
  padding-bottom: 5%;
}

p {
  margin: 0 auto;
  color: #f26e64;
  padding-bottom: 5%;
}

.hero {
  background: linear-gradient(-45deg, #f26e64, #ffa69e, #9bd7db);
  margin: auto;
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
  background-color: #2f4858;
}

.work img {
  max-width: 100%;
  padding: 20%;
}

.indexbutt {
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