<template>
  <div id="login" class="login">
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
            v-model="UserInfo.username"
            placeholder="UserName"
            @keyup.enter.native="submit">
          </el-input>
        </el-form-item>
        <el-form-item prop="password1">
          <el-input
            type="password"
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
            SIGN IN
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
}
</script>

<style scoped>
.log-form {
  margin: 20px auto;
  width: 310px;
  background: #fff;
  box-shadow: 0 0 35px #B4BCCC;
  padding: 30px 30px 8px 30px;
  border-radius: 25px;
}
.submitBtn {
  position: relative;
}
</style>
