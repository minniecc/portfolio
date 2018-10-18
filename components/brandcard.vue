<template>
    <div class="row col-10 _mg-at logo">
        <div class="logopic col-lg-3 col-md-3 col-sm-6 col-6 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct" :style="`background-image: url(${logo1})`">
        </div>
        <div class="logopic col-lg-3 col-md-3 col-sm-6 col-6 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct" :style="`background-image: url(${logo2})`">
        </div>
        <div class="logopic col-lg-3 col-md-3 col-sm-6 col-6 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct" :style="`background-image: url(${logo3})`">
        </div>
        <div class="logopic col-lg-3 col-md-3 col-sm-6 col-6 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct" :style="`background-image: url(${logo4})`">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.logo {
    padding: 2%;
    background: white;
}

.logopic {
    display: block;
    margin: auto;
    width: 100%;
    background: white;
    height: 160px;
}

</style>

<script>
export default {
    props: ['logo1','logo2','logo3','logo4'],
}

</script>