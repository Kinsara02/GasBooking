import React from 'react'
import {Form} from 'antd'

function Register(){
    return (
        <div className='h-screen d-flex justify-content-center align-items-center'>
            <div className= 'w-400 card p-3'>
                <h1 className= 'text-center'>Register</h1>
                <Form layout="vertical">
                    <Form.Item label='Name'>
                        <input type="text"></input>
                    </Form.Item>
                    <Form.Item label='Email'>
                        <input type="text"></input>
                    </Form.Item>
                    <Form.Item label='Password'>
                        <input type="text"></input>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}
export default Register