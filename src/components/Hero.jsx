import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import { useEffect, useState } from 'react';

const Hero = () => {
    const [videoSrc, setVideoSrc] = useState(window.innerWidth < 750 ? smallHeroVideo : heroVideo);

    const handleVideoSrc = () => {
        if (window.innerWidth < 750) {
            setVideoSrc(smallHeroVideo);
        } else {
            setVideoSrc(heroVideo);
        }
    };
    useEffect(() => {
        window.addEventListener('resize', handleVideoSrc);
        return () => {
            window.removeEventListener('resize', handleVideoSrc);
        };
    }, []);
    useGSAP(() => {
        gsap.to('#hero', {
            opacity: 1,
            delay: 1.5,
        });
        gsap.to('#cta', {
            opacity: 1,
            delay: 1.5,
            y: -20,
        });
    });
    return (
        <section className="w-full nav-height bg-black relative">
            <div className="h-5/6 flex-center flex-col">
                <p id="hero" className="hero-title">
                    iphone
                </p>
                <div className="max-md:w-10/12 w-9/12">
                    <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                </div>

                <div id="cta" className="flex flex-col items-center opacity-0 translate-y-20">
                    <a href="#highlight" className="btn">
                        Buy
                    </a>
                    <p>From $199/month or $999</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
