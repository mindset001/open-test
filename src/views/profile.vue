<template >
  <main>
    <div class=" navigation">
    <div class=" md:w-full flex justify-between items-center shadow-lg p-3">
      <img src="@/assets/opentestLogo.png" alt="logo">
      <form  class=" hidden md:block">
        <input type="text" class="rounded-lg md:w-80 bg-gray-200 pl-2 pt-1 pb-1">
          <input type="submit" value="search" class=" cursor-pointer rounded-lg bg-green-500 text-white p-1">
      </form>
      <div class=" flex">
          <img class=" w-12 h-12 rounded-full " src="@/assets/1.jpg" alt="">
          <div class="flex flex-col justify-center ml-4">
            <p class=" mb-0 ">{{$store.state.user.user}}</p>
            <p class=" text-gray-400 text-xs mt-0">student</p>
          </div>
      </div>
    </div>
  </div>

 <div class="flex">
    <aside class=" hidden md:flex flex-col justify-around items-center shadow-xl max-w-sm md:w-3/12 text-gray-500">
     <div >
        <ul>
        <li> <a href="#">Dashboard</a> </li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Dashboard</a></li>
        <li><a href="#">Dashboard</a></li>
      </ul>
     </div>

      <div>
        <h3 class=" font-semibold text-xl  mb-5">Help</h3>
        <ul>
          <li> <a href="#">Dashboard</a> </li>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Dashboard</a></li>
      </ul>
      </div>
  </aside>

  <section class=" w-full bg-gray-100 flex  flex-col">
    <h2>My Profile</h2>
    <div  class=" bg-gray-50 mainProfile  m-auto rounded-md shadow-lg">
    
        
      <form  @submit.prevent="handleSubmit" >
        <div class="flex text-green-600 justify-between items-baseline">
          <div class="flex items-baseline">
            <img class=" h-24 w-20 rounded-lg mr-4" src="@/assets/1.jpg" alt="">
            <button>Change photo</button>
          </div>
        <input class=" bg-transparent" type="submit" value="Update profile">
      </div>
        <div class=" md:flex flex-wrap profile justify-evenly">
          <div class=" sm:w-full">
          <label >First Name</label>
          <input placeholder="Robert" type="text" required v-model="firstName" >
        </div>

        <div>
          <label>Email</label>
          <input placeholder="example.dev@gmaoil.com" type="email" required v-model="email">
        </div>

        <div>
          <label >Last Name</label>
          <input placeholder="Fox" type="text" required v-model="lastName">
        </div>

        <div>
          <label>Password</label>
        <input type="password" placeholder="Password" required v-model="password">
        <p v-if="passwordError" class="error">{{passwordError}}</p>
        </div>

          <div>
            <label >Gender</label>
            <select v-model="gender">
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div>
          
        </div>


        </div>

      </form>
    </div>
  </section>
 </div>
  </main>
</template>

<script>
export default {

 data(){
  return{
    email: '',
    firstName: "",
    password: '',
    lastName:"",
    gender:"",
    terms: false,
    passwordError: "",
    profileImage: ""
  }
    },

  methods: {
    handleSubmit(){
      console.log('submitted');
      if(this.password.length > 5 ){
          this.passwordError =  " "
      }else{
          this.passwordError = "Password must be at least 6 chars long "
      }
    }

  }


}

</script>

<style scoped>

main{
    height: 100%;
}

.navigation{
  background: #f5f5f5;
}

input{
  outline: none;

}

aside{
  background: #f5f5f5;
  flex: 1;
  height: 88vh;
  box-shadow: 10px 0 5px -5px rgb(14, 12, 12);
}

section{
  flex: 3;
}

ul li{
  margin-bottom: 20px;
}

h2{
  position: relative;
  top: 2%;
  left: 10%;
  font-size: 25px;
}

.mainProfile{
  max-width: 1100px ;
    width: 80%;
    background: #fff;
    padding: 25px 30px;
}

form .profile div{
  width: calc(100% / 2 - 20px);
    margin: 20px 0 12px 0;
}
form .profile div label{
  display: inline;
    margin: 0 12px 0 0 ;
}
form .profile div input, select{
    height: 45px;
    width:100%;
    outline: none;
    border-radius: 5px;
    background: #e6e6e6;
    padding-left: 15px;
    font-size: 16px;
}

@media (max-width: 760px) {
   form .profile div {
        width: 100%;
    }
}


</style>
