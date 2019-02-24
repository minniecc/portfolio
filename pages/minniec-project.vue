<template>
  <div class="minniec-project col-lg-8 col-md-8 col-sm-10 col-10 _mg-at">WORK IN PROCESS!
    <h1 class="_fs-3-md _fs-4">PERSONAL PROJECT</h1>
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

    <!-- Illustration -->
    <div class="text col-12 _tal-ct _mg-at _alit-ct _pd-24px">
      <h2 class="_fs-4-md _fs-5">Illustration</h2>
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

.bio-button p {
  color: white;
  &:hover {
    color: #f26e64;
  }
}
</style>
