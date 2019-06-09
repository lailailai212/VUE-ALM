<template>
    <div class="login-container" >
      <el-main>
        <el-form
          v-loading="loading"
          v-bind:model="UserInfo"
          ref="UserInfo"
          v-bind:rules="rule"
          class="log-form">
          <el-form-item prop="username">
            <el-input
              type="text"
              class="userinfo"
              prefix-icon="el-icon-user-solid"
              v-model="UserInfo.username"
              placeholder="UserName"
              @keyup.enter.native="submit">
            </el-input>
          </el-form-item>
          <el-form-item prop="password1">
            <el-input
              type="password"
              class="userinfo"
              prefix-icon="el-icon-s-grid"
              v-model="UserInfo.password"
              placeholder="Password"
              @keyup.enter.native="submit">
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="info"
              class="submitBtn"
              @click.native.prevent="submit(UserInfo)">
              Login to Site Admin
            </el-button>
          </el-form-item>
        </el-form>
      </el-main>

    </div>
</template>

<script>
/* eslint-disablea */
export default {
  name: 'login',
  data() {
    return {
      loading: false,
      UserInfo: {
        username: '',
        password: ''
      },
      rule: {
        username: [
          {
            required: true,
            message: 'Invalid username',
            trigger: 'red'
          }
        ],
        password: [
          {
            required: true,
            message: 'Invalid password',
            trigger: 'red'
          }
        ]
      }
    }
  },
  methods: {
    submit(value) {
      this.$refs.UserInfo.validate(valid => {
        if (valid) {
          this.loading = true
          let requestData = '<alm-authentication><user>' + value.username + '</user><password>' + value.password + '</password></alm-authentication>'
          this.axios({
            method: 'post',
            url: '/authentication-point/alm-authenticate',
            maxRedirects: 0,
            data: requestData
          }).then((res) => {
            this.getSession()
          }).catch((err) => {
            this.loading = false
            console.error(err)
          })
        } else {
          console.error('Login failed, Please check your uername and password')
        }
      })
    },
    getSession() {
      this.axios({
        method: 'post',
        url: '/rest/site-session'
      }).then((res) => {
        console.log(res)
        this.$router.push('siteAdmin')
      }).catch((err) => {
        console.error(err)
      })
    }
  }
}</script>
<style>
.login-container {color:#0078de;
  width: 100%;
  height: 100vh;
  background-image: url(../../config/MF.png);
  background-repeat: no-repeat;
  background-position: center top;
  background-size: 30%;
  padding-top:15%;
}
.log-form{
  border-radius: 10px;
  background-color:white;
   border: none;
   color:  #2d8cf0;
  position: absolute;
  left: 0;
  right: 0;
  width: 400px;
  padding: 35px 35px 15px 35px;
  margin: 120px auto;
}
.userinfo{
  display: inline-block;
  height: 47px;
  width: 85%;
  border-color: #2d8cf0;
}
.submitBtn{
  display: inline-block;
  height: 40px;
  width: 85%;
  background-color: #2d8cf0;
  border: none;
}
</style>
