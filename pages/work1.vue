<template>
    <div class="work1 col-8 _mg-at">
        <h1 class="_fs-3-md _fs-4">BRANDING</h1>
        <!-- about 1 -->
        <div class="row">
            <div class="workbrand col-4 ">
                <img src="~assets/images/minnielogo.png" alt="">
            </div>
            <div class="workbrand col-4 ">
                <img src="~assets/images/minnielogo.png" alt="">
            </div>
            <div class="workbrand col-4 ">
                <img src="~assets/images/minnielogo.png" alt="">
            </div>
        
        <!-- logo -->
            <div class="textbrand col-10 _tal-ct _mg-at _alit-ct">
                <h2 class="_fs-4-md _fs-5">LOGO</h2>
                <!-- <p class="_fs-5-md _fs-6-sm _fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?
                </p> -->
            </div>

            <brandcard
            logo1="/images/lg/logo1.png"
            logo2="/images/lg/logo2.png"
            logo3="/images/lg/logo3.png"
            logo4="/images/lg/logo4.png"/>

            <brandcard
            logo1="/images/lg/logo5.png"
            logo2="/images/lg/logo6.png"
            logo3="/images/lg/logo7.png"
            logo4="/images/lg/logo8.png"/>

            <brandcard
            logo1="/images/lg/logo9.png"
            logo2="/images/lg/logo10.png"
            logo3="/images/lg/logo11.png"
            logo4="/images/lg/logo12.png"/>

            <brandcard
            logo1="/images/lg/logo13.png"
            logo2="/images/lg/logo14.png"
            logo3="/images/lg/logo15.png"
            logo4="/images/lg/logo16.jpg"/>
           
        <!-- Re-branding -->
            <div class="textbrand col-10 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
                <h2 class="_fs-4-md _fs-5">Re-branding</h2>
                <!-- <p class="_fs-5-md _fs-6-sm _fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?
                </p> -->
            </div>
        
            <div class="row col-10 _mg-at _pd-0px">
                <rebrandcard
                oldpic="/images/rb/oldinvo.jpg"
                newpic="/images/rb/newinvo.png"/>
                <rebrandcard
                oldpic="/images/rb/oldinvo.jpg"
                newpic="/images/rb/newinvo.png"/>
            </div>

        <!-- business card -->
            <div class="textbrand col-10 _tal-ct _mg-at _dp-b _alit-ct _jtfit-ct">
                <h2 class="_fs-4-md _fs-5">Business Card</h2>
                <!-- <p class="_fs-5-md _fs-6-sm _fs-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt consectetur commodi illum ea blanditiis facilis cumque. Illo cumque inventore officiis molestiae aspernatur quibusdam voluptatibus eum ipsum, ab, odio, eos quas?
                </p> -->
            </div>

            <div class="row col-10 _mg-at businesscard">
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/bc2.jpg" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/bc1.jpg" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/bc3.jpg" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/bc4.jpg" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/paypoint-01.png" alt="">
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 _tal-ct _dp-b">
                <img src="/images/bc/paypoint-02.png" alt="">
                </div>
            </div>
            
        </div>

        <div class="row _pd-64px">
            <div class="bio-button -dark _mg-at">
                <nuxt-link to="/contact"><p>WANT YOUR OWN BRAND?</p></nuxt-link>
            </div>
        </div>

        <div class="row _pd-64px">
            <Work/>
        </div>

    </div>
</template>

<script>
import Work from '~/components/Work'
import Brandcard from "~/components/brandcard"
import Rebrandcard from "~/components/rebrandcard"
export default { 
  components: {Work, Brandcard, Rebrandcard},
  head () {
    return {
      title: 'Branding'
    }
  }
}
</script>


<style lang="scss" scoped>

.work1 {
    background-color: #ffcd00;
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

.textbrand {
    padding: 5%;
}

.workbrand img{
    display: block;
    margin: auto;
    max-width: 90%;
    padding: 5%;
}

.rebrand {
    padding: 2%;
}

// .rebrand img{
//     display: block;
//     margin: auto;
//     max-width: 100%;
//     padding: 5%;
// }


.businesscard {
    margin: auto;
    background: white;
    padding: 2%;
}

.businesscard img{
    display: block;
    margin: 5% auto;
    max-width: 100%;
    box-shadow: 0 12px 20px lightgrey;;
}


.bio-button p{
    color: white;
    &:hover {
        color: #ffcd00;
    }
}

</style>
