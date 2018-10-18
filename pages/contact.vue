<template>
<div>
  <h1>Get in touch</h1>
  <div class="row box col-lg-5 col-md-7 col-10 _mg-at _dp-b">
    <form action="mailto:chantchanokch@gmail.com" method="post" enctype="text/plain">
      <div class="bio-input">
        <h2>Name</h2>
        <input type="text" name="Name" placeholder="What should I call you?">
      </div>
      <div class="bio-input">
        <h2>Email</h2>
        <input type="text" name="Email" placeholder="Your Email">
      </div>
      <div class="bio-textarea">
        <h2>Message</h2>
        <textarea rows="3" name="Message" placeholder="Message"></textarea>
      </div>
      <div class="row _pd-12px">
      <input class="bio-button -dark _mg-at" type="submit" value="Send">
      </div>
    </form>
    
  </div>
  <div class="row socialcontact col-lg-5 col-md-7 col-10 _dp-b _fs-3">
			<a class="col-3" href="https://www.linkedin.com/in/minniecc/">
				<i class="fab fa-linkedin-in"></i>
			</a>
      <a class="col-3" href="https://www.facebook.com/MINNIECHANTCHANOK">
				<i class="fab fa-facebook-square"></i>
			</a>
			<a class="col-3" href="https://www.instagram.com/minnie_cc/">
				<i class="fab fa-instagram"></i>
			</a>
			<a class="col-3" href="https://www.youtube.com/minniechantchanok/">
				<i class="fab fa-youtube"></i>
			</a>
  </div>
</div>

</template>

<script>
export default {
      head () {
    return {
      title: 'Get In Touch'
    }
  }
}
</script>

<style lang="scss" scoped>

h1 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 30px;
    font-weight: 600;
    padding: 0 0 3% 0;
    color: #2f4858;
}

h2 {
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-size: 20px;
    font-weight: 600;
    color: white;
}

.box {
  background-color: #f9734a;
  padding: 15px;
}

.socialcontact {
  background: #2f4858;
  text-align: center;
  margin: 30px auto;
  padding: 10px;
  & a {
    color: white;
    &:hover {
      color: #f9734a;
    }
  }
}

</style>
