<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar>
        <Header />
      </md-app-toolbar>
      <md-app-drawer style="width: 230px;" md-permanent="clipped">
        <SideNav />
      </md-app-drawer>
      <md-app-content class='full-height'>
        <MainContent />
      </md-app-content>
    </md-app>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Header,
    SideNav,
    MainContent,
    Footer,
  },
};
</script>

<style>
body {
  height: 100%;
  overflow: hidden;
}

.md-app,
.page-container {
  height: 100%;
}

.text {
  font-family: "Roboto", sans-serif !important;
  color: darkslategray;
  font-size: 12px;
  font-weight: 400;
}

.clickable {
  color: gray;
  cursor: pointer;
}

.title {
  font-size: 1.2rem;
}

.color-primary {
  color: #6950f6;
}

.row {
  display: flex;
  flex-direction: row;
}

.two-columns {
  display: flex;
  justify-content: space-between;
}

.inherit-width {
  width: inherit;
}

.center {
  display: flex;
  align-items: center;
}

.white-text {
  color: white;
}



/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
