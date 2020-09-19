import { Card, Input, Form, Button } from 'antd'
import React from 'react'
import { useAlert } from 'react-alert'
import { useRootDispatcher } from '../store/hooks/useRootDispatcher'
import { ITodo } from '../store/root-reducer'

interface Props {}

export const TodoAdd: React.FC<Props> = () => {
    
    const alert = useAlert()
    const rootDispatcher = useRootDispatcher()
    const [ form ] = Form.useForm()


    const onFinishFailed = (errorInfo: { [key: string]: any }): void => {
        errorInfo.errorFields && errorInfo.errorFields.map((errors: { name: string[], errors: string[] }) => {
            errors.errors.map((error: string) => {
                alert.show(error, {
                    type: 'error'
                })
            })
        })
    }
    const onFinish = (values: ITodo): void => {
        rootDispatcher.createTodo(values)
        alert.show('Todo is succesfully created', {
            type: 'success'
        })
        form.resetFields()
    }
    
    return (
        <Card title="Add todo" style={{ width: 300, marginTop: '25px' }}>
            <Form
                layout="vertical"
                name="basic"
                form={form}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input your todos title' }]}
                >
                    <Input placeholder='Watch a movie'/>
                </Form.Item>

                <Form.Item
                    label="Description"
                    name="description"
                >
                    <Input placeholder='Not pretty sure which' />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </Card>
    )
}