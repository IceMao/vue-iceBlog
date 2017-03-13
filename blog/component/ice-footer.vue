<template>
    <footer>
        <p class="container">Powered by: ice cream Copyright © IceMao</p>
    </footer>
</template>
<script type="text/javascript">
export default {
    data() {
            return {
                iCheck: this.model,
            }
        },
        props: {
            "model": {
                type: [String, Number, Boolean], //选择比较
                default: false,
            },
        },
        methods: {

        },
        computed: {


        },
        created: function() {

        }
}
</script>
<style scoped lang="scss">
footer {
    font-size: 15px;
    height: 150px;
    line-height: 150px;
    margin-top: 100px!important;
    text-align: center;
    background-color: #2a2a2b;
    color: #00BCD4;
}

footer a {
    color: #fff;
}
</style>
