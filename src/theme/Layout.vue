<template>
  <div>
    {{text}}
  </div>
</template>
<script>
import axios from 'axios'
import io from 'socket.io-client';
const socket = io('http://localhost');
  export default {
    data () {
      return {
        text: 'ZAPPIE!'
      }
    },
    created() {
      axios.get('/').then(res => {
        this.text = 'NOW'
      })
    },
    methods: {
    }
  }
</script>
<style>
</style>
