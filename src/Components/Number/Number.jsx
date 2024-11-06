import React, { useEffect, useState, useRef, useCallback } from 'react';
import './Number.css';

export default function Number() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);
    const [count4, setCount4] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Function to handle counting for each count
    const startCounting = useCallback(() => {
        const timer1 = setInterval(() => {
            setCount1((prevCount) => {
                if (prevCount < 10) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer1);
                    return prevCount;
                }
            });
        }, 100);

        const timer2 = setInterval(() => {
            setCount2((prevCount) => {
                if (prevCount < 15) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer2);
                    return prevCount;
                }
            });
        }, 100);

        const timer3 = setInterval(() => {
            setCount3((prevCount) => {
                if (prevCount < 10) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer3);
                    return prevCount;
                }
            });
        }, 100);

        const timer4 = setInterval(() => {
            setCount4((prevCount) => {
                if (prevCount < 99) {
                    return prevCount + 1;
                } else {
                    clearInterval(timer4);
                    return prevCount;
                }
            });
        }, 10);

        return () => {
            clearInterval(timer1);
            clearInterval(timer2);
            clearInterval(timer3);
            clearInterval(timer4);
        };
    }, []);

    // Intersection Observer to detect when the section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Stop observing once the section is visible
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Start counting when the section becomes visible
    useEffect(() => {
        if (isVisible) {
            startCounting();
        }
    }, [isVisible, startCounting]);

    return (
        <section className='number' ref={sectionRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <p className='count'>{count1}+</p>
                        <p className="last">Многолетний опыт</p>
                    </div>
                    <div className="col-lg-3">
                        <p className='count'>{count2}K+</p>
                        <p className="last">Положительный отзыв</p>
                    </div>
                    <div className="col-lg-3">
                        <p className='count'>{count3}K</p>
                        <p className="last">проекты</p>
                    </div>
                    <div className="col-lg-3">
                        <p className='count'>{count4}%</p>
                        <p className="last">Возврат инвестиций</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
