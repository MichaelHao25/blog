const BackGround = (props) => {
    const { url, title, content } = props;

    return <div className={`background ${url ? 'bg' : 'bg-image'}`} style={url ? { backgroundImage: `url(${url})` } : {}}>
        <div className="w1500">
            <div className="container">
                {
                    title && <h2>{title}</h2>
                }
                {
                    content && <p>{content}</p>
                }
            </div>
        </div>
        <style jsx>{`
            .bg{
                background-position: center center;
                background-repeat: no-repeat;
                background-size: cover;
            }
            .bg-image{
                background: #1f3747;
                background-image:linear-gradient(left,#1f3747,#293d31);
            }
            .background{
                position: relative;
                min-height: 200px;
                max-height: 400px;
                overflow: hidden;
            }
            .background:after{
                content: '';
                display: block;
                padding-top:21%;
            }
            .w1500{
                position: relative;
            }
            .container{
                position: absolute;
                color: #fff;
                line-height: 1.5;
            }
            h2{
                padding-top: 60px;
                font-size: 36px;
                padding-bottom: 18px;
            }
            p{
                font-size: 18px;
                max-width: 1000px;
            }
        `}</style>
    </div>
}
export default BackGround
