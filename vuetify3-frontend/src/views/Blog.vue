<script lang="ts" setup>

import BlogCard from "@/components/blog/BlogCards.vue";

type Blog = {
    id: string,
    title: string,
    desc: string,
    headPic: string
    author: {
        avatar: string,
        nickname: string,
    },
    blog_date: string,
    viewCount: number,
    likeCount: number,
    commentCount: number
}
const blogs: Blog[] = [
    {
        id: "1",
        title: "这波操作666",
        author: {
            avatar: "https://pic1.zhimg.com/v2-42f7c35be94a18f25f0514d84cf941c9_r.jpg?source=1940ef5c",
            nickname: "我是主角"
        },
        desc: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        headPic: "https://www.toopic.cn/public/uploads/small/16427494393164274943953.jpg",
        blog_date: " 2022 / 1 / 1",
        viewCount: 0,
        likeCount: 0,
        commentCount: 0
    },
    {
        id: "2",
        title: "这波操作666",
        author: {
            avatar: "https://pic1.zhimg.com/v2-42f7c35be94a18f25f0514d84cf941c9_r.jpg?source=1940ef5c",
            nickname: "我是主角",
        },
        desc: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
        headPic: "@/assets/images/wallhaven-lq5z8p.jpg",
        blog_date: " 2022 / 1 / 1",
        viewCount: 0,
        likeCount: 0,
        commentCount: 0
    }
]
</script>

<template>
    <div>博客首页</div>
    <blog-card :blogs="blogs"></blog-card>
</template>

<style scoped>

</style>
