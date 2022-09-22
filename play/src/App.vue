<template>
  <div>
    <QxButton
      v-for="example in compExamples"
      :key="example"
      :type="comp==example?'success':'primary'"
      @click="comp=example"
    >
      {{ example }}
    </QxButton>
  </div>
  <hr>
  <div v-if="comp=='form'">
    <QxForm
      ref="myForm"
      :model="model"
      :rules="rules"
    >
      <QxFormItem
        label="用户名："
        prop="username"
      >
        <QxInput v-model="model.username" />
      </QxFormItem>
      <QxFormItem
        label="密码："
        prop="password"
      >
        <QxInput
          v-model="model.password"
          type="password"
        />
      </QxFormItem>
      <br>
      <QxFormItem>
        <QxButton
          type="primary"
          @click="login"
        >
          登 录
        </QxButton>
      </QxFormItem>
    </QxForm>
  </div>
  <div v-if="comp=='button'">
    <QxButton type="primary">
      按钮
    </QxButton>
    <QxButton type="success">
      按钮
    </QxButton>
    <QxButton>按钮</QxButton>
    <QxButton size="small">
      按钮
    </QxButton>
  </div>
  <div v-if="comp=='container'">
    <QxContainer direction="vertical">
      <QxHeader>Header</QxHeader>
      <QxContainer>
        <QxAside width="200px">
          Aside
        </QxAside>
        <QxContainer>
          <QxMain>Main</QxMain>
        </QxContainer>
      </QxContainer>
      <QxFooter>Footer</QxFooter>
    </QxContainer>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';
import { FormType } from './components/form/type';
const comp = ref('form');
const compExamples = ref(['container', 'button', 'form', 'dialog', 'notification']);
const model = reactive({
	username: '',
	password: ''
});
const rules = reactive({
	username: [{
		type: 'string',
		required: true,
		message: "请输入用户名！"
	}],
	password: [{
		type: 'string',
		required: true,
		message: "请输入密码！"
	}]
});
const myForm = ref<FormType>();
function login() {
	myForm.value?.validate((valid) => {
		if (valid) {
			console.log(model);
		} else {
			alert("error submit!, 请正确填写表单！");
		}
	});
}
</script>
<style>
body{
  width: 100%;
  margin:10px auto;
}
.qx-header,
.qx-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.qx-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 400px;
}
.qx-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 360px;
}
body > .qx-container {
  margin-bottom: 40px;
}
.qx-container:nth-child(5) .qx-aside,
.qx-container:nth-child(6) .qx-aside {
  line-height: 260px;
}
.qx-container:nth-child(7) .qx-aside {
  line-height: 320px;
}
</style>
