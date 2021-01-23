<template>
  <c-theme-provider>
    <c-reset />
    <router-view />
  </c-theme-provider>
</template>

<script>
import Chakra, { CThemeProvider } from '@chakra-ui/vue'
export default {
  name: "App",
  components: {
    CThemeProvider,
    CReset}
  
};
</script>
