<template>
	<div>
		<div class="settings-profile-header mt-4 d-flex">
			<p class="fw-bold">Profiles Setting</p>
			<Button v-if='edit === false' btnText='Edit' btnStyle='btn-edit' @click.native="editAdminInfo" />
		</div>

		<div class="settings-profile-form">
		<form @submit.prevent="updateAdminData">
			<label class="settings-img-upload">
				<input class="settings-img-input" type="file" accept="image/*" @change="uploadFile($event)" name="pictureUpload" />
				<img v-if='pictureUpload' class="admin-profile-pic" :src="imageUpload" />
				<img v-else src="../../../assets/icons/upload-img.svg" />
			</label>
			<span v-if='edit' class="settings-profile-remove" @click.prevent="removeImage">x Remove</span>

			<div class="settings-admin-form">
				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Name</label>
					<input type="text" class="settings-form-control" placeholder="Cameron Williamson" 
						v-model="admin.first_name" :readonly="!edit"
					/>
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Email</label>
					<input type="text" class="settings-form-control" placeholder="debra.holt@example.com" 
						v-model="admin.email" :readonly="!edit"
					/>
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Phone Number</label>
					<input type="tel" class="settings-form-control" 
						placeholder="(303) 555-0105" 
						v-model="admin.phone" 
						:readonly="!edit"
					/>
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Country</label>
					<input type="text" class="settings-form-control" placeholder="Afghanistan" 
						v-model="admin.country" :readonly="!edit"
					/>
				</div>

				<div class="settings-admin-input-data mt-5">
					<label class="settings-admin-name-label mb-2">Address</label>
					<input type="text" class="settings-form-control-address" placeholder="3891 Ranchview Dr. Richardson, California 62639" 
						v-model="admin.address" :readonly="!edit"
					/>
				</div>
			</div>

			<div v-if='edit' class="btn-save-wrapper">
				<Button btnStyle="btn-save mb-5" btnText="Save" type="submit" />
			</div>
		</form>

		
		</div>
	</div>
</template>

<script>
import Button from "../../../components/Button.vue"
import ApplicationService from '@/services/application'
import UploadService from '@/services/upload'

export default {
	components: {
		Button
  },

  data() {
	return {
		admin: {
			first_name: '',
			last_name: '',
			email: '',
			phone: '',
			country: '',
			address: '',
			picture: {}
		},
		pictureUpload: false,
		fileUploadError: {
			picture: false
		},
		imageUpload: '',
		edit: false
	}
  },

  methods: {
	async uploadFile(event) {
		const { files } = event.target
		let formData = new FormData()
		formData.append('file', files[0])
		this.resetUploadError()

		try {
			const response = await UploadService.fileUpload(formData)

			this.admin.picture = response.data
			this.pictureUpload = true
			this.imageUpload = response.data.url
		} catch (error) {
			if (error.response.status === 500) {
				console.log(error)
				this.fileUploadError.picture = true
			} else if (error.response.status === 400) {
				this.$dtoast.pop({
					preset: "error",
					heading: "Error Uploading Image",
					content: "Error occured while uploading, kindly check the image size"
				})
			}
		}
	},
	removeImage() {
		this.pictureUpload = false
		this.imageUpload = ''
		this.admin.picture = {}
	},
	resetUploadError() {
		this.fileUploadError = {
			picture: false
		}
	},
	editAdminInfo() {
		this.edit = !this.edit
	},
	async updateAdminData() {
		try {
			// eslint-disable-next-line no-unused-vars
			const { last_name, ...adminData } = this.admin
			const res = await ApplicationService.updateAdminInfo(adminData)
			if (res.code === 200) {
				this.$dtoast.pop({
					preset: "success",
					heading: "Updated successfully",
					content: "Admin profile updated successfully.",
				})
				this.edit = false
			}
		} catch (error) {
			if (error.response.status === 400) {
				this.$dtoast.pop({
					preset: "error",
					heading: "Error Updating",
					content: "An error occured while updating admin profile. kindly check."
				})
			}
		}
	}
  },
  async mounted() {
		try {
			const res = await ApplicationService.getAdminInfo()
			if (res.code === 200) {
				this.admin.first_name = res.data.first_name
				this.admin.email = res.data.email
				this.admin.phone = res.data.phone
				this.admin.country = res.data.country
				this.admin.address = res.data.address
				if (res.data.picture.url) {
					this.admin.picture = res.data.picture
					this.imageUpload = res.data.picture.url
					this.pictureUpload = true
				}
			}
		} catch (error) {
			if (error.response.status === 401) {
				this.$router.push({ name: 'SignIn' })
			}
		}
	}
}
</script>
