<template>
    <header class="header">
        <div class="headerleft">
            <router-link  to="/inquire">
            <img src="../assets/image/head_03.svg">
            </router-link>
        </div>
        <div class="headercenter">
            <img src="../assets/image/head_01.jpg">
        </div>
        <div class="headerright">
            <router-link  to="/cart">
                <img src="../assets/image/head_04.svg">
            </router-link>
            <router-link  to="/vtop">
                <img src="../assets/image/head_02.svg">
            </router-link>
        </div>
    </header>
    
</template>

<script>
import Vtop from "../pages/Vtop";

export default {
    components: {
        "v-top": Vtop,
    },
}
</script>