<template>
  <div class="aboutpage col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">ABOUT</h1>
    <!-- about 1 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~assets/images/minnie.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">NAME</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >My given name is Chantchanok Chantpakpimon. Chantchanok or ฉันท์ชนก means to be appreciated by those around me. It is actually a combination of the first word of my family name "Chant" and the ending part of my mom's name which is "chanok" from Ratchanok. You can also call me Minnie.</p>
      </div>
    </div>
    <!-- about 2 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~assets/images/bio.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">BIO</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >I design feeling and experiences through different kinds of medium. I am a self-taught front-end devoloper. I cook, bake and sing as my getaway time. I enjoy going to the gym and eating healthy but I also love going to a good buffet and boba tea is life. I have been to 16 countries and counting. I have mastered the "24 game". I'm looking for a decent competitor so please let me know if you're interested.</p>
      </div>
    </div>
    <!-- about 3 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~assets/images/bg.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">BACKGROUND</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >I was born and raised in Bangkok, Thailand. During my years growing up I had opportunities to live in Connecticut, Taiwan, Toronto and Melbourne. Always feel free to ask me about this in person. At university, I studied industrial design which is not designing factories! I have a sister, a brother and a dog but I'm the biggest one so yeah I was the PROJECT!</p>
      </div>
    </div>
    <!-- about 4 -->
    <div class="row">
      <div class="aboutpic _mg-at col-lg-4 col-md-5 col-sm-6 col-10">
        <img src="~assets/images/work.jpg" alt>
      </div>
      <div class="abouttext col-lg-8 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">ROLES</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >I am finishing my degree at Chulalongkorn university, working on my technology based senior project. I also work as a freelancer. I create brands for companies and graphic designs such as product label, business card, presentation document and etc. I also tutor my brother math.</p>
      </div>
    </div>

    <div class="row _pd-64px">
      <div class="bio-button -dark _mg-at">
        <a href="/pdf/minniecv.pdf" download>
          <p class="_fs-5-md _fs-6-sm _fs-7">DOWNLOAD MY CV</p>
        </a>
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
.aboutpage {
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
  font-family: "Muli", sans-serif;
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
  border: 5px solid white;
}

.bio-button p {
  color: white;
  &:hover {
    color: #9bd7db;
  }
}
</style>
