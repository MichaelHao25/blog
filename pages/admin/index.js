import React, { useState, useEffect } from 'react';


export default () => {
    // document.documentElement.clientWidth
    // document.documentElement.clientHeight
    const [load, setLoad] = useState(false);
    const [screen, setScreen] = useState({
        width: 0,
        height: 0,
    })
    useEffect(() => {
        setLoad(true);
        const getScreen = () => {
            setScreen({
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            })
        }
        window.addEventListener('resize', getScreen)
        //自定义事件触发
        let event = new Event('resize');
        window.dispatchEvent(event);
        //自定义事件触发
        // getScreen()
        return () => {
            window.removeEventListener('resize', getScreen)
        }
    }, [])
    const { width, height } = screen;
    // const { getFieldDecorator } = this.props.form;

    const handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    return <>
        <div style={{ width, height }} className="container">
            {
                width != 0 &&
                <div className="form">
                    <h1>管理登录</h1>
                    <div className="item">
                        <input type="text" placeholder="请输入用户名" tabIndex={1} autoFocus />
                    </div>
                    <div className="item">
                        <input type="password" placeholder="请输入密码" className="bdt-n" tabIndex={2} />
                    </div>
                    <div className="item">
                        <input type="submit" value="登录" className="submit" />
                    </div>
                </div>
            }
        </div>
        <style jsx> {`
            .container{
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .form{
                min-width: 250px;
            }
            h1{
                font-size:20px;
                font-weight:bold;
                text-align:center;
                padding:0 0 20px 0;
            }
            input{
                border:#ccc 1px solid;
                background:#f7f7f7;
                width:100%;
                height:40px;
                font-size:14px;
                outline:none;
                padding: 0 10px;
                color:#000;
                box-sizing: border-box;
            }
            .bdt-n{
                border-top:none;
            }
            .submit{
                max-width:80%;
                display:block;
                margin:30px auto 0;
            }
        `}</style>
    </>
}





// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some(field => fieldsError[field]);
// }

// class HorizontalLoginForm extends React.Component {
//   componentDidMount() {
//     // To disabled submit button at the beginning.
//     this.props.form.validateFields();
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.form.validateFields((err, values) => {
//       if (!err) {
//         console.log('Received values of form: ', values);
//       }
//     });
//   };

//   render() {
//     const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

//     // Only show error after a field is touched.
//     const usernameError = isFieldTouched('username') && getFieldError('username');
//     const passwordError = isFieldTouched('password') && getFieldError('password');
//     return (
//       <Form layout="inline" onSubmit={this.handleSubmit}>
//         <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
//           {getFieldDecorator('username', {
//             rules: [{ required: true, message: 'Please input your username!' }],
//           })(
//             <Input
//               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               placeholder="Username"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
//           {getFieldDecorator('password', {
//             rules: [{ required: true, message: 'Please input your Password!' }],
//           })(
//             <Input
//               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//               type="password"
//               placeholder="Password"
//             />,
//           )}
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
//             Log in
//           </Button>
//         </Form.Item>
//       </Form>
//     );
//   }
// }

// const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);
