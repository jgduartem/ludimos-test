<template lang="">
    <div>
       <b-navbar fixed-top shadow collapsible>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://www.ludimos.com/assets/img/logo.b23101ee.svg"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons" >
                    <router-link to='/compare'>
                        <a class="button is-primary">
                            Compare Videos
                        </a>
                    </router-link>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar> 
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style lang="">
    
</style>