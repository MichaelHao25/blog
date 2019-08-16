import React, {
    useEffect,
    useState, createRef
} from 'react';
import Layout from '../components/Layout';
import BackGround from '../components/BackGround';
import Link from 'next/link';
// import { useRouter } from 'next/router'

// back = #1890ff
// color = #333
export default (props) => {
    // const router = useRouter();    
    return <Layout>
        <BackGround />
        <Container>
            <List />
            <Aside />
        </Container>
    </Layout>
}
const Container = (props) => {
    return <div className="container">
        <div className="w1500">
            {props.children}
        </div>
        <div style={{ height: 30, }}></div>
        {/* background: #dee3e7; */}
        {/* border-top: 1px solid #c4cdd4; */}
        <style jsx>{`
            .container{
                
                background: #fff;
            }
            .w1500{
                display: flex;
            }
            @media(max-width:1200px){
                .w1500{
                    flex-direction: column;
                }
            }
            @media(max-width:700px){
                .w1500{
                    width: 100%;
                    padding: 0 15px;
                    box-sizing: border-box;
                }
            }
        `}</style>
    </div>
}
const Aside = () => {
    const SpaceBorder = (props) => {
        return <div style={{ paddingBottom: props.paddingBottom, }}>
            {props.children}
            <style jsx>{`
                div{
                    padding: 20px 0;
                    border-bottom: 1px solid #eee;
                }
            `}</style>
        </div>
    }
    return <aside className="aside">
        <SpaceBorder>
            <UserInfo />
        </SpaceBorder>
        <SpaceBorder paddingBottom={10}>
            <Label />
        </SpaceBorder>
        <SpaceBorder>
            <Card />
        </SpaceBorder>
        <style jsx>{`
            .aside{
                flex: 4;
                max-width: 350px;
                min-width: 300px;
            }
            @media(max-width:1200px){
                .aside{
                    display: none;
                }
            }
            @media(max-width:700px){
                .aside{
                    display: block;
                    margin: 0 auto;
                    min-width: auto;
                }
            }
        `}</style>
    </aside>
}
const Card = () => {
    return <div>
        <h3>美女</h3>
        <img src="../static/img/g3M004FA5wKgBOV1RTiuAZ4lYAALxKzVe0xQ305.jpg" alt="" />
        <style jsx>{`
            img{
                width: 100%;
                display: block;
            }
            h3{
                font-size: 20px;
                color: #333;
                text-align: left;
                line-height: 1;
                padding-bottom:20px; 
            }
    
        `}</style>
    </div>
}
const UserInfo = () => {
    return <div>
        <img src="../static/img/g3M004C9DwKgBOV1QLUSACpB8AAGXwF1Yrlw824.jpg" alt="" />
        <h2>Blue</h2>
        <style jsx>{`
            img{
                width: 110px;
                height: 110px;
                border-radius: 50%;
                display: block;
                margin:0 auto;
            }
            h2{
                font-size: 30px;
                color: #333;
                text-align: center;
                line-height: 1;
                padding-top:5px; 
            }
        `}</style>
    </div>
}
const List = () => {
    const Item = () => {
        return <Link href="/">
            <a>
                <div className="item">
                    <div className="img">
                        <img src="../static/img/g3M004FA5wKgBOV1RTiuAZ4lYAALxKzVe0xQ305.jpg" alt="" />
                    </div>
                    <div className="content">
                        <div>
                            <h3><span>[几天前]</span>JavaScript 数据结构与算法之美 - 桶排序、计数排序、基数排序</h3>
                            <p>之所以把计数排序、桶排序、基数排序 放在一起比较，是因为它们的平均时间复杂度都为 O(n)。</p>
                        </div>
                        <div>
                            <div className="option"><span>查看242</span><span>评论3</span><span>赞1</span>2019-07-30 22:54:16</div>
                        </div>
                    </div>
                </div>

                <style jsx>{`
                a{
                    display: block;
                }
                .item{
                    padding: 20px 0;
                    border-bottom: 1px solid #eee;
                    display: flex;
                }
               
                .img img{
                    display: block;
                    max-width: 200px;
                }
                .content{
                    flex:1 1 auto;
                    min-width: 0;
                    padding-left:20px;
                    display:flex;
                    flex-direction: column;
                    justify-content: space-between;
                }
                .content h3 {
                    color: #333;
                    padding-bottom: 5px;
                    display: block;
                    font-size: 18px;
                    font-weight: 700;
                    line-height: 1.5;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    width: 100%;
                }
                .content p {
                    padding: 0 0 10px;
                    font-size: 14px;
                    line-height: 24px;
                    color: #555
                }

                .content .option {
                    font-size: 12px;
                    line-height: 20px;
                    color: #555;
                }
                span{
                    padding-right:5px;
                }
                @media(max-width:700px){
                    .item{
                        flex-direction: column;
                        max-width: 400px;
                        margin: 0 auto;
                    }
                    .img img{
                        max-width: none;
                        width: 100%;
                    }
                    .content{
                        padding:10px 0 0 0;
                    }
                }
            `}</style>
            </a>
        </Link>
    }
    const Page = () => {
        return <div className="page">
            <Link href="/">
                <a className="left">
                    <svg viewBox="64 64 896 896" width="12" height="12" fill="currentColor"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path></svg>
                </a>
            </Link>
            <Link href="/"><a className="number active">1</a></Link>
            <Link href="/"><a className="number">2</a></Link>
            <Link href="/"><a className="number">3</a></Link>
            <Link href="/"><a className="number">4</a></Link>
            <span>...</span>
            <Link href="/"><a className="number">100</a></Link>
            <Link href="/">
                <a className="right">
                    <svg viewBox="64 64 896 896" width="12" height="12" fill="currentColor"><path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"></path></svg>
                </a>
            </Link>
            <style jsx>{`
                .page{
                    padding: 20px 0;
                    display: flex;
                    justify-content: center;
                    color: #333;
                    font-size: 12px;
                }
                span{
                    margin: 0 3px;
                    line-height: 32px;
                }
                .page a{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 30px;
                    height: 30px;
                    border:1px solid #d9d9d9;
                    border-radius: 5px;
                    margin: 0 3px;
                    transition: 0.3s;
                }
                .page a.active,
                .page a:hover{
                    color: #1890ff;
                    border-color: #1890ff;
                }
            `}</style>
        </div>
    }
    return <div className="container">
        <Item />
        <Page />
        <style jsx>{`
            .container{
                flex:8;
                padding-right: 30px;
                min-width: 0;
            }
            @media(max-width:1200px){
                .container{
                    flex: 1;
                    padding-right: 0;
                }
            }
        `}</style>
    </div>
}
const Label = () => {
    let list = [{ title: '全部标签', value: 5 }, { title: 'javascript', value: 50, select: true }, { title: 'jQuery', value: 0 }, { title: '分享', value: 0 }, { title: '前端', value: 0 }]
    const Item = (props) => {
        const { item } = props;
        return <>
            <div className={`item ${item.select ? 'active' : ''}`}>
                {item.title}
                {item.value ? <span>{item.value}</span> : ''}
            </div>
            <style jsx>{`
                .item {
                    position: relative;
                    max-width: 100%;
                    height: 24px;
                    margin: 0 5px 10px;
                    line-height: 24px;
                    padding: 0 8px 0 18px;
                    border-radius: 0 4px 4px 0;
                    background: #eee;
                    font-size: 12px;
                    color: #333;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    box-sizing: border-box;
                    cursor: pointer;
                }

                .item span {
                    opacity: .3;
                    padding: 0 0 0 5px
                }

                .item:before {
                    position: absolute;
                    content: "";
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    border-width: 12px 12px 12px 0;
                    border-color: #fff transparent;
                    border-style: solid
                }

                .item:after {
                    position: absolute;
                    content: "";
                    width: 4px;
                    height: 4px;
                    top: 10px;
                    left: 8px;
                    border-radius: 100%;
                    background: #fff
                }

                .item:hover {
                    background: #333;
                    color: #fff
                }

                .item.active {
                    background: #1890ff;
                    color: #fff
                }
            `}</style>
        </>;
    }
    return <div className="container">
        {list.map((value, index) => {
            return <Item key={index} item={value} />
        })}
        {/* .container{
                padding: 10px 0 0;
            } */}
        <style jsx>{`
         
            .container{
                display: flex;
                flex-wrap: wrap;
            }
            @media(max-width:600px){
                .w1500{
                    width:100%;
                    padding: 0 10px;
                    box-sizing: border-box;
                }
            }
        `}</style>
    </div>
}
