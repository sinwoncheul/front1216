<template>
    <div>

    </div>
</template>

<script>
    export default {
        created() {
            const ret = confirm("로그아웃 하시겠습니까?")
            if(ret){
                sessionStorage.removeItem("TOKEN1");
                sessionStorage.removeItem("TYPE");
                this.$emit('changeLogged');
                this.$router.push({ path: "/home" });
                
            } else {
                this.$router.push({ path: "/home" });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>