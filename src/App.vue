<template>
  <div id="app">
    <b-navbar fixed-top >
        <template slot="brand">
            <b-navbar-item href="/">
                <img src="@/assets/logo.png">
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="/reports/new">
              <span class="icon">
                <i class="fas fa-cannabis"></i>
              </span>             
               &nbsp;Report Tree
            </b-navbar-item>
            <b-navbar-item href="/reports">
              <span class="icon">
                <i class="fas fa-table"></i>
              </span>
               &nbsp;List Reports
            </b-navbar-item>
        </template>
    </b-navbar>    
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
.container {
  padding-top: 50px;
}

</style>

