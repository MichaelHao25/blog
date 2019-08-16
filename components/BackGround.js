const BackGround = () => {
    return <div className="background">
        <style jsx>{`
            .background{
                position: relative;
                background: url('../static/img/blog.jpg') center center/cover no-repeat;
                min-height: 200px;
                max-height: 400px;
            }
            .background:after{
                content: '';
                display: block;
                padding-top:21%;
            }
        `}</style>
    </div>
}
export default BackGround
