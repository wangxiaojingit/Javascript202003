<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="职务名称">
      <el-input v-model="form.name" style="width:400px;"></el-input>
    </el-form-item>
    <el-form-item label="职务描述">
         <el-input type="textarea" v-model="form.desc"  style="width:400px;"></el-input>
    </el-form-item>
    <el-checkbox-group v-model="form.power">
      <!-- label和power进行匹配，如果可以匹配那么，就默认选中，匹配不上，就是false -->
        <el-checkbox label="userhandle">员工操作权</el-checkbox>
        <el-checkbox label="departhandle">部门操作权</el-checkbox>
        <el-checkbox label="jobhandle">职务操作权</el-checkbox>
        <el-checkbox label="departcustomer">部门全部客户</el-checkbox>
        <el-checkbox label="allcustomer">公司全部客户</el-checkbox>
        <el-checkbox label="resetpassword">重置密码</el-checkbox>
    </el-checkbox-group>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import {addJob,updateJob} from "../../api/job";
export default {
  name: '',
  data() { 
    return {
        form :{
            jobId:1,
            name:"",
            desc:"",
            power:""
        }
    }
  },
  created(){
      let id = this.$route.query.id;
      let  obj = this.$store.state.jobList.filter(item=>item.id==id)[0];
      if(obj){
        this.form.name=obj.name;
        this.form.desc = obj.desc;
        this.form.jobId = obj.id;
        this.form.power = obj.power.split("|");
      }
  },
  methods:{
    onSubmit(){
        let id = this.$route.query.id;
        this.form.power = this.form.power.join("|");
        (id?updateJob:addJob)(this.form).then(data=>{
            if(data.code==0){
              this.$message({
                type:"success",
                message:(id?"更新":"新增")+"成功"
              })
              this.$router.push("/org/job")
            };
        })
    }
  }
 }
</script>

<style lang="less" scoped>
  
</style>