import React from 'react'
import { Image } from 'antd'
import { useSpring, animated } from 'react-spring'

import logo from '../assets/logo192.png'


interface Props {}

const calc = (x: number, y: number) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x:number, y: number, s: number) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export const ImageTilt: React.FC<Props> = () => {
    
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 2, tension: 150, friction: 100 } }))

    return (
        <animated.div
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })} 
            style={{ transform: props.xys.interpolate(trans as any) }}
        >
            <Image 
                src={logo} 
                preview={false}
            />
        </animated.div>
    )
}
