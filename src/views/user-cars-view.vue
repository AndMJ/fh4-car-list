<template>
    <div class="row mt-5 mb-5">
        <div class="container">
            <div class="row mt-5" v-for="user in Users" :key="user.id">
                <div class="col-4">
                    <user-component :user="user"></user-component>
                </div>
                <div class="col-8">
                    <div class="row">
                        <div class="col-lg-3 col-md-6 p-3" v-for="car in user.ownedCars" :key="car.id">
                            <card-component :carData="car"></card-component>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import UserComponent from "@/components/user-component.vue";
import userModel from "@/models/userModel";
import CardComponent from "@/components/card-component.vue";
export default {
    name: "user-cars-view",
    components: { CardComponent, UserComponent},
    data(){
       return{
           Users: Array
       }
    },
    async beforeMount(){
        this.Users = await userModel.getUserList(this.$API_URI + "/api/user/list");
    }
}
</script>