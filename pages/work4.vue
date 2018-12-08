<template>
  <div class="work4 col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">PERSONAL PROJECT</h1>
    <!-- about 1 -->
    <div class="row">
      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="workbrand"></div>
      </div>

      <!-- logo -->
      <div class="textbrand col-12 _tal-ct _mg-at _alit-ct">
        <h2 class="_fs-4-md _fs-5">Illustration</h2>
      </div>

      <brandcard
        logo1="/images/lg/logo16.jpg"
        logo2="/images/lg/logo2.png"
        logo3="/images/lg/logo18.png"
        logo4="/images/lg/logo22.png"
      />

      <brandcard
        logo1="/images/lg/logo17.png"
        logo2="/images/lg/logo13.png"
        logo3="/images/lg/logo12.png"
        logo4="/images/lg/logo8.png"
      />

      <brandcard
        logo1="/images/lg/logo7.png"
        logo2="/images/lg/logo14.png"
        logo3="/images/lg/logo11.png"
        logo4="/images/lg/logo19.png"
      />

      <!-- Re-branding -->
      <div class="textbrand col-11 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Card design</h2>
      </div>

      <div class="row col-11 _mg-at businesscard">
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/bc2.jpg" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/bc1.jpg" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/bc3.jpg" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/bc4.jpg" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/paypoint-01.png" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="/images/bc/paypoint-02.png" alt>
        </div>
      </div>

      <!-- business card -->
      <div class="textbrand col-10 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Character design</h2>
      </div>

      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="character1"></div>
      </div>

      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="character2"></div>
      </div>
    </div>

    <div class="row _pd-64px">
      <div class="bio-button -dark _mg-at">
        <nuxt-link to="/contact">
          <p>GET IN TOUCH</p>
        </nuxt-link>
      </div>
    </div>

    <div class="row _pd-64px">
      <Work/>
    </div>
  </div>
</template>


<script>
import Work from "~/components/Work";
import Brandcard from "~/components/brandcard";
export default {
  components: { Work, Brandcard },
  head() {
    return {
      title: "Minnie's Personal Projects"
    };
  }
};
</script>

<style lang="scss" scoped>
.work4 {
  background-color: #f26e64;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  padding: 10% 0 5% 0;
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
  font-family: "Muli", sans-serif;
}

.textbrand {
  padding: 5%;
}

.workbrand {
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(~assets/images/branding-web.png);
  height: 100%;
}

.character1 {
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/images/pp/stickerline-01.png);
  height: 100%;
}

.character2 {
  margin: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(/images/pp/stickerline-02.png);
  height: 100%;
}

.rebrand {
  padding: 2%;
}

.businesscard {
  margin: auto;
  background: white;
  padding: 2%;
}

.businesscard img {
  display: block;
  margin: 5% auto;
  max-width: 100%;
  box-shadow: 0 12px 20px lightgrey;
}

.bio-button p {
  color: white;
  &:hover {
    color: #f26e64;
  }
}
</style>
