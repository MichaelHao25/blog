import React, { useState, useEffect } from 'react';
export default () => {
    const [load, setLoad] = useState(false);
    useEffect(() => {
        setLoad(true);
    }, [])


    return <div className="container">
        {load &&
            <div>{
                `
                  BODY对象宽度 ==>  ${document.body.clientWidth}  \n
                  BODY对象高度 ==>  ${document.body.clientHeight}  \n
                  可见区域宽度 ==>  ${document.documentElement.clientWidth}  \n
                  可见区域高度 ==>  ${document.documentElement.clientHeight}  \n
                  
                 网页可见区域宽： ${document.body.clientWidth}   \n
                 网页可见区域高： ${document.body.clientHeight}   \n
                 网页可见区域宽： ${document.body.offsetWidth}(包括边线的宽)   \n
                 网页可见区域高： ${document.body.offsetHeight}(包括边线的高)   \n
                 网页正文全文宽： ${document.body.scrollWidth}   \n
                 网页正文全文高： ${document.body.scrollHeight}   \n
                 网页被卷去的高： ${document.body.scrollTop}   \n
                 网页被卷去的左： ${document.body.scrollLeft}   \n
                 网页正文部分上： ${window.screenTop} \n
                 网页正文部分左： ${window.screenLeft} \n
                 屏幕分辨率的高： ${window.screen.height} \n
                 屏幕分辨率的宽： ${window.screen.width} \n
                 屏幕可用工作区高度： ${window.screen.availHeight} \n
                 屏幕可用工作区宽度： ${window.screen.availWidth} \nf
                 `
            }
            </div>
        }
        < style jsx > {`
            .container{
                display: flex;
                align-items: center;
                justify-content: center;
            }    
        `}</style >
    </div>
}
