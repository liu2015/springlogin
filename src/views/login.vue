<template>
  
<div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
  <el-row>
    <el-form-item label="用户" prop="username">
      <el-input v-model="formData.username" placeholder="请输入用户" clearable :style="{width: '100%'}"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="formData.password" placeholder="请输入密码" clearable show-password
        :style="{width: '100%'}"></el-input>
    </el-form-item>
  </el-row>
  <el-form-item size="large">
    <el-button type="primary" @click="submitForm">提交</el-button>
    <el-button @click="resetForm">重置</el-button>
  </el-form-item>
</el-form>

</div>

</template>

<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      formData: {
        username: undefined,
        password: undefined,
      },
      rules: {
        username: [{
          required: true,
          message: '请输入用户',
          trigger: 'blur'
        }],
        password: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }],
      },
    }
  },
  computed: {},
  watch: {},
  created() {
 
  },
  mounted() {},
  methods: {
    
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        
         
          
        if (!valid) return
        // TODO 提交表单
        

      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>

<style>

</style>