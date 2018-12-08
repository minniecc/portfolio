<template>
  <div class="everything">
    <Header/>
    <!-- Content -->
    <main class="min-height-100vh _ovfx-hd _alit-ct">
      <nuxt/>
    </main>

    <Footer/>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Work+Sans");

.everything {
  font-family: "Work Sans", sans-serif;
}
</style>

<script>
import Header from "~/components/layout/Header";
import Footer from "~/components/layout/Footer";
export default {
  components: {
    Header,
    Footer
  }
};
</script>