<template>
    <div class="work4 col-8 _mg-at">
        <h1 class="_fs-3-md _fs-4">UX&UI DESIGN</h1>
        <div class="icon row col-8 _jtfct-spbtw _tal-ct _mgh-at _mgbt-24px _fs-2-md _fs-3-sm _fs-4">
            <i class="fas fa-code"></i>
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-js-square"></i>
            <i class="fab fa-python"></i>
        </div>
        
        <p class="col-11 _tal-ct _mg-at _alit-ct _fs-5-md _fs-6-sm _fs-7">I recently began to be fascinated by web programming, e.g. developing apps and building websites. As this area complements my studies, I am keen to gain more experience in the field.
        </p>

        <div class="row">        
        <!-- landing page -->
            <div class="text col-11 _tal-ct _mg-at _alit-ct">
                <h2 class="_fs-4-md _fs-5">Landing page</h2>
                <p class="_fs-5-md _fs-6-sm _fs-7">The beauty of landing pages is that they can take pressure off the main site and be used for multiple campaigns without confusing your core messages.
                </p>
                <div class="row">
                    <webcard heading="Reguide" pic="/images/web/reguide.png" web="https://bouncing-ball-8ef95.firebaseapp.com/reguide/" 
                    des="An educational application. Help students plan their Uni Life ahead!"/>
                    <webcard heading="InvoDesign" pic="/images/web/invo.png" web="https://invodesignarc.wixsite.com/testsite" 
                    des="Architecture firm based in Melbourne, Australia"/>
                </div>
            </div>

        <!-- Games -->
            <div class="text col-11 _tal-ct _mg-at _alit-ct">
                <h2 class="_fs-4-md _fs-5">Games</h2>
                <p class="_fs-5-md _fs-6-sm _fs-7">I love interactive media. I code games with python too!
                </p>
                <div class="row">
                    <webcard heading="KFC GAME" pic="/images/web/kfc.png" web="https://bouncing-ball-8ef95.firebaseapp.com/week7game/" 
                    des="Move your curser to navigate the bucket and try to catch all the chickens"/>
                    <webcard heading="Drop a ball" pic="/images/web/ball.png" web="https://bouncing-ball-8ef95.firebaseapp.com/week5/p5-droping-ball-mouse/" 
                    des="Click to drop a ball!"/>
                </div>
                <div class="row">
                    <webcard heading="My Valentines" pic="/images/web/valentines.png" web="https://bouncing-ball-8ef95.firebaseapp.com/week5/valentines/" 
                    des="Record your feeling and let your love hear it while drawing on screen"/>
                </div>
            </div>

        <!-- app -->
            <div class="text col-11 _tal-ct _mg-at _alit-ct">
                <h2 class="_fs-4-md _fs-5">Application Design</h2>
                <p class="_fs-5-md _fs-6-sm _fs-7">
                    Wireframe, Testing, Interface
                </p>
                <div class="row">
                    <webcard heading="Reguide" pic="/images/web/reguide.png" web="https://bouncing-ball-8ef95.firebaseapp.com/reguide/" 
                    des="I used Adobe XD to show the interfeces of the application."/>
                </div>
            </div>
        </div>

        <div class="row _pd-64px">
            <div class="bio-button -dark _mg-at">
                <nuxt-link to="/contact"><p>WANT ME TO DESIGN A WEBSITE?</p></nuxt-link>
            </div>
        </div>

        <div class="row _pd-64px">
            <Work/>
        </div>

    </div>
</template>

<script>
import Work from '~/components/Work'
import webcard from '~/components/webcard'
export default { 
  components: {Work, webcard},
  head () {
    return {
      title: 'Minnie\'s Websites'
    }
  }
}
</script>


<style lang="scss" scoped>

.work4 {
    background-color: #93d6dd;;
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

.icon i{
    color: white;
    &:hover {
        color: #ffa69e;
        transition: color 0.5s;
    }
}

.text {
    padding: 5%;
}

.workbrand img{
    display: block;
    margin: auto;
    max-width: 90%;
    padding: 5%;
}

.logo {
    padding: 2%;
}
.logo img{
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

.rebrand img{
    display: block;
    margin: auto;
    max-width: 100%;
    padding: 5%;
}


.businesscard {
    padding: 2%;
}

.businesscard img{
    display: block;
    margin: auto;
    max-width: 100%;
    padding: 5%;
}


.bio-button p{
    color: white;
    &:hover {
        color: #93d6dd;
    }
}

</style>
