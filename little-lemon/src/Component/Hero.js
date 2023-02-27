import React from 'react';
import salad from './greekSalad.jpg';
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <div className="leftChild">
                <div>
                    <h1>Little Lemon</h1>
                    <h2>chikago</h2>
                </div>
                <div>
                    <section>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            <br />
                            Hic atque sit error earum iusto omnis maiores magni nostrum cum vitae amet, minima, asperiores doloribus, ullam similique pariatur? Iure, itaque sunt?
                        </p>
                    </section>
                </div>
            </div>
            <div className="rightChild">
                <img className="salad" src={salad} width="40" height="40" alt="Salad" />
            </div>
        </div>
    );
}
