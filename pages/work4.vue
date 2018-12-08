<template>
  <div class="work4 col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <h1 class="_fs-3-md _fs-4">PERSONAL PROJECT</h1>
    <p
      class="_fs-5-md _fs-6-sm _fs-7"
    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?</p>

    <div class="row">
      <!-- logo -->
      <div class="textbrand col-12 _alit-ct">
        <h2 class="_fs-4-md _fs-5">CARDS & GIFTS</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?</p>
      </div>

      <div class="row _mg-at logo">
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
      </div>
      <div class="row _mg-at logo">
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-2 col-md-3 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
      </div>

      <!-- Re-branding -->
      <div class="textbrand col-12 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">Wedding Invitation</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?</p>
      </div>

      <div class="row _mg-at rebrand">
        <div class="col-lg-3 col-md-6 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
      </div>

      <!-- business card -->
      <div class="textbrand col-12 _dp-b _alit-ct _jtfit-ct">
        <h2 class="_fs-4-md _fs-5">illustration</h2>
        <p
          class="_fs-5-md _fs-6-sm _fs-7"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?</p>
      </div>

      <div class="row _mg-at businesscard">
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
          <img src="~assets/images/minnielogo.png" alt>
        </div>
      </div>
    </div>

    <div class="row _pd-64px">
      <div class="bio-button -dark _mg-at">
        <nuxt-link to="/contact">
          <p>CONTACT ME!</p>
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
export default {
  components: { Work },
  head() {
    return {
      title: "Branding"
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
  letter-spacing: 0.1em;
  font-weight: 600;
  padding: 10% 0 5% 0;
  color: white;
}

h2 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  font-weight: 600;
  color: white;
}

.textbrand {
  padding: 5%;
}

.workbrand img {
  display: block;
  margin: auto;
  max-width: 90%;
  padding: 5%;
}

.logo {
  padding: 2%;
}
.logo img {
  display: block;
  margin: auto;
  max-width: 100%;
  padding: 5%;
  &:hover {
    position: absolute;
    z-index: 5;
    max-width: 200%;
    // how to add transition?
  }
}

.rebrand {
  padding: 2%;
}

.rebrand img {
  display: block;
  margin: auto;
  max-width: 100%;
  padding: 5%;
}

.businesscard {
  padding: 2%;
}

.businesscard img {
  display: block;
  margin: auto;
  max-width: 100%;
  padding: 5%;
}

.bio-button p {
  color: white;
  &:hover {
    color: #f26e64;
  }
}
</style>
