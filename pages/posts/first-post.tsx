// 第一篇文章
import React from "react"
import { NextPage } from 'next';
import Link from 'next/link'

const FirstPost: NextPage = () => {
    console.log(777777777)
    return (
        <>
               <div>First Post</div>
        // 回到首页
        <a href="/">a 点击这里</a>
        <Link href="/">link 点击这里</Link>
        </>
 
    )
}
export default FirstPost;