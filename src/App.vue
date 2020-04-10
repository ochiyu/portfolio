<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/profile">Profile</router-link>|
      <router-link to="/activity">Activity</router-link>|
      <router-link to="/link">Link</router-link>
    </div>
    <router-view/>
  </div>
</template>
