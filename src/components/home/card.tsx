import "./globals.css"
import Slider from "./slider"

export default function Card() {

    const style1 = {
        background: "linear-gradient(180deg, #010101 0%, #292929 90%)"
    }
    const style2 = {
        background: "linear-gradient(180deg, #292929 0%, #0f1019 90%)"
    }
    const style3 = {
        backgroundImage: "linear-gradient(180deg, #212125 0%, #090913 90%)"
    }
    const style4 = {
        backgroundImage: "linear-gradient(180deg, #090913 0%, #010101 90%)"
    }
    const style5 = {
        border: 0
    }

    return (
        <>
            <div className="container flex-col" style={style1}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">A<span className="samkaran">BOUT</span><span className="samkaran"> US</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat,
                            ad impedit, esse eius deserunt est numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error
                            quae. Corrupti tenetur totam magnam. Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat, ad impedit, esse eius deserunt est
                            numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error quae. Corrupti tenetur totam magnam.
                            Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi?
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                <img src="https://picsum.photos/id/815/400/400" alt="Two hands creating a heart and showing the sun" />
                                <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
                                <img src="https://picsum.photos/id/603/400/400" alt="a river" />
                                <img src="https://picsum.photos/id/823/400/400" alt="a women with a camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container" style={style2}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">E<span className="samkaran">VENTS</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row-reverse">
                        <div className="sub-left flex text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat,
                            ad impedit, esse eius deserunt est numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error
                            quae. Corrupti tenetur totam magnam. Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat, ad impedit, esse eius deserunt est
                            numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error quae. Corrupti tenetur totam magnam.
                            Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi?
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                <img src="https://picsum.photos/id/815/400/400" alt="Two hands creating a heart and showing the sun" />
                                <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
                                <img src="https://picsum.photos/id/603/400/400" alt="a river" />
                                <img src="https://picsum.photos/id/823/400/400" alt="a women with a camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Slider/>

            <div className="container" style={style3}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">O<span className="samkaran">UR</span> <span className="samkaran">Team</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat,
                            ad impedit, esse eius deserunt est numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error
                            quae. Corrupti tenetur totam magnam. Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi? Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Non ratione doloribus, mollitia dolorem aliquam eveniet labore in earum placeat laudantium quaerat, ad impedit, esse eius deserunt est
                            numquam. Doloremque, illo? Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ab autem repellendus error quae. Corrupti tenetur totam magnam.
                            Quo modi fugiat mollitia maxime sint amet alias ea veniam tempora sequi?
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                <img src="https://picsum.photos/id/815/400/400" alt="Two hands creating a heart and showing the sun" />
                                <img src="https://picsum.photos/id/872/400/400" alt="The mountain" />
                                <img src="https://picsum.photos/id/603/400/400" alt="a river" />
                                <img src="https://picsum.photos/id/823/400/400" alt="a women with a camera" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={style4} id="contactUs">
                <div className="bg-1"></div>
                <div className="top">
                    <div className="flex flex-row gap-2">
                        <div className="header"><span className="samkaran">CONTACT</span> U<span className="samkaran">S</span></div>
                    </div>
                </div>
                <div className="lower flex flex-row">
                    <div className="sub-container flex-row-reverse">
                        <div className="sub-left flex text">
                            <div className="contact">
                                <div className="contact-item">
                                    <div className="contact-item-header">Phone</div>
                                    <div className="contact-item-content">+91 1234567890</div>
                                </div>
                                <div className="contact-item">
                                    <div className="contact-item-header">Email</div>
                                    <div className="contact-item-content">estoria@iiitn.ac.in</div>
                                </div>
                            </div>
                        </div>
                        <div className="sub-right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.064267689423!2d79.02379987471234!3d20.94993409048242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1713753805056!5m2!1sen!2sin" width="600" height="450" style={style5} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}