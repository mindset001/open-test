<template>
  <div class="app">
    <div class="top"> 
      <img src="https://res.cloudinary.com/mindset/image/upload/v1630359624/logo_mhpqef.png" alt="">
      <button>Login</button>
    </div>

     <section class="content">
    

       <div class="left">
         <h1>Welcome.</h1>
         <p>join us and get the perfect examination <br> experience.</p>


         <form @submit.prevent="handleSubmit">
           <input type="text" class="form-control" v-model="email" placeholder="Your Email"> <br>

           <input type="text" v-model="username"  placeholder="Your Username"> <br>
           

          

           <input type="text" v-model="password" placeholder="Password" style="margin-top: 22px;">
           <div role="alert" v-if ="error" class="error">
             {{error}}
             </div>
           <div class="btn">
             <div >
           <p style="margin">signup with</p>
           <div style="display: flex; margin-top:-30px; margin-left:-40px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/Group_wfi1mh.png" alt="" style="width: 40px;height:40px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/Group_1_tc82wh.png" alt="" style="width: 40px;height:40px; margin-left:-80px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/entypo-social_linkedin-with-circle_bqww3u.png" alt="" style="width: 40px;height:40px; margin-left:-80px;">
           </div>
         </div>
             <button type="submit"  class="two">
               signup
           </button>
           </div>
         </form>
         
       </div>
       <div class="right">
         <img src="https://res.cloudinary.com/mindset/image/upload/v1630415678/undraw_online_resume_re_ru7s_2_k5nlp2.png" alt="">
       </div>
     </section>

     <footer class="foot">
       <div class="foot1">
         <div style="display: flex;">
           <img src="https://res.cloudinary.com/mindset/image/upload/v1630390831/Vector_tktcvx.png" alt="">
           <p style="margin-left:-100px;">Copyright Demlinks 2021</p>
         </div>
         <div class="private">
           <p>Privacy policy</p>
         <p class="p2">Help</p>
         </div>
       </div>
       <div class="cycle">
         <div class="circle"></div>
         <div class="circle"></div>
         <div class="circle"></div>
       </div>
     </footer>
  </div>

 
</template>


<script>
import axios from 'axios'
// import { log } from 'util';
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      email: '',
      password: '' ,
      error: '', 
    }
  },
  methods: {
    async handleSubmit() {
      
      try {
        var strongRegex = new RegExp("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})");
      if( strongRegex.test(this.password) ) {

       const res =   await axios.post('https://safe-chamber-84179.herokuapp.com/opentest/api/signup', {
        username: this.username,
        email: this.email,
        password: this.password
      });
          localStorage.setItem("token", res.headers["auth-token"])
            this.$router.push('/profile')
      }
      } catch(e) {
        this.error = "Password should consist of at least one Uppercase, one Lowercase, one special character, and one figure."
      }
      
      
    }
  }
}
</script>


<style scoped>



  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,600;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');


  *{
    padding-left: 40px;
    padding-right: 70px;
    margin: 0;
  }
  .app{
    background-color: #f5f5f5;
    height: 100vh;
    /* width: 90%; */
  }

  .top{
    display: flex;
    padding-top: 40px;
  }
  .top button{
    position: absolute;
    right: 10%;
    background: transparent;
    border: 1px solid #12D35F;
    box-sizing: border-box;
    border-radius: 10px;
    width: 127px;
    height: 36px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #12D35F;
    padding: 7px 25px;
  }
  .content{
    display: flex;
  }
  input{
    background: #FFFFFF;
    box-shadow: -1px 2px 7px rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    width: 372px;
    height: 55px;
    border-color: #FFFFFF;
    border: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #D3D3D3;
  }
  .left{

    margin-top: 158px;
  }
  .right{
    margin-top: 10px;
  }
  .right img{
    width: 800px;
    height: 700px;
  }
  .left h1{
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 39px;
    color: #12D35F;
    margin-bottom: 10px;
  }
  .left p{
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 24px;
    color: #2E282A;
    margin-bottom: 51px;

  }
  .btn{
    margin-top: 30px;
    display: flex;
    margin-left: -110px;
    justify-content: space-around;
  }
  .one{
    font-family: Montserrat;
    font-style: bold;
    font-weight: normal;
    font-size: 15px;
    line-height: 18px;
    color: #12D35F;
    border: none;
    margin-left: -55px;
    background: transparent;
    /* margin-right: 60px; */
  }
  .two{
    background: #12D35F;
    border-radius: 10px;
    width: 151px;
    height: 50px;
    border: none;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 30px;
    color: #FFFFFF;
    margin-left: -68px;
  }
  .cycle{
    position: absolute;
    right: 15%;
    display: flex;
    /* justify-content: space-between; */
    width: 50px;
    /* width: 100%; */
  }
  .circle{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: #AFAFAF;
  }
  .foot{
    display: flex;
    justify-content: space-around;
    margin-left: -100px;
  }
  .foot1{
    display: flex;
    position: absolute;
    left: 0;
    

  }

  .foot1 p{
    
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 16px;
      color: #AFAFAF;
   }
  .private{
    display: flex;
    margin-left: -130px;
    /* justify-content: flex-start; */
  }
  .p2{
    margin-left: -50px;
  }
  
</style>

