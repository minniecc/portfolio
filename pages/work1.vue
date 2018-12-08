<template>
  <div class="work1 col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">BRANDING</h1>
    <!-- about 1 -->
    <div class="row">
      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="workbrand"></div>
      </div>

      <!-- logo -->
      <div class="textbrand col-12 _tal-ct _mg-at _alit-ct">
        <h2 class="_fs-4-md _fs-5">LOGO</h2>
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

      <brandcard
        logo1="/images/lg/logo9.png"
        logo2="/images/lg/logo3.png"
        logo3="/images/lg/logo4.png"
        logo4="/images/lg/logo1.png"
      />

      <brandcard
        logo1="/images/lg/logo6.png"
        logo2="/images/lg/logo21.png"
        logo3="/images/lg/logo5.png"
        logo4="/images/lg/logo20.png"
      />

      <!-- Re-branding -->
      <div class="textbrand col-11 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Re-branding</h2>
      </div>

      <div class="row col-11 _mg-at _pd-0px">
        <rebrandcard oldpic="/images/rb/oldinvo.jpg" newpic="/images/rb/newinvo.png"/>
        <rebrandcard oldpic="/images/rb/ginginold.jpg" newpic="/images/lg/logo13.png"/>
      </div>
      <div class="row col-11 _mg-at _pd-0px">
        <rebrandcard oldpic="/images/rb/paypointold.png" newpic="/images/lg/logo22.png"/>
        <rebrandcard oldpic="/images/rb/saladold.png" newpic="/images/lg/logo2.png"/>
      </div>

      <!-- business card -->
      <div class="textbrand col-10 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Business Card</h2>
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
    </div>

    <div class="row _pd-64px">
      <div class="bio-button -dark _mg-at">
        <nuxt-link to="/contact">
          <p>WANT YOUR OWN BRAND?</p>
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
import Rebrandcard from "~/components/rebrandcard";
export default {
  components: { Work, Brandcard, Rebrandcard },
  head() {
    return {
      title: "Minnie C's Branding"
    };
  }
};
</script>


<style lang="scss" scoped>
.work1 {
  background-color: #ffcd00;
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

.rebrand {
  padding: 2%;
}

// .rebrand img{
//     display: block;
//     margin: auto;
//     max-width: 100%;
//     padding: 5%;
// }

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
    color: #ffcd00;
  }
}
</style>
