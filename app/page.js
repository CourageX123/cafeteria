import React from 'react'

const page = () => {
    return (
        <React.Fragment>
            <header>
                <nav className="header-nav container">
                    <ul className="menu-list">
                        <li className="menu-list pointer">HOME</li>
                        <li className="menu-list pointer">ABOUT</li>
                        <li className="menu-list pointer">RESERVATION</li>
                        <li className="menu-list pointer">CATEGORY</li>
                    </ul>
                    <div className="logo">
                        <label>cafeteria</label>
                    </div>
                    <div className="header-cta">
                        <a href='/signup' className="btn-white pointer">
                            order now
                        </a>
                    </div>
                </nav>
            </header>
            <main>
                <section className="hero-section">
                    <div className="hero container">
                        <h1>Every Good Taste Tells a Story</h1>
                        <p>Lorem ipsum dolor sit amet consectetur.</p>
                        <button className="btn-white pointer">
                            Make a Reservation
                        </button>
                    </div>
                </section>
                <section className="intro">
                    <div className="intro-section container">
                        <div className="intro-svg">
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32" height="50px"
                                width="50px" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M 15 3 L 15 4.625 C 13.039063 4.832031 10.539063 5.609375 8.21875 6.90625 C 5.503906 8.425781 3 10.664063 3 13.65625 C 3 15.441406 4.449219 17 6.34375 17 C 7.25 17 8.03125 16.621094 8.625 16.09375 C 8.636719 16.085938 8.644531 16.074219 8.65625 16.0625 C 9.242188 16.675781 10.089844 17 11 17 C 11.988281 17 12.820313 16.582031 13.40625 16.03125 C 13.820313 16.425781 14.363281 16.71875 15 16.875 L 15 23.59375 C 13.464844 23.871094 12.40625 24.6875 12.40625 24.6875 L 13.59375 26.3125 C 13.59375 26.3125 14.753906 25.5 16 25.5 C 17.246094 25.5 18.40625 26.3125 18.40625 26.3125 L 19.59375 24.6875 C 19.59375 24.6875 18.535156 23.871094 17 23.59375 L 17 16.84375 C 17.5625 16.6875 18.054688 16.429688 18.4375 16.09375 C 19.023438 16.6875 19.855469 17 20.75 17 C 21.757813 17 22.601563 16.566406 23.1875 16 C 23.230469 16.039063 23.269531 16.085938 23.3125 16.125 C 23.917969 16.644531 24.714844 17 25.59375 17 C 27.460938 17 29 15.496094 29 13.6875 C 29 10.703125 26.539063 8.472656 23.84375 6.9375 C 21.539063 5.625 19.007813 4.832031 17 4.625 L 17 3 Z M 15.9375 7 C 16.070313 7.1875 16.1875 7.28125 16.34375 7.59375 C 16.855469 8.625 17.429688 10.441406 17.5 13.40625 C 17.492188 13.46875 17.492188 13.53125 17.5 13.59375 C 17.503906 13.730469 17.5 13.859375 17.5 14 C 17.5 14.015625 17.410156 14.324219 17.15625 14.5625 C 16.902344 14.800781 16.535156 15 16 15 C 14.910156 15 14.5 14.125 14.5 14 C 14.5 13.859375 14.5 13.730469 14.5 13.59375 C 14.5 13.5625 14.5 13.53125 14.5 13.5 C 14.554688 10.238281 15.121094 8.402344 15.625 7.4375 C 15.75 7.195313 15.828125 7.148438 15.9375 7 Z M 18.46875 7.625 C 18.679688 7.746094 18.847656 7.789063 19.0625 7.9375 C 20.636719 9.023438 22.117188 10.734375 22.21875 13.6875 C 22.191406 13.921875 22.09375 14.25 21.875 14.5 C 21.632813 14.78125 21.324219 15 20.75 15 C 20.277344 15 20.03125 14.859375 19.84375 14.65625 C 19.65625 14.453125 19.5 14.125 19.5 13.59375 C 19.503906 13.5 19.492188 13.402344 19.46875 13.3125 C 19.398438 10.722656 18.984375 8.941406 18.46875 7.625 Z M 13.375 7.96875 C 12.941406 9.25 12.59375 10.898438 12.53125 13.3125 C 12.53125 13.324219 12.53125 13.332031 12.53125 13.34375 C 12.515625 13.40625 12.503906 13.46875 12.5 13.53125 C 12.5 13.550781 12.5 13.574219 12.5 13.59375 C 12.5 13.828125 12.367188 14.21875 12.125 14.5 C 11.882813 14.78125 11.574219 15 11 15 C 10.527344 15 10.28125 14.859375 10.09375 14.65625 C 9.90625 14.453125 9.75 14.125 9.75 13.59375 C 9.75 13.507813 9.738281 13.425781 9.71875 13.34375 C 9.71875 13.332031 9.71875 13.324219 9.71875 13.3125 C 9.957031 10.929688 11.40625 9.308594 12.9375 8.1875 C 13.15625 8.027344 13.160156 8.105469 13.375 7.96875 Z M 10.21875 8.21875 C 8.875 9.667969 7.6875 11.449219 7.6875 14 C 7.6875 14.023438 7.59375 14.34375 7.3125 14.59375 C 7.03125 14.84375 6.636719 15 6.34375 15 C 5.535156 15 5 14.371094 5 13.65625 C 5 11.851563 6.765625 10.011719 9.1875 8.65625 C 9.519531 8.472656 9.871094 8.382813 10.21875 8.21875 Z M 22.15625 8.375 C 22.382813 8.488281 22.625 8.53125 22.84375 8.65625 C 25.242188 10.023438 27 11.871094 27 13.6875 C 27 14.378906 26.425781 15 25.59375 15 C 25.273438 15 24.894531 14.855469 24.625 14.625 C 24.355469 14.394531 24.25 14.117188 24.25 14 C 24.25 13.859375 24.253906 13.726563 24.25 13.59375 C 24.253906 13.5 24.242188 13.402344 24.21875 13.3125 C 24.0625 11.191406 23.191406 9.65625 22.15625 8.375 Z M 6 24 C 5.449219 24 5 24.449219 5 25 C 5 25.550781 5.449219 26 6 26 C 6.550781 26 7 25.550781 7 25 C 7 24.449219 6.550781 24 6 24 Z M 10 24 C 9.449219 24 9 24.449219 9 25 C 9 25.550781 9.449219 26 10 26 C 10.550781 26 11 25.550781 11 25 C 11 24.449219 10.550781 24 10 24 Z M 22 24 C 21.449219 24 21 24.449219 21 25 C 21 25.550781 21.449219 26 22 26 C 22.550781 26 23 25.550781 23 25 C 23 24.449219 22.550781 24 22 24 Z M 26 24 C 25.449219 24 25 24.449219 25 25 C 25 25.550781 25.449219 26 26 26 C 26.550781 26 27 25.550781 27 25 C 27 24.449219 26.550781 24 26 24 Z M 8 27 C 7.449219 27 7 27.449219 7 28 C 7 28.550781 7.449219 29 8 29 C 8.550781 29 9 28.550781 9 28 C 9 27.449219 8.550781 27 8 27 Z M 12 27 C 11.449219 27 11 27.449219 11 28 C 11 28.550781 11.449219 29 12 29 C 12.550781 29 13 28.550781 13 28 C 13 27.449219 12.550781 27 12 27 Z M 16 27 C 15.449219 27 15 27.449219 15 28 C 15 28.550781 15.449219 29 16 29 C 16.550781 29 17 28.550781 17 28 C 17 27.449219 16.550781 27 16 27 Z M 20 27 C 19.449219 27 19 27.449219 19 28 C 19 28.550781 19.449219 29 20 29 C 20.550781 29 21 28.550781 21 28 C 21 27.449219 20.550781 27 20 27 Z M 24 27 C 23.449219 27 23 27.449219 23 28 C 23 28.550781 23.449219 29 24 29 C 24.550781 29 25 28.550781 25 28 C 25 27.449219 24.550781 27 24 27 Z">
                                </path>
                            </svg>
                        </div>
                        <h2>welcome to caferia Resturant</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error obcaecati quasi quaerat, odit
                            officiis maiores, cumque vitae reprehenderit neque aliquam sequi temporibus veritatis, hic nesciunt
                            aut! Non nesciunt fugit debitis ducimus a fuga hic impedit?</p>
                    </div>
                </section>
                <section className="discover">
                    <div className="discover-section container">
                        <div className="discover-top">
                            <div className="discover-section-left">
                                <img src="/assets/images/section2.png" alt="" />
                            </div>
                            <div className="discover-section-right">
                                <h2>discover our menu $ taste flavours</h2>
                                <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente excepturi at porro
                                    asperiores repudiandae, architecto temporibus laboriosam vel repellat a.</p>
                                <button className="btn-brown pointer">
                                    Discover the menu
                                </button>
                            </div>
                        </div>
                        <div className="discover-bottom">
                            <div className="discover-bottom-con">
                                <div className="discover-bottom-icon">
                                    <svg stroke="currentcolour" fill="currentColor" stroke-width="0" viewBox="0 0 24 24"
                                        height="50px" width="50px" xmnls="http://www.w3.org/2000/svg">
                                        <path d="M3 2h2v20H3zm7 4h7v2h-7zmo 4h7v2h-7z"></path>
                                        <path d="M19 2H6v20h13c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm0 18H8V4h11v16z"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="discover-bottom-details">
                                <h3>100+</h3>
                                <p>types of dishies</p>
                            </div>
                            <div className="discover-bottom-con">
                                <div className="discover-bottom-icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><g id="Medal"><g>
                                        <path d="M20.692,3.755a1.519,1.519,0,0,0-1.27-.69h-4.41a1.487,1.487,0,0,0-1.36.87L12,7.485l-1.66-3.55a1.487,1.487,0,0,0-1.36-.87H4.572a1.5,1.5,0,0,0-1.35,2.14l3.73,8.02a5.638,5.638,0,0,0-.46,2.21,5.5,5.5,0,0,0,11,0,5.419,5.419,0,0,0-.46-2.2l3.75-8.03A1.525,1.525,0,0,0,20.692,3.755ZM4.122,4.785a.527.527,0,0,1,.03-.49.494.494,0,0,1,.42-.23h4.41a.507.507,0,0,1,.46.29l2.61,5.58h-.06a5.505,5.505,0,0,0-4.43,2.25Zm7.87,15.15a4.5,4.5,0,1,1,4.5-4.5A4.5,4.5,0,0,1,11.992,19.935Zm7.89-15.15-3.46,7.4a5.454,5.454,0,0,0-3.21-2.11l-.66-1.42,2-4.3a.507.507,0,0,1,.46-.29h4.41a.482.482,0,0,1,.42.23A.505.505,0,0,1,19.882,4.785Z"></path><path d="M12.077,16.88l1.024.538a.174.174,0,0,0,.253-.184l-.2-1.14a.174.174,0,0,1,.051-.154l.828-.807a.175.175,0,0,0-.1-.3L12.8,14.669a.177.177,0,0,1-.132-.1l-.512-1.037a.174.174,0,0,0-.313,0l-.512,1.037a.174.174,0,0,1-.131.1l-1.145.166a.175.175,0,0,0-.1.3l.828.807a.174.174,0,0,1,.05.154l-.2,1.14a.174.174,0,0,0,.253.184l1.024-.538A.172.172,0,0,1,12.077,16.88Z"></path></g></g>
                                    </svg>
                                </div>
                            </div>
                            <div className="discover-bottom-details">
                                <h3>25+</h3>
                                <p>years of experience</p>
                            </div>
                            <div className="discover-bottom-con">
                                <div className="discover-bottom-icon">
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"></path><path d="M2 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5m3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5"></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="discover-bottom-details">
                                <h3>10k+</h3>
                                <p>happy customers</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="popular">
                    <div className="popular-section container">
                        <h2>Popular Menu</h2>
                        <div className="popular-menu">
                            <ul className="popular-menu-list">
                                <li className="popular-menu-item menu-item-active">starters</li>
                                <li className="popular-menu-item">Non-vegie</li>
                                <li className="popular-menu-item">Vegetables</li>
                                <li className="popular-menu-item">Dessert</li>
                                <li className="popular-menu-item">Drinks</li>
                            </ul>
                        </div>
                        <div className="popular-menu-con">
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/z1.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>jellof $ chicken</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <h3>$100</h3>
                                </div>
                            </div>
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/w1.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>Egusi $ fufu</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <h3>$95</h3>
                                </div>
                            </div>
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/w5.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>AKPU $ egusi</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <h3>$112</h3>
                                </div>
                            </div>
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/w4.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>semolina $ Draw soup</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <h3>$150</h3>
                                </div>
                            </div>
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/z2.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>Vegetable $ wheat</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <h3>$95</h3>
                                </div>
                            </div>
                            <div className="popular-item">
                                <div className="popular-item-left">
                                    <img src="/assets/images/w7.jpeg" alt="" />
                                </div>
                                <div className="popular-item-right">
                                    <h3>jellof Rice $ fish</h3>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <h3>$150</h3>
                                </div>
                            </div>
                        </div>
                        <button className="btn-brown">
                            check our dishies
                        </button>
                    </div>
                </section>
                <section className="popular-dishies">
                    <div className="popular-dishies-section container">
                        <h2>Popular Dishies</h2>
                        <div className="popular-dishies-con">
                            <div className="popular-dishies-item">
                                <div className="popular-dishies-item-top">
                                    <img src="/assets/images/z2.jpeg" alt="" />
                                </div>
                                <div className="popular-dishies-item-details">
                                    <h3>Akpu $ vegetable</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="popular-dishies-item">
                                <div className="popular-dishies-item-top">
                                    <img src="/assets/images/beans.jpg" alt="" />
                                </div>
                                <div className="popular-dishies-item-details">
                                    <h3>pouradge beans</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                            <div className="popular-dishies-item">
                                <div className="popular-dishies-item-top">
                                    <img src="/assets/images/w4.jpeg" alt="" />
                                </div>
                                <div className="popular-dishies-item-details">
                                    <h3>Yam poundo $ Drawsoup</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn-brown">
                            our dishies
                        </button>
                    </div>
                </section>
                <section className="about">
                    <div className="about-section container">
                        <h2>people say about us</h2>
                        <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nam debitis quis ex perferendis
                            rerum iure illum nostrum, tempore, a quos aliquid error excepturi est.</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt similique quos voluptatem
                            molestias, ullam necessitatibus tempore harum numquam facilis nostrum odio, nulla repudiandae ipsam
                            deserunt iusto ea provident repellendus eligendi itaque alias corporis iste repellat? Obcaecati
                            commodi architecto assumenda pariatur excepturi omnis esse, ratione ullam a quia nisi, quod hic!</p>
                        <div className="about-bottom">
                            <p>courage lawren</p>
                            <div className="about-bottom img">
                                <img src="/assets/images/polo.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="recent-articles">
                    <div className="recent-articles-container">
                        <h2>Recent Articles</h2>
                        <div className="recent-articles-con">
                            <div className="recent-articles-item">
                                <div className="recent-articles-item-top">
                                    <img src="/assets/images/w5.jpeg" alt="" />
                                </div>
                                <div className="recent-articles-details">
                                    <h3>eba $ egusi</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>$ 135</p>
                                </div>
                            </div>
                            <div className="recent-articles-item">
                                <div className="recent-articles-item-top">
                                    <img src="/assets/images/w1.jpeg" alt="" />
                                </div>
                                <div className="recent-articles-details">
                                    <h3>fufu $ Oha soup</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>$ 112</p>
                                </div>
                            </div>
                            <div className="recent-articles-item-item">
                                <div className="recent-articles-item-top">
                                    <img src="/assets/images/w4.jpeg" alt="" />
                                </div>
                                <div className="recent-articles-details">
                                    <h3>Yam poundo $ okro soup</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                                    <p>$100</p>
                                </div>
                            </div>
                        </div>
                        <button className="btn-brown">
                            our recent dishies
                        </button>
                    </div>
                </section>
                <section className="enquiary">
                    <div className="enquiary-section container">
                        <div className="enquiary-list">
                            <h2>Address</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                        <div className="enquiary-list">
                            <h2>contact</h2>
                            <p>+234 9069992255</p>
                        </div>
                        <div className="enquiary-list">
                            <h2>location</h2>
                            <p>Lorem ipsum dolor sit amet consectetur.</p>
                        </div>
                    </div>
                </section>
            </main>
            <footer>
                <div className="footer-nav">
                    <h2>cafeteria</h2>
                    <ul className="footer-menu-list">
                        <li className="footer-menu-list pointer">home</li>
                        <li className="footer-menu-list pointer">about</li>
                        <li className="footer-menu-list pointer">reservation</li>
                        <li className="footer-menu-list pointer">contact</li>
                    </ul>
                    <ul className="footer-icon">
                        <li className='footer-section-icon'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
                            </svg>
                        </li>
                        <li className='footer-section-icon'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M224 122.8c-72.7 0-131.8 59.1-131.9 131.8 0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6 49.9-13.1 4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8 0-35.2-15.2-68.3-40.1-93.2-25-25-58-38.7-93.2-38.7zm77.5 188.4c-3.3 9.3-19.1 17.7-26.7 18.8-12.6 1.9-22.4.9-47.5-9.9-39.7-17.2-65.7-57.2-67.7-59.8-2-2.6-16.2-21.5-16.2-41s10.2-29.1 13.9-33.1c3.6-4 7.9-5 10.6-5 2.6 0 5.3 0 7.6.1 2.4.1 5.7-.9 8.9 6.8 3.3 7.9 11.2 27.4 12.2 29.4s1.7 4.3.3 6.9c-7.6 15.2-15.7 14.6-11.6 21.6 15.3 26.3 30.6 35.4 53.9 47.1 4 2 6.3 1.7 8.6-1 2.3-2.6 9.9-11.6 12.5-15.5 2.6-4 5.3-3.3 8.9-2 3.6 1.3 23.1 10.9 27.1 12.9s6.6 3 7.6 4.6c.9 1.9.9 9.9-2.4 19.1zM400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM223.9 413.2c-26.6 0-52.7-6.7-75.8-19.3L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5 29.9 30 47.9 69.8 47.9 112.2 0 87.4-72.7 158.5-160.1 158.5z"></path>
                            </svg>
                        </li>
                        <li className='footer-section-icon'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="50px" width="50px" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                            </svg>
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    )
}

export default page