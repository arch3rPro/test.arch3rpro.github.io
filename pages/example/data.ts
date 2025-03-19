import type { NavData } from '../../.vitepress/theme/types'

export const EXAMPLE_DATA = [
  {
    title: '卡片标题1',
    description: '这是第一张卡片的描述内容，可以包含多行文本。',
    icon: '🚀',
    downloadUrl: 'https://example.com/download1.zip',
    disabled: false,
    buttonText: '下载'
  },
  {
    title: '卡片标题2',
    description: '这是第二张卡片的描述内容，展示了卡片组件的灵活性。',
    icon: '💡',
    downloadUrl: 'https://example.com/download2.zip',
    disabled: true,
    buttonText: '敬请期待'
  },
  {
    title: '卡片标题3',
    description: '这是第三张卡片的描述内容，可以根据需要自定义样式。',
    icon: '🎨',
    downloadUrl: 'https://example.com/download3.zip',
    disabled: true,
    buttonText: '敬请期待'
  }
]