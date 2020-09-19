import React from 'react'
import { Link, RouteComponentProps } from '@reach/router'
import { Row, Button } from 'antd'
import { ImageTilt } from './ImageTilt'

interface Props extends RouteComponentProps {  }

export const Home: React.FC<Props> = () => (
    <div className='container'>
        
        <ImageTilt />

        <Row align='middle' justify='center'>
            <h1>React Redux TodoApp</h1>
        </Row>

        <Row align='middle' justify='center'>
            <p>
                Simple 30 minutes todo app, created with Typescript, React and Redux
            </p>
        </Row>

        <Row align='middle' justify='center'>
            <Link to='todos'><Button size='large' type='primary' shape='round'>To Todos</Button></Link>
        </Row>
    </div>
)
