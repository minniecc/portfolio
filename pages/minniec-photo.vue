<template>
  <div class="minniec-photo col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    <!-- Logo Row -->
    <div class="row">
      <div class="col-12">
        <!-- logo -->
        <div class="_mgt-128px _alit-ct _tal-ct _h-256px-lg _h-256px-md _h-256px-sm _h-128px">
          <nuxt-link to="/">
            <img class="_dp-b _mg-at _h-70pct" src="~/assets/images/logomn.png" alt>
            change to logo with graphic
          </nuxt-link>
        </div>
      </div>
    </div>

    <!-- <h1 class="_fs-3-md _fs-4">PHOTOGRAPHY</h1> -->
    <!-- digital -->
    <div class="col-10 _alit-ct _mg-at">
      <h2 class="_fs-4-md _fs-5">DIGITAL</h2>
      <hr class="line col-1">
      <p class="_fs-5-md _fs-6-sm _fs-7 _mg-at _tal-ct">Canon D70</p>
    </div>
    <!-- using template for card -->
    <div class="row col-12 _mg-at film">
      <piccard pictext imageUrl="./images/dp/dp4.jpg"/>
      <piccard pictext imageUrl="./images/dp/dp6.jpg"/>
      <piccard pictext imageUrl="./images/dp/dp7.jpg"/>
      <piccard pictext imageUrl="./images/dp/dp8.png"/>
      <piccard pictext imageUrl="./images/dp/dp10.png"/>
      <piccard pictext imageUrl="./images/dp/dp11.png"/>
      <piccard pictext imageUrl="./images/dp/dp12.png"/>
      <piccard pictext imageUrl="./images/dp/dp13.png"/>
      <piccard pictext imageUrl="./images/dp/dp14.png"/>
      <piccard pictext imageUrl="./images/dp/dp15.png"/>
      <piccard pictext imageUrl="./images/dp/dp16.png"/>
      <piccard pictext imageUrl="./images/dp/dp17.png"/>
      <piccard pictext imageUrl="./images/dp/dp18.png"/>
      <piccard pictext imageUrl="./images/dp/dp19.png"/>
      <piccard pictext imageUrl="./images/dp/dp20.png"/>
      <piccard pictext imageUrl="./images/dp/dp21.png"/>
      <piccard pictext imageUrl="./images/dp/dp22.png"/>
      <piccard pictext imageUrl="./images/dp/dp23.png"/>
      <piccard pictext imageUrl="./images/dp/dp1.jpg"/>
      <piccard pictext imageUrl="./images/dp/dp2.jpg"/>
      <piccard pictext imageUrl="./images/dp/dp3.jpg"/>
    </div>

    <!-- film -->
    <div class="col-10 _alit-ct _mg-at">
      <h2 class="_fs-4-md _fs-5">film</h2>
      <hr class="line col-1">
      <p class="_fs-5-md _fs-6-sm _fs-7 _mg-at _tal-ct">Canon EOS 500n // Disposable Camera</p>
    </div>

    <!-- using template for card -->
    <div class="row col-12 _mg-at film">
      <piccard pictext imageUrl="./images/film/1.jpg"/>
      <piccard pictext imageUrl="./images/film/2.jpg"/>
      <piccard pictext imageUrl="./images/film/3.jpg"/>
      <piccard pictext imageUrl="./images/film/4.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/6.jpg"/> -->
      <piccard pictext imageUrl="./images/film/7.jpg"/>
      <piccard pictext imageUrl="./images/film/8.jpg"/>
      <piccard pictext imageUrl="./images/film/10.jpg"/>
      <piccard pictext imageUrl="./images/film/11.jpg"/>
      <piccard pictext imageUrl="./images/film/12.jpg"/>
      <piccard pictext imageUrl="./images/film/13.jpg"/>
      <piccard pictext imageUrl="./images/film/14.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/15.jpg"/> -->
      <piccard pictext imageUrl="./images/film/16.jpg"/>
      <piccard pictext imageUrl="./images/film/17.jpg"/>
      <piccard pictext imageUrl="./images/film/18.jpg"/>
      <piccard pictext imageUrl="./images/film/19.jpg"/>
      <piccard pictext imageUrl="./images/film/20.jpg"/>
      <piccard pictext imageUrl="./images/film/21.jpg"/>
      <!-- <piccard pictext="" imageUrl="./images/film/22.jpg"/> -->
      <piccard pictext imageUrl="./images/film/23.jpg"/>
      <piccard pictext imageUrl="./images/film/24.jpg"/>
      <piccard pictext imageUrl="./images/film/25.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/26.jpg"/> -->
      <piccard pictext imageUrl="./images/film/27.jpg"/>
      <piccard pictext imageUrl="./images/film/28.jpg"/>
      <piccard pictext imageUrl="./images/film/29.jpg"/>
      <piccard pictext imageUrl="./images/film/30.jpg"/>
      <piccard pictext imageUrl="./images/film/31.jpg"/>
      <piccard pictext imageUrl="./images/film/32.jpg"/>
      <piccard pictext imageUrl="./images/film/33.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/34.jpg"/> -->
      <piccard pictext imageUrl="./images/film/35.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/36.jpg"/> -->
      <piccard pictext imageUrl="./images/film/37.jpg"/>
      <piccard pictext imageUrl="./images/film/38.jpg"/>
      <piccard pictext imageUrl="./images/film/39.jpg"/>
      <!-- <piccard pictext="" imageUrl="./images/film/40.jpg"/> -->
      <piccard pictext imageUrl="./images/film/41.jpg"/>
      <piccard pictext imageUrl="./images/film/42.jpg"/>
      <piccard pictext imageUrl="./images/film/43.jpg"/>
      <piccard pictext imageUrl="./images/film/44.jpg"/>
      <piccard pictext imageUrl="./images/film/45.jpg"/>
      <piccard pictext imageUrl="./images/film/46.jpg"/>
      <piccard pictext imageUrl="./images/film/47.jpg"/>
      <!-- <piccard pictext imageUrl="./images/film/48.jpg"/> -->
      <!-- <piccard pictext imageUrl="./images/film/49.jpg"/> -->
      <!-- <piccard pictext="" imageUrl="./images/film/50.jpg"/> -->
      <piccard pictext imageUrl="./images/film/51.jpg"/>
      <!-- <piccard pictext="" imageUrl="./images/film/52.jpg"/> -->
      <piccard pictext imageUrl="./images/film/53.jpg"/>
      <piccard pictext imageUrl="./images/film/54.jpg"/>
      <piccard pictext imageUrl="./images/film/55.jpg"/>
    </div>

    <div class="row _pd-64px">
      <div class="bio-button -dark _mg-at">
        <nuxt-link to="/contact">
          <p>ASK FOR QUOTATION!</p>
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
import piccard from "~/components/piccard";
export default {
  components: { Work, piccard },
  head() {
    return {
      title: "Minnie's Photo"
    };
  }
};
</script>


<style lang="scss" scoped>
.minniec-photo {
  background-color: #ffa69e;
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
  letter-spacing: 0.1em;
  font-weight: 600;
  color: white;
}

p {
  font-family: "Poppins", sans-serif;
}

.digital {
  padding: 2%;
}

.digital img {
  display: block;
  margin: auto;
  max-width: 100%;
  padding: 5%;
}

.film {
  padding: 2%;
}

.film img {
  display: block;
  margin: auto;
  max-width: 100%;
  padding: 5%;
}

.bio-button {
  border: none;
  border-radius: 50px;
}

.bio-button p {
  padding: 0 15px;
  color: white;
  &:hover {
    color: #ffa69e;
  }
}

.film1 {
  display: block;
  height: 256px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(~assets/images/logomn.png);
}

.line {
  box-sizing: border-box;
  border: 1.5px solid white;
}
</style>