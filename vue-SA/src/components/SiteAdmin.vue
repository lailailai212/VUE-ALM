<template>
  <div id="siteAdmin">
    <br><br><br><br><br><br>
    <el-row>
      <el-button
        type="info"
      @click.native.prevent='getDomains'>
      All Domains
      </el-button>
    </el-row>
    <el-table
      :data="tableData"
    >
      <el-table-column
        label="Domain Name">
        <template slot-scope="scope">
          <span>{{ scope.row.name}}</span>
        </template>
      </el-table-column>

      <el-table-column
      label="Domain ID">
      <template slot-scope="scope">
        <span>{{ scope.row.id}}</span>
      </template>
    </el-table-column>
    </el-table>
    <br><br>
      <el-button
        type="info"
        @click.native.prevent='getVersion'>
        Get Version
      </el-button>
    <br><br><br>
      <el-button
        style="float:right; width:100px; background-color: white;color: #409EFF;border-width: 3px; font-size: 17px"
        type="primary" round
        @click.native.prevent='logout'>
        Logout
      </el-button>

  </div>
</template>

<script>
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
      this.$router.push('version')
    },
    logout() {
      this.$router.push('login')
    },
    getDomains() {
      this.axios({
        method: 'get',
        url: 'v2/sa/api/domains'
      }).then((res) => {
        this.loading = false
        this.tableData = res.data.domains.domain
        console.log(res.data.domains.domain)
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  mounted() {
    this.getDomains()
  }
}
</script>

<style>
  header{
    width: 100%;
    height: 100vh;
    background-image: url(../../config/ALM.png);
    background-repeat: no-repeat;
    background-position: center top;
  }
  div{
    width: 80%;
    margin: 0px auto;
    align: center;
  }
.el-row{
  padding: 20px;
}
.el-table-column{
  width: 85%;
  font-family: Aharoni;
  alignment: center;
}
.el-button{
  background-color: #2d8cf0;
  color: white;
}
</style>
