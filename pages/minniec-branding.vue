<template>
  <div class="minniec-branding col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <!-- Logo Row -->
    <div class="row">
      <div class="col-12">
        <!-- logo -->
        <div class="_mgt-128px _alit-ct _tal-ct _h-256px-lg _h-256px-md _h-256px-sm _h-128px">
          <nuxt-link to="/">
            <img class="_dp-b _mg-at _h-70pct" src="~/assets/images/logomn.png" alt>
            change to BRANDING with graphic
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- <h1 class="_fs-3-md _fs-4">BRANDING</h1>
    <hr>-->
    <!-- about 1 -->
    <div class="row">
      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="workbrand"></div>
      </div>

      <!-- logo -->
      <div class="textbrand col-12 _tal-ct _mg-at _alit-ct">
        <h2 class="_fs-4-md _fs-5">LOGO</h2>
        <hr class="line col-1">
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
        <hr class="line col-1">
      </div>

      <div class="row col-11 _mg-at _pd-0px">
        <rebrandcard
          oldpic="/images/rb/oldinvo.jpg"
          newpic="/images/rb/newinvo.png"
          brand="InvoDesign"
          sub="A boutique full-service architecture firm in Melbourne that delivers value and results to our clients across Victoria and Interstate"
        />
        <rebrandcard
          oldpic="/images/rb/ginginold.jpg"
          newpic="/images/lg/logo13.png"
          brand="Gingin Grass Fed"
          sub="Gingin Grass Fed Beef's mission is to supply Western Australia's best tasting free range, hormone and chemical free Beef."
        />
      </div>
      <div class="row col-11 _mg-at _pd-0px">
        <rebrandcard
          oldpic="/images/rb/paypointold.png"
          newpic="/images/lg/logo22.png"
          brand="Pay Point"
          sub="An established mobile phone shop in Bangkok, providing customers with endless choices of smartphone & watches"
        />
        <rebrandcard
          oldpic="/images/rb/saladold.png"
          newpic="/images/lg/logo2.png"
          brand="Salala"
          sub="The best vegetarian restaurant in Edinburgh, Salala, offers up mouth-watering vegan and vegetarian breakfasts, lunches and dinners in the capital."
        />
      </div>

      <!-- business card -->
      <div class="textbrand col-10 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Business Card</h2>
        <hr class="line col-1">
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
.minniec-branding {
  background-color: #ffcd00;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: white;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: white;
}

p {
  font-family: "Poppins", sans-serif;
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
  border: 5px solid #ffcd00;
  padding: 2%;
}

.businesscard img {
  display: block;
  margin: 5% auto;
  max-width: 100%;
  box-shadow: 0 12px 20px lightgrey;
}

.bio-button {
  border: none;
  border-radius: 50px;
}

.bio-button p {
  padding: 0 15px;
  color: white;
  &:hover {
    color: #ffcd00;
  }
}

.line {
  box-sizing: border-box;
  border: 1.5px solid white;
}
</style>
