<template>
  <div class="aboutpage col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <!-- Logo Row -->
    <div class="row">
      <div class="col-12">
        <!-- logo -->
        <div class="logo _mgt-128px _alit-ct _tal-ct _h-256px-lg _h-256px-md _h-256px-sm _h-128px">
          <nuxt-link to="/">
            <img class="mn _dp-b _mg-at _h-70pct" src="~/assets/images/logomn.png" alt>
          </nuxt-link>
          <div class="shadow"></div>
        </div>
      </div>
    </div>

    <h1 class="_fs-3-md _fs-4">ABOUT MINNIECC</h1>
    <!-- about 1 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~/assets/images/minnie.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">NAME</h2>
        <hr class="linesmall col-2">
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >My given name is Chantchanok Chantpakpimon. Chantchanok or ฉันท์ชนก means to be appreciated by those around me. It is actually a combination of the first word of my family name "Chant" and the ending part of my mom's name which is "chanok" from Ratchanok. You can also call me Minnie.</p>
      </div>
    </div>
    <hr class="line">
    <!-- about 2 -->
    <div class="row">
      <div class="aboutpicblue _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~/assets/images/bio.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">BIO</h2>
        <hr class="linesmall col-2">
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >I design feeling and experiences through different kinds of medium. I am a self-taught front-end devoloper. I cook, bake and sing as my getaway time. I enjoy going to the gym and eating healthy but I also love going to a good buffet and boba tea is life. I have been to 16 countries and counting. I have mastered the "24 game". I'm looking for a decent competitor so please let me know if you're interested.</p>
      </div>
    </div>
    <hr class="line">
    <!-- about 3 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~/assets/images/bg.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">BACKGROUND</h2>
        <hr class="linesmall col-2">
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >I was born and raised in Bangkok, Thailand. During my years growing up I had opportunities to live in Connecticut, Taiwan, Toronto and Melbourne. Always feel free to ask me about this in person. At university, I studied industrial design which is not designing factories! I have a sister, a brother and a dog but I'm the biggest one so yeah I was the PROJECT!</p>
      </div>
    </div>
    <hr class="line">
    <!-- about 4 -->
    <div class="row">
      <div class="aboutpicblue _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~/assets/images/work.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">ROLES</h2>
        <hr class="linesmall col-2">
        <p class="_fs-5-md _fs-6-sm _fs-7">
          I graduated from Chulalongkorn university's Industrial Design program, with my technology based senior project
          <a
            href="http://shipsailing.club"
          >"That ship has sailed"</a>. I also work as a freelancer. I create brands for companies and graphic designs such as product label, business card, presentation document, website design and etc. I also tutor my brother math.
        </p>
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
      title: "about MinnieCC"
    };
  }
};
</script>


<style lang="scss" scoped>
.aboutpage {
  background-color: white;
}

h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  padding-bottom: 5%;
  // color: white;
  background: -webkit-linear-gradient(#f26e64, #9bd7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 600;
  // color: white;
  background: -webkit-linear-gradient(#f26e64, #9bd7db);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-family: "Poppins", sans-serif;
}

.logo {
  animation-name: logo;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  position: relative;
  top: 0;
}

@keyframes logo {
  from {
    transform: translate(0, 0px);
  }
  55% {
    transform: translate(0, 15px);
  }
  to {
    transform: translate(0, -0px);
  }
}

.mn {
  animation-name: mn;
  -webkit-animation-name: mn;
  -webkit-animation-duration: 1.5s;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
  -webkit-animation-direction: alternate-reverse;
}

@keyframes mn {
  0% {
    transform: rotate(1.5deg);
  }

  100% {
    transform: rotate(-1.5deg);
  }
}

.shadow {
  height: 30px;
  margin-left: 37.5%;
  margin-top: 30px;
  border-radius: 100%;
  animation-name: shadow;
  -webkit-animation-name: shadow;
  animation-timing-function: ease-in-out;
  -webkit-animation-timing-function: ease-in-out;
  background: #eaeaea;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  transition-duration: 2s;
  opacity: 0.4;
}

@keyframes shadow {
  0% {
    background: #ffa69e;
    width: 150px;
  }
  25% {
    background: #e3e3e3;
  }
  50% {
    background: #d8d8d8;
  }
  75% {
    background: #d1d1d1;
  }
  100% {
    background: #cacaca;
    width: 170px;
    margin-left: 37.5%;
  }
}

.abouttext {
  padding: 5% 5% 5% 2%;
}

.aboutpic {
  margin: auto;
}

.aboutpic img {
  display: block;
  margin: auto;
  max-width: 80%;
  border: 8px solid #ffa69e;
  border-radius: 50%;
}

.aboutpicblue img {
  display: block;
  margin: auto;
  max-width: 80%;
  border: 8px solid #9bd7db;
  border-radius: 50%;
}

.mgbutt {
  margin: 16px auto auto auto;
  border: none;
  border-radius: 50px;
}

.bio-button p {
  padding: 0 15px;
  color: white;
  margin: auto;
  &:hover {
    color: #9bd7db;
  }
}

.line {
  border: 1px solid lightgrey;
  opacity: 0.5;
}

.linesmall {
  box-sizing: border-box;
  margin-top: 0;
  border: 1.5px solid #ffa69e;
  opacity: 0.5;
}
</style>
