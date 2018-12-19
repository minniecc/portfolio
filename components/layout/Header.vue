<template>
  <div>
    <!-- Header -->
    <header class="row col-12 _jtfct-spbtw _mg-at">
      <!-- HBG -->
      <div class="nav _fs-3-lg _fs-3-md _fs-4">
        <!-- Accordion – With Icon -->
        <div class="bio-accordion">
          <input id="ar1" type="checkbox" name="ar" class="_dp-n">
          <label for="ar1">
            <i class="fas fa-bars"></i>
          </label>
          <div class="bio-accordion-content navbar">
            <div>
              <nuxt-link to="/">
                <p>Home</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/about">
                <p>About</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/work1">
                <p>Branding</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/work2">
                <p>UX&UI</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/work3">
                <p>Photography</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/work4">
                <p>Personal Project</p>
              </nuxt-link>
            </div>
            <div>
              <nuxt-link to="/contact">
                <p>Get In Touch</p>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <!-- social -->
      <div class="social _tal-r _fs-3-md _fs-4">
        <a href="https://www.facebook.com/MINNIECHANTCHANOK" target="_blank">
          <i class="fab fa-facebook-square"></i>
        </a>
        <a href="http://line.me/ti/p/~minniecc" target="_blank">
          <i class="fab fa-line"></i>
        </a>
        <!-- <a href="https://www.linkedin.com/in/minniecc/">
			<i class="fab fa-linkedin-in"></i>
        </a>-->
        <!-- <a href="https://www.youtube.com/minniechantchanok/">
			<i class="fab fa-youtube"></i>
        </a>-->
        <a href="mailto:chantchanokch@gmail.com?Subject=" target="_top">
          <i class="far fa-envelope"></i>
        </a>
      </div>
    </header>
    <!-- Logo Row -->
    <div class="row">
      <div class="col-12">
        <!-- logo -->
        <div class="logo _alit-ct _tal-ct _h-256px-lg _h-256px-md _h-256px-sm _h-128px">
          <nuxt-link to="/">
            <img class="_dp-b _mg-at _h-80pct" src="~/assets/images/minnielogo.png" alt>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
header {
  // appear when hover
  // opacity: 0;
  // transition: 1s;
  // &:hover {
  // 	opacity: 1;
  // }
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  z-index: 9;
  background-color: rgba(255, 255, 255, 0.8);
  // box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
}

.bio-accordion-content p {
  padding-left: 10%;
}
.nav {
  padding: 15px 0 0 15px;
  color: #f26e64;
}

.nav p:hover {
  color: #9bd7db;
}

.nav p:active {
  color: black;
}

.nav :visited {
  color: #f26e64;
}

.navbar {
  width: 50vh;
}

.logo {
  margin: 80px 0 30px 0;
}

.social {
  padding: 15px 15px 0 0;
  word-spacing: 0.5em;
}

.social a {
  color: #f26e64;
}

.social a:hover {
  color: #9bd7db;
}
</style>

