<template>
	<div>
		<div class="settings-profile-header mt-4 d-flex">
			<p class="fw-bold">Profiles Setting</p>
			<Button btnText='Edit' btnStyle='btn-edit' />
		</div>

		<div class="settings-profile-form">
		<form>
			<label class="settings-img-upload">
				<input class="settings-img-input" type="file" /> 
				<img src="../../../assets/icons/upload-img.svg" />
				<span class="settings-img-upload-text ms-4">Upload new image</span>
			</label>
			<span class="settings-profile-remove">x Remove</span>

			<div class="settings-admin-form">
				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Name</label>
					<input type="text" class="settings-form-control" placeholder="Cameron Williamson" />
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Email</label>
					<input type="text" class="settings-form-control" placeholder="debra.holt@example.com" />
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Phone Number</label>
					<input type="tel" class="settings-form-control" placeholder="(303) 555-0105" />
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Country</label>
					<input type="text" class="settings-form-control" placeholder="Afghanistan" />
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Address</label>
					<input type="text" class="settings-form-control-address" placeholder="3891 Ranchview Dr. Richardson, California 62639"  />
				</div>
			</div>

			<div class="btn-save-wrapper">
				<Button btnStyle="btn-save mb-5" btnText="Save" />
			</div>
		</form>

		
		</div>
	</div>
</template>

<script>
import Button from "../../../components/Button.vue"
export default {
  components: {
    Button
  }
}
</script>