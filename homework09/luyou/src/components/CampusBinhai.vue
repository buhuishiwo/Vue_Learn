<template>
  <div>
    <h2 class="title">温州理工滨海校区</h2>
    <div class="search">
      <input class="studentId" v-model="studentId" placeholder="请输入学号" @keyup.enter="searchStudent">
      
      <button @click="searchStudent">搜索</button>
    </div>

    <div v-if="studentInfo" class="display">
      {{ studentInfo }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      studentId: '123',
      studentInfo: '',
      studentName: '张三',
      studentClass: '计算机科学与技术'
    };
  },
  methods: {
    searchStudent() {
      // 这里只是一个示例，实际应根据学号查询数据库
      this.studentInfo = `学生信息：学号${this.studentId}，姓名${this.studentName}，班级${this.studentClass}。`
    }
  }
};
</script>

<style>
.title {
  text-align: center;
}

.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.display{
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>