
<template>
  <div>
    <sv-header></sv-header>
    <main id="main-content" class="container" >
      <router-view></router-view>
    </main>
    <sv-footer></sv-footer>
  </div>
</template>


<script>
import SvHeader from '@/app/components/common/partials/LoginHeader'
import SvFooter from '@/app/components/common/partials/LoginFooter'

export default {
    components: {
        SvHeader,
        SvFooter
    }
}
</script>
