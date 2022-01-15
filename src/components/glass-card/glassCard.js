
import React from 'react';
import {
    motion
} from 'framer-motion';
import {isMobile} from 'react-device-detect';
import Hover from 'react-3d-hover';
import { useInView } from 'react-intersection-observer';
import { useModal, Modal } from 'react-morphing-modal';
import 'react-morphing-modal/dist/ReactMorphingModal.css';
import './glassCard.css';

export default function GlassCard({ title, work, tags, image, text }) {
    const { modalProps, getTriggerProps } = useModal({
        background: '#000000',
        color: "#ffffff",
        zIndex: 4,
        cursor: "default"
    });
    const [ref, inView] = useInView({
        /* Optional options */
        threshold: 0.5,
        triggerOnce: false
    });

    const variants = {
        visible: { opacity: 1, scale: 1, y: 0 },
        hidden: {
            opacity: 0,
            scale: 0.65,
            y: 50
        }
    };
    return (

        <>
            <div className="glass-card" style={{ cursor: 'auto' }}>
                <motion.div
                    animate={inView ? 'visible' : 'hidden'}
                    variants={variants}
                    transition={{ duration: 2, ease: 'easeOut' }}
                    ref={ref}
                    className="magic"
                >
                    <Hover max={30}>
                        <div {...getTriggerProps()} className="glassmorphism" >
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img className="w-full" src={image} alt="Sunset in the mountains" style={{ objectFit: "cover", height: "150px" }} />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{title}</div>
                                    <p className="text-base">
                                        {work}    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                {tags.map(item =>  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{item}</span>)}
                                    {/* <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
                                </div>
                            </div>

                        </div>
                    </Hover>
                </motion.div>
            </div>
            <Modal {...modalProps} padding={false}>
                <h2 className="project-title">{title}</h2>
                <img alt={title} src={image} className="project-image" />
                <h3 dangerouslySetInnerHTML={{__html: text}}className={isMobile ? 'project-text-mobile' : 'project-text'}></h3>
            </Modal>
        </>

    )
}