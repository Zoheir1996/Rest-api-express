<template>
  <header>
    
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/form">Form</RouterLink>
      <RouterLink to="/users">User</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white; /* Pour s'assurer que le header est visible */
  z-index: 999; /* Pour s'assurer que le header est au-dessus de tout le contenu */
  
}

.logo {
    display: block;
    margin: 1rem auto; /* Centrer horizontalement et laisser un espace en haut */
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem; /* Espacement entre le logo et les liens de navigation */
}

nav a.router-link-exact-active {
  color: hsla(160, 100%, 37%, 1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: grey;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .logo {
    margin: 1rem 2rem; /* Centrer horizontalement et laisser un espace en haut */
  }

  nav {
    margin-top: 4rem; /* Espacement entre le logo et les liens de navigation */
  }
}
</style>
