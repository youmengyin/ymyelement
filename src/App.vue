<template>
  <div>
    <QXButton
      v-for="example in compExamples"
      :key="example"
      :type="comp==example?'success':'primary'"
      @click="comp=example"
    >
      {{ example }}
    </QXButton>
  </div>
  <hr>
  <div v-if="comp=='form'">
    <QXForm
      ref="myForm"
      :model="model"
      :rules="rules"
    >
      <QXFormItem
        label="用户名："
        prop="username"
      >
        <QXInput v-model="model.username" />
      </QXFormItem>
      <QXFormItem
        label="密码："
        prop="password"
      >
        <QXInput
          v-model="model.password"
          type="password"
        />
      </QXFormItem>
      <br>
      <QXFormItem>
        <QXButton
          type="primary"
          @click="login"
        >
          登 录
        </QXButton>
      </QXFormItem>
    </QXForm>
  </div>
  <div v-if="comp=='button'">
    <QXButton type="primary">
      按钮
    </QXButton>
    <QXButton type="success">
      按钮
    </QXButton>
    <QXButton>按钮</QXButton>
    <QXButton size="small">
      按钮
    </QXButton>
  </div>
  <div v-if="comp=='container'">
    <QXContainer>
      <QXHeader>Header</QXHeader>
      <QXContainer>
        <QXAside width="200px">
          Aside
        </QXAside>
        <QXContainer>
          <QXMain>Main</QXMain>
          <QXFooter>Footer</QXFooter>
        </QXContainer>
      </QXContainer>
    </QXContainer>
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
		require: true,
		message: "请输入用户名！"
	}],
	password: [{
		require: true,
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
  width:1000px;
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
  line-height: 200px;
}
.qx-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
