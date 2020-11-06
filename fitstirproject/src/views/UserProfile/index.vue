<template>
                <div class="container w-full mx-auto pt-20">
                        <div class="w-full px-4 md:px-0 md:mt-8 mb-16 text-gray-800 leading-normal">
                                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                                                <div class="flex flex-row items-center">
                                                        <div class="flex-shrink pr-4">
                                                                <div class="rounded p-3  ">
                                                                        <i class="text-4xl em em-video_camera "></i>
                                                                </div>
                                                        </div>
                                                        <div class="flex-1 text-right md:text-center">
                                                                <h5 class="font-bold uppercase text-gray-400">BMI</h5>
                                                                <h3 class="font-bold text-3xl text-gray-600">
                                                                        <span class="text-orange-500">
                                                                                {{}}
                                                                        </span>
                                                                </h3>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                                                <div class="flex flex-row items-center">
                                                        <div class="flex-shrink pr-4">
                                                                <div class="rounded p-3  "><i class="em em-calendar text-4xl "></i></div>
                                                        </div>
                                                        <div class="flex-1 text-right md:text-center">
                                                                <h5 class="font-bold uppercase text-gray-400">จำนวนเพย์ลิส</h5>
                                                                <h3 class="font-bold text-3xl text-gray-600">
                                                                        <span class="text-yellow-600">
                                                                                {{}}
                                                                        </span>
                                                                </h3>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                                <div class="w-full md:w-1/2 xl:w-1/3 p-3">
                                        <div class="bg-gray-900 border border-gray-800 rounded shadow p-2">
                                                <div class="flex flex-row items-center">
                                                        <div class="flex-shrink pr-4">
                                                                <div class="rounded p-3  "><i class="em em-calendar text-4xl "></i></div>
                                                        </div>
                                                        <div class="flex-1 text-right md:text-center">
                                                                <h5 class="font-bold uppercase text-gray-400">จำนวน Challenge</h5>
                                                                <h3 class="font-bold text-3xl text-gray-600">
                                                                        <span class="text-yellow-600">
                                                                                {{}}
                                                                        </span>
                                                                </h3>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <hr class="border-b-2 border-gray-600 my-8 mx-4">
                        <div class="flex flex-row flex-wrap flex-grow mt-2">
                                <div class="w-full md:w-1/2  p-3">
                                        <div class="bg-gray-900 border border-gray-800 rounded shadow">
                                                <div class="border-b border-gray-800 ">
                                                        <v-toolbar flat color="transparent">
                                                                <h5 class="font-bold uppercase text-white">Profile</h5>
                                                                <v-spacer></v-spacer>
<!--                                                                <UpdateUser :fb="fb" :userId="profile.id" :profileId="profile.id" />-->
                                                        </v-toolbar>
                                                </div>
                                                <div class="p-5">
                                                        <h2 class="text-xl text-white t-mt-2 ">Username:{{}}</h2>
                                                        <h2 class="text-xl text-white">E-mail:{{}}</h2>
                                                        <h2 class="text-xl text-white">Tel:{{}}</h2>
                                                        <h2 class="text-xl text-white">Address:{{}}</h2>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div class="w-full md:w-1/2 p-3">
                                <div class="bg-gray-900 border border-gray-800 rounded shadow">
                                        <div class="border-b border-gray-800  ">
                                                <v-toolbar flat color="transparent">
                                                        <h2 class="text-white uppercase">Health Record Table</h2>
                                                        <v-spacer></v-spacer>

                                                </v-toolbar>
                                        </div>
                                        <div class="p-5">
                                                <table class="w-full p-3 text-gray-700">
                                                        <thead>
                                                        <tr>
                                                                <th class="text-left text-gray-600">Weight</th>
                                                                <th class="text-left text-gray-600">Height</th>
                                                                <th class="text-left text-gray-600">Waist</th>
                                                                <th class="text-left text-gray-600">Bmi</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                                <td>{{}}</td>
                                                                <td>{{}}</td>
                                                                <td>{{}}</td>
                                                                <td>{{}}</td>
                                                        </tr>
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>
                        </div>
                </div>


</template>

<script>
import {
       sync,
       call
} from 'vuex-pathify';
        export default {
        name: "index",
        data () {
            return {
                model: 'tab-2',
                response : false,
            }
        },
        mounted() {
          this.loadData()
        },
                methods: {
                        async loadData() {
                                this.user = await this.$store.dispatch('user/getUser')
                                this.response = true
                                console.log(this.user);
                        },
                },


    }
</script>
<style scoped>
        p.text {
                white-space: nowrap;
                width: 200px;
                overflow: hidden;
                text-overflow: ellipsis;
        }

        .container {
                max-width: 1200px;
        }

        .slide-area04 {
                background-image: url(https://sv1.picz.in.th/images/2020/11/02/biyQfI.png);
                background-repeat: no-repeat;
                background-size: cover;
        }

        .slide-area04 .hero-cap h2 {
                color: #fff;
                font-size: 70px;
                font-weight: 700;
                text-transform: uppercase;
                line-height: 1;
        }

        .container {
                max-width: 1200px;
        }

        .pt-x {
                padding-top: 100px;

        }

        @media only screen and (max-width: 600px) {
                .pt-x {
                        padding-top: 80px;
                }

                .rm-text {
                        font-size: 48px !important;
                }

                .rm-body {
                        font-size: 22px !important;
                }
        }

</style>