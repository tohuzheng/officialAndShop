<template>
    <div>
        <el-form  status-icon  ref="ruleForm" label-width="100px" >
        <el-form-item label="密码" prop="pass">
            <el-input type="password"  autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
            <el-input type="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
            <el-input ></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary">提交</el-button>
            <el-button >重置</el-button>
        </el-form-item>
        </el-form>
    </div> 
</template>

<script>
export default {
    name:"login",
}
</script>

<style>

</style>