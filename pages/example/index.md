---
description: 示例页面
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

# 示例页面

::: info
* 这是一个自定义页面的示例
* 你可以根据需要修改页面内容和样式
:::

## 页面布局

### 布局配置
在页面的 frontmatter 中，我们使用了以下配置来自定义页面布局：

```yaml
layoutClass: m-example-layout
outline: [2, 3, 4]
showArticleMetadata: false
editLink: false
showComment: false
```

### 样式定制
通过 `style.scss` 文件，我们可以为页面添加自定义样式：
- 调整页面最大宽度
- 自定义侧边栏样式
- 设计卡片组件样式

## 组件示例

### 卡片组件
下面展示了一个使用 Vue 组件构建的卡片列表示例：

<div class="example-container">
  <h2>示例内容</h2>
  <p>这里展示了三个卡片组件的示例</p>
  <div class="cards-container">
    <div v-for="item in EXAMPLE_DATA" :key="item.title" class="card">
      <div class="card-icon">{{ item.icon }}</div>
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-description">{{ item.description }}</p>
      <a :href="item.disabled ? '#' : item.downloadUrl" class="download-button" :class="{ 'disabled': item.disabled }">{{ item.buttonText }}</a>
    </div>
  </div>
</div>

### 数据管理
卡片组件的数据来源于 `data.ts` 文件，采用了以下数据结构：

```ts
export interface ExampleItem {
  icon: string
  title: string
  description: string
  downloadUrl: string
}
```

## 使用指南

### 创建新页面
1. 在 `pages` 目录下创建新文件夹
2. 添加 `index.md` 文件
3. 配置页面的 frontmatter
4. 添加页面内容

### 自定义样式
1. 创建 `style.scss` 文件
2. 定义页面专属的样式类
3. 在页面中引入样式文件