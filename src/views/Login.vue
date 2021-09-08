<template>
  <div class="app">
    <div class="top"> 
      <img src="https://res.cloudinary.com/mindset/image/upload/v1630359624/logo_mhpqef.png" alt="" class="logo-img">
      <button class="register-btn">Register</button>
    </div>

     <section class="content">
    

       <div class="left">
         <h1 class="welcome">Welcome.</h1>
         <p class="login-text">login to your account</p>

<div role="alert" v-if="error" class="error">
             {{error}}
             </div>
        

         <form action="" @submit.prevent="handleSubmit">

             
           <input type="text" class="form-control" v-model="username" placeholder="Your Username"> <br>


           <input type="text" class="form-control" v-model="password" placeholder="Password" style="margin-top: 22px;">
           <div class="btn">

             <button class="one">Forgot password?</button>

             <button class="two">
               login
           </button>
           </div>
         </form>



         <div style="margin-top:40px;">
           <p style="margin">login with</p>
           <div style="display: flex; margin-top:-30px; margin-left:-40px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/Group_wfi1mh.png" alt="" style="width: 40px;height:40px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/Group_1_tc82wh.png" alt="" style="width: 40px;height:40px; margin-left:-80px;">
             <img src="https://res.cloudinary.com/mindset/image/upload/v1630392688/entypo-social_linkedin-with-circle_bqww3u.png" alt="" style="width: 40px;height:40px; margin-left:-80px;">
           </div>
         </div>
       </div>
       <div class="right">
         <img src="https://res.cloudinary.com/mindset/image/upload/v1630359018/undraw_exams_g4ow_1_f426ng.png" alt="">
       </div>
     </section>

     <footer class="foot">
       <div class="foot1">
         <div class="foot2">
           <img src="https://res.cloudinary.com/mindset/image/upload/v1630390831/Vector_tktcvx.png" alt="">
           <p class="copy">Copyright Demlinks 2021</p>
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
      components: {
        
      },
      data() {
        return {
          username: '',

          password: '' ,
          
          error: ''
        }
      },
      methods: {
        async handleSubmit() {
          try { 
          
          
           
           
             
            const response = await axios.post('https://safe-chamber-84179.herokuapp.com/opentest/api/login', {
            username: this.username,
            password: this.password
          });
            console.log(response);
          }
          
          
           catch( e ) {
            this.error = "Username/Password Invalid"
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
  .copy{
    margin-left: -100px;
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
    margin-left: 10px;
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
    /* margin-left: 68px; */
  }
  .cycle{
    position: absolute;
    right: 15%;
    display: flex;
    justify-content: space-between;
    width: 50px;
  }
  .circle{
    min-width: 5px;
    height: 10px;
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
  .foot2{
    display: flex;
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
  .error{
    color: red;
    margin-bottom: 10px;
    width: 20em;
    margin-left: 20px;

  }

@media screen and (max-width: 480px) {

  .top{
    display: flex;
    flex-direction: row;
  }
  .right{
  display: none;
  }
  .app{
    background-color: #f5f5f5;
    height: 150vh;
    }
    *{
    padding-left: 10px;
    margin: 0;
  }
  
  .logo-img{
  width: 150px;
  height: auto;
  
  }
    .left{

    width: 100%;
    height: auto;
    padding: 1rem;

  }
  .login-text{
  width: 100%;
  
  }
  .cycle{
    display: none;
  }
  .foot{
    display: flex;
    flex-direction: column;
  }
  .foot1{
    display: flex;
    flex-direction: column; 

  }
  input{
    width: 230px;
    margin-left: -6px;
  }
  .one{
    margin-left: 170px;
    font-size: 16px;
  }
  .foot2{
    display: flex;
    margin-top: 60px;
    
  }
   .private{
    display: flex;
    margin-left: -10px;
    margin-top: 20px;
  }
  .copy{
    margin-left: -70px;
  }
}
  
</style>

