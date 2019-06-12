<template>
  <div id="version">
    <br><br><br><br><br><br>
    <h2 style="color:#409EFF; float: left">Server Version</h2>
  <el-table
    :data="tableData"
    style="width: 100%"
    stripe
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
        @click.native.prevent='goBack'>
        Go back to SA
      </el-button>
    </el-row>
  </div>
</template>

<script>

var XMLparser = require('xml2json-light')
export default {
  name: 'version',
  data() {
    return {
      loading: false,
      tableData: []
    }
  },
  methods: {
    goBack() {
      this.$router.push('siteAdmin')
    }
  },
  mounted() {
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
  }
}
</script>

<style scoped>
  .el-table-column{
    width:100%;
    font-family: Aharoni;
    alignment: center;
  }
  div{
    width: 80%;
    margin: 0px auto;
    align: center;
    float: none;
  }
</style>
