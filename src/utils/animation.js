import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

export const animationWidthGsapTimeline = (
    timeline,
    rotationRef,
    rotationState,
    firstTarget,
    secondTarget,
    animationProp,
) => {
    timeline.to(rotationRef.current.rotation, {
        y: rotationState,
        duration: 1,
        ease: 'power2.inOut',
    });
    timeline.to(
        firstTarget,
        {
            ...animationProp,
            ease: 'power2.inOut',
        },
        '<',
    );
    timeline.to(
        secondTarget,
        {
            ...animationProp,
            ease: 'power2.inOut',
        },
        '<',
    );
};

export const animateWidthGSAP = (target, animationProp, scrollProps) => {
    gsap.to(target, {
        ...animationProp,
        scrollTrigger: {
            trigger: target,
            toggleAttribute: 'restart reverse restart reverse',
            start: 'top 85%',
            ...scrollProps,
        },
    });
};
