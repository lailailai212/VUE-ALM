<template>
  <div id="siteAdmin">
    <el-row>
      <el-button
        type="info"
        @click.native.prevent='getVersion'>
        Get Version
      </el-button>
    </el-row>
    <el-table
      :data="tableData"
      style="width: 100%"
      v-loading="loading">
      <el-table-column
        prop="property"
        label="Property">
      </el-table-column>
      <el-table-column
        prop="int"
        label="Value">
      </el-table-column>
    </el-table>
    <el-row>
      <el-button
        type="info"
        @click.native.prevent='logout'>
        Logout
      </el-button>
    </el-row>
  </div>
</template>

<script>
var XMLparser = require('xml2json-light')
export default {
  name: 'siteAdmin',
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  methods: {
    getVersion() {
      this.loading = true
      this.axios({
        method: 'get',
        url: '/versions.xml'
      }).then((res) => {
        this.loading = false
        this.tableData = XMLparser.xml2json(res.data).java.object.void
        console.log(this.tableData)
      }).catch((err) => {
        console.error(err)
      })
    },
    logout() {
      this.$router.push('login')
    }
  }
}
</script>

<style>
.el-row{
  padding: 20px
}
.el-table-column{
  width: auto
}
</style>
