<script setup></script>

<template>
  <aside>
    <nav class="main-nav">
      <ul class="main-nav__pages">
        <li class="active">
          <router-link to="/">
            <span uk-icon="icon: home"></span>
            Home
          </router-link>
        </li>

        <li>
          <router-link to="/tasks">
            <span uk-icon="icon: list"></span>
            Tasks
          </router-link>
        </li>
        <li>
          <router-link to="/roadmap">
            <span uk-icon="icon: bolt"></span>
            Roadmap
          </router-link>
        </li>
      </ul>

      <ul class="main-nav__footer">
        <li><a href="#" uk-icon="icon: cog"></a></li>
        <li><a href="#" uk-icon="icon: sign-in"></a></li>
        <li><a href="#" uk-icon="icon: sign-out"></a></li>
      </ul>
    </nav>
  </aside>
</template>

<style scoped>
.main-nav {
  width: 250px;
  display: flex;

  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(95, 95, 95, 0.466);
  padding: 30px 20px 20px 30px;

  & ul {
    list-style: none;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & li {
    transition: transform 0.2s;
    padding: 5px;
    border-radius: 5px;
  }
  & .active {
    background-color: rgba(110, 117, 180, 0.178);
  }
}
.main-nav__pages {
  display: flex;
  flex-direction: column;
  gap: 20px;
  & li:hover {
    transform: translateX(-3px);
  }
}
.main-nav__footer {
  display: flex;
  gap: 20px;

  & li:hover {
    transform: translateY(-3px);
  }
}
</style>
