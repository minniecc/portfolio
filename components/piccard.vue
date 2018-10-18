<template>
    <div class="piccard col-lg-5 col-md-12 col-sm-12 _tal-ct _dp-b _bgs-ct _bgrp-nrp _bgpst-ct" :style="`background-image: url(${imageUrl})`">
        <p>{{ pictext }}</p>
    </div>
</template>

<style lang="scss" scoped>
.piccard {
    height: 350px;
    background: black;
    // border-radius: px;
    border: 10px solid white;
    padding: 5%;
    margin: 2% auto;
    background-image: url(/images/film/1.jpg);
    // background-image: url('{{imageUrl}}');

    p {
        color: white;
        padding-top: 250px;
    }
    
}
</style>

<script>
export default {
    props: ['imageUrl','pictext'],
}

</script>