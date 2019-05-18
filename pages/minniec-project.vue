<template>
  <div class="minniec-project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">
    WORK IN PROCESS!
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

    <!-- <h1 class="_fs-3-md _fs-4">PERSONAL PROJECT</h1> -->
    <!-- INSERT HERO PIC -->
    <div class="row">
      <div class="col-11 _alit-ct _mg-at _h-512px-lg _h-512px-md _h-512px-sm _h-256px _bgcl-white">
        <div class="heroproject"></div>
      </div>
    </div>

    <!-- PROJECTS -->
    <!-- UNI -->
    <div class="text col-12 _tal-ct _mg-at _alit-ct _pd-24px">
      <h2 class="_fs-4-md _fs-5">School Projects</h2>
      <hr class="line col-1">
      <p
        class="_fs-5-md _fs-6-sm _fs-7"
      >My projects during my study at Industrail Design, Chulalongkorn University. Both individual and group projects.</p>
    </div>

    <div class="row col-11 _mg-at _pd-0px">
      <projectcard
        project="GETBRIC"
        pic="/images/pp/getbric-hero.png"
        page="getbric"
        des="A boardgame that you can build, play and challenge your creativity."
      />
      <projectcard
        project="SUM-ONE"
        pic="/images/pp/sumone.png"
        page="sum-one"
        des="Wearable object designed for K-POP fans to help them with their concert projects"
      />
      <projectcard
        project="Salala"
        pic="/images/pp/salala.png"
        page="salala"
        des="Product, Packaging and Food truck design for a healthy food company, Salala"
      />
      <projectcard
        project="Adidas: Exp Design"
        pic="/images/pp/adi1.png"
        page="adidas"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
      <projectcard
        project="KFC GAME"
        pic="/images/web/kfc.png"
        page="project1"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
      <projectcard
        project="KFC GAME"
        pic="/images/web/kfc.png"
        page="project1"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
    </div>

    <!-- Illustration -->
    <div class="text col-12 _tal-ct _mg-at _alit-ct _pd-24px">
      <h2 class="_fs-4-md _fs-5">Illustration</h2>
      <hr class="line col-1">
      <p class="_fs-5-md _fs-6-sm _fs-7">Adobe illustrator, Adobe InDesign and Procreate</p>
    </div>

    <div class="row col-11 _mg-at _pd-0px">
      <projectcard
        project="Lettering"
        pic="/images/lettering/1.jpg"
        page="lettering"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
      <projectcard
        project="Wedding Invitation"
        pic="/images/pp/weddingkrupaninvite-01.png"
        page="PMwedding"
        des="A wedding invitation card design for my beloved vocal teacher."
      />
      <projectcard
        project="Kraivith: Line Sticker"
        pic="/images/pp/stickerline-04.png"
        page="line-ben"
        des="Character design for Line sticker sold on LINE Creators Market"
      />
      <projectcard
        project="MOM: Line Sticker"
        pic="/images/pp/stickerline-03.png"
        page="line-mom"
        des="Character design for Line sticker sold on LINE Creators Market"
      />
      <projectcard
        project="Chant"
        pic="/images/pp/chant-05.png"
        page="chant"
        des="Patterns inspired by Thai dessert: Ruam Mitr, Bua Roy, Lod Chong and Sakoo"
      />
      <projectcard
        project="Penguin"
        pic="/images/pp/penguin1-01.png"
        page="penguin"
        des="Shower curtain, one of the fastest ways to spruce up your bathroom"
      />
    </div>

    <!-- Jewellery -->
    <div class="text col-12 _tal-ct _mg-at _alit-ct _pd-24px">
      <h2 class="_fs-4-md _fs-5">Jewellery</h2>
      <hr class="line col-1">
      <p class="_fs-5-md _fs-6-sm _fs-7">I love interactive media. I code games with python too!</p>
    </div>

    <div class="row col-11 _mg-at _pd-0px">
      <projectcard
        project="KFC GAME"
        pic="/images/web/kfc.png"
        page="project1"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
      <projectcard
        project="KFC GAME"
        pic="/images/web/kfc.png"
        page="project1"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
      <projectcard
        project="KFC GAME"
        pic="/images/web/kfc.png"
        page="project1"
        des="Move your curser to navigate the bucket and try to catch all the chickens."
      />
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
import Projectcard from "~/components/projectcard";
export default {
  components: { Work, Brandcard, Projectcard },
  head() {
    return {
      title: "Minnie's Personal Projects"
    };
  }
};
</script>

<style lang="scss" scoped>
.minniec-project {
  background-color: #f26e64;
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

.textbrand {
  padding: 5%;
}

.heroproject {
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

.bio-button {
  border: none;
  border-radius: 50px;
}

.bio-button p {
  padding: 0 15px;
  color: white;
  &:hover {
    color: #f26e64;
  }
}

.line {
  box-sizing: border-box;
  border: 1.5px solid white;
}
</style>
