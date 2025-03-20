import type { DefaultTheme } from 'vitepress'

export const nav: DefaultTheme.NavItem[] = [
    {
        text: '示例',
        link: '/example',
    },
    {
        text: '导航',
        link: '/nav',
    },
    {
        text: "博客",
        link: '/blog',
        activeMatch: '^/blog',
    },
    {
        text: '提效工具',
        items: [
            {
                text: '软件推荐与配置',
                items: [
                    { text: 'Mac 平台', link: '/efficiency/mac/surge' },
                    { text: 'Windows 平台', link: '/efficiency/windows/keymap' },
                ]
            },
        ],
        activeMatch: '^/efficiency'
    },
    {
        text: 'FeedsSub',
        link: '/feeds-sub'
    },
    {
        text: 'About',
        link: '/about'
    }
]
