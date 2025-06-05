import { useGSAP } from '@gsap/react';
import ModelView from './ModelView';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { View } from '@react-three/drei';
import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { yellowImg } from '../utils';
import { models, sizes } from '../constants';
import { animateWidthGSAP, animationWidthGsapTimeline } from '../utils/animation';
const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        id: 1,
        title: 'iPhone 15 Pro in Natural Titanium',
        color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
        img: yellowImg,
    });

    // camera control
    const controlSmall = useRef();
    const controlLarge = useRef();

    // model
    const small = useRef(new THREE.Group());
    const large = useRef(new THREE.Group());

    // rotation
    const [smallRotation, setSmallRotation] = useState(0);
    const [largeRotation, setLargeRotation] = useState(0);

    const tl = gsap.timeline();

    useEffect(() => {
        if (size === 'large') {
            animationWidthGsapTimeline(tl, small, smallRotation, '#view1', '#view2', {
                transform: 'translateX(-100%)',
                duration: 2,
            });
        }
        if (size === 'small') {
            animationWidthGsapTimeline(tl, large, largeRotation, '#view2', '#view1', {
                transform: 'translateX(0)',
                duration: 2,
            });
        }
    }, [size]);
    useGSAP(() => {
        animateWidthGSAP('#heading', {
            opacity: 1,
            y: 0,
        });
    }, []);
    return (
        <section className="common-padding">
            <div className="screen-max-width">
                <h1 id="heading" className="section-heading">
                    Take a closer look.
                </h1>
                <div className="flex flex-col items-center mt-5">
                    <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                        <ModelView
                            index={1}
                            grouRef={small}
                            gsapType="view1"
                            controlRef={controlSmall}
                            setRotation={setSmallRotation}
                            item={model}
                            size={size}
                        />
                        <ModelView
                            index={2}
                            grouRef={large}
                            gsapType="view2"
                            controlRef={controlLarge}
                            setRotation={setLargeRotation}
                            item={model}
                            size={size}
                        />
                        <Canvas
                            className="w-full h-full"
                            style={{ position: 'fixed', top: 0, bottom: 0, left: 0, right: 0, overflow: 'hidden' }}
                            eventSource={document.getElementById('root')}
                        >
                            <View.Port />
                        </Canvas>
                    </div>
                    <div className="mx-auto w-full">
                        <p className="font-light text-sm text-center mb-5">{model.title}</p>
                        <div className="flex-center">
                            <ul className="color-container">
                                {models.map((item, i) => (
                                    <li
                                        key={i}
                                        className={`size-6 mx-2 rounded-full cursor-pointer border-white ${
                                            model === item ? 'border-2' : ''
                                        }  `}
                                        style={{ backgroundColor: item.color[0] }}
                                        onClick={() => setModel(item)}
                                    />
                                ))}
                            </ul>
                            <button className="size-btn-container">
                                {sizes.map(({ label, value }) => (
                                    <span
                                        key={value}
                                        className="size-btn"
                                        style={{
                                            backgroundColor: size === value ? 'white' : 'transparent',
                                            color: size === value ? 'black' : 'white',
                                        }}
                                        onClick={() => setSize(value)}
                                    >
                                        {label}
                                    </span>
                                ))}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Model;
