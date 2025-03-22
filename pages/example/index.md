---
description: 下载页面
layoutClass: m-example-layout
outline: [2, 3, 4]
showArticleMetadata: false
editLink: false
showComment: false
---

<script setup>
import { EXAMPLE_DATA } from './data'
</script>
<style src="./style.scss"></style>

# Pentest-Windows下载
<div class="example-container">
  <div class="cards-container">
    <div v-for="item in EXAMPLE_DATA" :key="item.title" class="card">
      <img :src="item.icon" alt="icon" class="card-icon">
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-description">{{ item.description }}</p>
      <a :href="item.disabled ? '#' : item.downloadUrl" class="download-button" :class="{ 'disabled': item.disabled }">{{ item.buttonText }}</a>
    </div>
  </div>
</div>