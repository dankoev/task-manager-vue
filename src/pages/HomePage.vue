<template>
  <h1>Home</h1>
  <section class="description">
    <h3>Description</h3>
    This is an innovative application for efficient task planning. Regardless of the size of the
    project or the composition of the team, TeamTaskPlan provides a simple and convenient way to
    organize and identify tasks.
  </section>
  <br />
  <section class="about">
    <h3>About</h3>
    The application is under development. Try
    <router-link to="/tasks">Task Scheduler</router-link>
  </section>
</template>
<style scoped>
.description {
  line-height: 1.7;
  padding-left: 10px;
}
.about {
  padding-left: 10px;
}
</style>
