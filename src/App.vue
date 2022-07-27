<template>
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
  <hr>
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
</template>

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
