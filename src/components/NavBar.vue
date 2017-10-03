<template>
  <div id="app">

<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <a class="navbar-brand" href="#">
    <img src="src/assets/bitcoin-logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
    CryptoPanel
  </a>
 <ul class="navbar-nav navbar-toggler-right">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Analysis</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">CryptoNews</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          More features...
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
</nav>
  </div>
</template>

<script>
  export default {
    name: 'shortList',
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
nav {
    margin-bottom: 50px;
}
</style>
