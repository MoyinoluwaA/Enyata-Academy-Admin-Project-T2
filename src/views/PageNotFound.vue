<template>
    <section class=" row justify-content-center align-items-center vh-100">
        <div class="text-center">
            <div class="col-12 mx-auto error404">
                <img src='../assets/images/Error404NotFound.png' class="img-fluid" alt="Error404">
            </div>
            <div class="col-12 ">
                <h2>Page not found!</h2>
                <p>Sorry we can't find what you are looking for</p>
                <router-link to="/">
                    <button type="button" class="btn btn-login-purple">Try Again</button>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style>

</style>