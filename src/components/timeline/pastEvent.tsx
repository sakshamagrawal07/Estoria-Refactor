'use client';

import { useRef } from "react";
import "./global.css";
import { useInView } from "react-hook-inview";

export default function PastEvent() {
    const items = Array(10).fill(0);
    const refs = useRef([]);

    return (
        <div className="past-event-box">
            <section className="timeline">
                <section className="modal hidden scroll-y scroll-x">
                    <div className="flex-2">
                        <button className="btn-close">⨉</button>
                    </div>
                    <div>
                        <h1 className="text-center samkaran">heading</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error rem, atque quisquam excepturi neque eos corrupti porro libero perspiciatis iure! Pariatur accusamus ex porro reiciendis eos assumenda odit ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit provident doloremque nam beatae labore a tenetur, assumenda facere molestiae iusto voluptatum dolorem laudantium laboriosam earum nemo reprehenderit rem omnis aliquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe odit nobis doloremque, eveniet placeat mollitia sapiente nulla error illum sunt ducimus cum omnis provident fugit, beatae id molestias, atque sed! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam inventore maiores, cupiditate fuga consectetur quae harum animi. Dolores odio tempora, eos, exercitationem quasi rem illo aliquid architecto nam neque quisquam provident suscipit voluptas. Quod veniam voluptate eaque sed quisquam sapiente.
                        </p>
                    </div>
                </section>

                <h1 className="heading-sec">
                    <span className="font-style">P</span>AST <span className="font-style">E</span>VENTS
                </h1>
                <ul>
                    {items.map((_, index) => {
                        const [ref, inView] = useInView({ threshold: 0.5 });
                        refs.current[index] = ref;

                        return (
                            <li key={index} ref={ref} className={inView ? "in-view" : ""}>
                                <div>
                                    <time>11 JUN,1687</time>
                                    <div className="content">
                                        <h1>content</h1>
                                        <p>
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Reiciendis iusto quae beatae nulla, ipsum, quas officiis,
                                            reprehenderit enim eos similie?
                                        </p>
                                        <a className="btn btn-open"> See more</a>
                                    </div>
                                    <div className="photo"></div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </section>
        </div>
    );
}
