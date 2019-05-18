<template>
  <div>
    <!-- Header -->
    <header class="row col-12 _jtfct-spbtw _mg-at _pdh-48">
      <div class="leftnav col-md-2 col-6">
        <!-- logo -->
        <div class="logoleft _h-64px-lg _h-64px-md _h-64px-sm _h-64px">
          <nuxt-link to="/">
            <img class="_dp-b _h-100pct" src="~/assets/images/logoname.png" alt>
          </nuxt-link>
        </div>
      </div>

      <div class="rightnav col-md-10 col-6">
        <!-- Nav menu -->
        <div class="menu _dp-n _dp-il-md _fs-7-lg _fs-7-md">
          <!-- <nuxt-link to="/">Home</nuxt-link> -->
          <nuxt-link to="/about">MINNIECC ˚•</nuxt-link>
          <nuxt-link to="/minniec-branding">Branding ˚•</nuxt-link>
          <nuxt-link to="/minniec-website">UX&UI ˚•</nuxt-link>
          <nuxt-link to="/minniec-photo">Photo ˚•</nuxt-link>
          <nuxt-link to="/minniec-project">My Project ˚•</nuxt-link>
          <nuxt-link to="/contact">Get In Touch</nuxt-link>
        </div>

        <!-- social -->
        <div class="social _dp-il _fs-4-md _fs-4">
          <!-- <a href="https://www.facebook.com/MINNIECHANTCHANOK" target="_blank">
          <i class="fab fa-facebook-square"></i>
          </a>-->
          <a href="http://line.me/ti/p/~minniecc" target="_blank">
            <i class="fab fa-line"></i>
          </a>
          <a href="mailto:chantchanokch@gmail.com?Subject=" target="_top">
            <i class="fas fa-envelope-square"></i>
          </a>
        </div>

        <!-- HBG -->
        <div class="nav _dp-il-sm _dp-il _dp-n-md _fs-5-lg _fs-5-md _fs-6">
          <!-- Hamburger -->
          <div class="bio-accordion _dp-il">
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
                  <p>MINNIECC</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/minniec-branding">
                  <p>Branding</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/minniec-website">
                  <p>UX&UI</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/minniec-photo">
                  <p>Photography</p>
                </nuxt-link>
              </div>
              <div>
                <nuxt-link to="/minniec-project">
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
      </div>
    </header>
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
  background-color: rgba(255, 255, 255, 1);
  &:hover {
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1);
  }
}

.bio-accordion-content p {
  padding-left: 10%;
  align-content: right;
  text-align: right;
  margin-top: 12px;
}

.nav {
  // padding: 15px 0 0 15px;
  color: #333333;
}

.nav p:hover {
  color: #9bd7db;
}

.nav p:active {
  // color WHILE click
  color: #ffa69e;
}

.nav :visited {
  color: #333333;
}

// .navbar {
//   width: 50vh;
// }

.logoleft {
  margin: 15px 0;
}

.rightnav {
  margin: auto 0;
  text-align: right;
}

.menu {
  color: #333333;
  & a {
    color: #333333;
    padding-left: 10px;
    font-weight: 600;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    &:hover {
      color: #9bd7db;
    }
    &:active {
      color: #ffa69e;
    }
  }
}

.social {
  padding: 15px 15px 0 0;
}

.social i {
  margin: 0 0 0 15px;
}

.social a {
  color: #333333;
}

.social a:hover {
  color: #9bd7db;
}
</style>

