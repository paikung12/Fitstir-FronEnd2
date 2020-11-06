<template>
    <v-content>
        <v-container>
            <div class="flex justify-center">
                <div>
                    <p1 class="font-extrabold text-4xl">Exercise Challenge</p1>
                </div>
                <div>
                        <v-btn
                                color="primary"
                                dark
                                @click.stop="dialog1 = true"
                        >
                            <v-icon color="white">mdi-movie</v-icon>
                            Craeate Challenge
                        </v-btn>
                        <v-container>
                            <v-dialog
                                    v-model="dialog1"
                                    max-width="290"
                            >
                                <v-card-title class="headline">
                                    Challenge
                                </v-card-title>
                                <v-form>
                                    <v-container>
                                        <v-layout>
                                            <v-flex>
                                                <v-btn
                                                        color="primary"
                                                        @click=" "
                                                >
                                                    <v-icon>mdi-folder-multiple-image</v-icon>
                                                    ADD Image>
                                                </v-btn>
                                                <v-text-field
                                                        label="Name"
                                                        outlined
                                                        v-model="form.name"
                                                >
                                                </v-text-field>
                                                <v-text-field
                                                        label="Description"
                                                        outline
                                                        v-model="form.description"
                                                >
                                                </v-text-field>
                                            </v-flex>
                                        </v-layout>
                                    </v-container>
                                </v-form>

                            </v-dialog>
                        </v-container>
                </div>
            </div>
        </v-container>
    </v-content>
</template>




<script>
    export default {
        name: "index",
        data () {
            return{
                    form:{
                        name:null,
                        image:null,
                        description:null,
                    }
            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            async loadData() {
                this.user = await this.$store.dispatch('user/getUser')
                this.videoplaylist = await this.$store.dispatch('myplaylist/getMyPlaylist',this.user.pk)
                console.log(this.videoplaylist);
                this.response = true
                console.log(this.user);
            },
            async createvideo() {
                let dataImage = new FormData()
                this.form.user = this.user.pk
                this.form.description = this.user.pk
                let data = await this.$store.dispatch('myplaylist/postMyPlaylist', this.form)
                this.dialog1 = false
                this.loadData()
            },
            async deletePlaylist(){
                let data  = await  this.$store.dispatch('myplaylist/deleteMyPlaylist',this.dataDialog)
                this.dialog = false
                this.dialog2 = false
                this.loadData()
            },
            async getdataDialogid(id){
                this.dialog2 = true
                this.dataDialog= id
            },

        }
    }
</script>

<style scoped>

</style>