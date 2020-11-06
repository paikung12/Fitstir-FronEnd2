<template>
    <v-main>
        <v-container v-if="response">
            <p class="text-2xl">Playlist Video</p>
                <div>
                <v-layout>
                    <v-btn
                            color="primary"
                            dark
                            @click.stop="dialog1 = true"
                    >
                        <v-icon color="white">mdi-movie</v-icon>
                        Craeate Playlist
                    </v-btn>
                    <v-container>
                        <v-dialog
                                v-model="dialog1"
                                max-width="290"
                        >
                            <v-card>
                                <v-card-title class="headline">
                                    Playlsit Video
                                </v-card-title>
                                <v-form>
                                    <v-container>
                                        <v-layout>
                                            <v-flex >
                                                <v-btn
                                                        color="primary"
                                                        @click=" "
                                                >
                                                    <v-icon>mdi-folder-multiple-image</v-icon>
                                                    ADD Image
                                                </v-btn>
                                                <v-text-field
                                                        label="Name"
                                                        outline
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
                                <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                            color="primary"
                                            @click="createvideo"
                                    >
                                        Create Playlist
                                    </v-btn>
                                    <v-btn
                                            color="red"
                                            @click="dialog1"
                                    >
                                        Cancel
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-container>
                </v-layout>
                    <br>
                        <v-layout wrap >
                            <v-card style="width:220px;  " class="ma-2"
                                    v-for="item, index in videoplaylist"
                                    :key="index"
                            >
                                <v-img :src="item.image" style="width:100%; height:160px;  border" />
                                <v-card-title>
                                    <div>
                                        {{item.name}}
                                    </div>

                                </v-card-title>
                                <v-flex>
                                    <v-btn

                                            color="primary"
                                            @click="$router.push(`/playlistpage?id=${item.id}`)"
                                    >
                                        <v-icon color="white">mdi-play-circle-outline</v-icon>
                                    </v-btn>
                                    <v-btn
                                            color="red"
                                            @click="getdataDialogid(item.id)"
                                    >
                                        <v-icon color="white">mdi-cog-outline</v-icon>
                                    </v-btn>
                                </v-flex>
                            </v-card>
                        </v-layout>
                    <v-container>
                            <v-dialog
                                    v-model="dialog2"
                                    max-width="350"
                            >
                                <v-card>
                                    <v-card-title class="headline"> Setting Playlsit Video </v-card-title>
                                    <v-form>
                                        <v-container>
                                            <v-layout justify-center items-center>
                                                <v-flex row >
                                                    <v-btn
                                                            class="pa-md-5 mx-lg-auto"
                                                            width="300"
                                                            color="green"
                                                            @click="$router.push(`/Addvideoplaylist?id=${dataDialog}`)"
                                                    >
                                                        <v-icon
                                                        >
                                                            mdi-folder-multiple-plus
                                                        </v-icon>
                                                        ADD  Video
                                                    </v-btn>
                                                    <v-btn
                                                            class="pa-md-5 mx-lg-auto mt-2"
                                                            width="300"
                                                            color="primary"
                                                            @click="$router.push(`/playlistpage?id=${dataDialog}`)"
                                                    >
                                                        <v-icon>mdi-eye</v-icon>
                                                        My playlist
                                                    </v-btn>
                                                    <v-btn
                                                            class="pa-md-5 mx-lg-auto mt-2"
                                                            width="300"
                                                            color="red"
                                                            @click="deletePlaylist()"
                                                    >
                                                        Remove Playlist
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-container>
                                    </v-form>
                                </v-card>
                            </v-dialog>
                    </v-container>
                </div>
        </v-container>
    </v-main>
</template>

<script>
    export default {
        name: "index",
        data () {
            return{
                dataDialog: null,
                dataDialog1: null,
                dialog: false,
                dialog1 :false,
                dialog2: false,

                form:{
                    name:null,
                    image:null,
                    description:null,
                },
                videoplaylist: [],
                response : false,
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
            async createvideo(){
                let dataImage = new FormData()
                this.form.user = this.user.pk
                this.form.description = this.user.pk
                let data  = await  this.$store.dispatch('myplaylist/postMyPlaylist',this.form)
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