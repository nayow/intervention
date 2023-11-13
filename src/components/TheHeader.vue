<template lang="pug">
#nav
  .item.item-title.d-none.d-sm-inline
    a(href='#home') INTERVENTION
  .item.item-menu.d-inline-flex.justify-content-evenly.d-sm-inline
    a(href='#about' data-menuanchor='about') About
    a(href='#lindenhof' data-menuanchor='lindenhof') Lindenhof
    a(href='#activities' data-menuanchor='activities') Activities
    a(href='#principles' data-menuanchor='principles') Principles
    a(href='#pricing' data-menuanchor='pricing') Pricing
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style scoped>
#nav {
  position: fixed;
  top: 0px;
  height: 40px;
  background-color: whitesmoke;
  color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 0.5rem;
  font-family: "Univers LT Std", "Roboto", sans-serif;
  font-size: 1.4rem;
}

/* sm breakpoint */
@media (max-width: 576px) {
  #nav {
    font-size: unset;
  }
  .item-menu {
    width: 100%;
  }
}

.item {
  white-space: nowrap;
}

#nav a {
  text-decoration: none;
  color: inherit;
}

#nav a.active {
  font-weight: bold;
  font-family: "Univers LT Std Bold";
}

#nav a.div-exact-active {
  color: inherit;
}
</style>
