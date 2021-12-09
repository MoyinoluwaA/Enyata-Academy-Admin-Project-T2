<template>
    <div class="modal fade" id='exampleModal' tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content p-2">
                <div class=" border-0 modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div> 
                <div class="modal-body ">
                    <p class="text-center w-75 mx-auto">{{ modalText }}</p>
                </div>
                <div class="row justify-content-center mb-5">
                    <button type="button" class="btn btn-login-purple col-3" @click="$emit('click')">Yes</button>
                    <button type="button" class="btn col-3 ms-3" data-bs-dismiss="modal">No</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        modalText: String
    }
}
</script>
