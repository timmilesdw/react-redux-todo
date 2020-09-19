import React from 'react'
import { Layout, Button, Space } from 'antd'
import { Link } from '@reach/router'

interface Props {}

export const Navigation: React.FC<Props> = () => (
    <Layout.Header style={{ backgroundColor: '#039be5'}}>
        <Space align='center'>
            <Link to=''>
                <Button shape='round' size='large'>Home</Button>
            </Link>
            <Link to='todos'>
                <Button shape='round' size='large'>Todos</Button>
            </Link>
        </Space>
    </Layout.Header>
)
