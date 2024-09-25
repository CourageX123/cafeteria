import React from 'react'

const page = () => {
    return (
        < React.Fragment>
            <main className="signup-main">
                <div className="form-con">
                    <section className="left-section">
                        <img src="/assets/images/e4.jpeg" alt="" />
                    </section>
                    <section className="right-section">
                        <div className="form-header">
                            <h1>sign up</h1>
                            <h2>Already have account <a href=""> Log in</a></h2>
                        </div>
                        <form className="form">
                            <div className="form-field">
                                <label for="name">name</label>
                                <input type="text" name="name" id="name" placeholder="name" />
                            </div>
                            <div className="form-field">
                                <label for="username">username</label>
                                <input type="text" name="username" id="username" placeholder="username" />
                            </div>
                            <div className="form-field">
                                <label for="email">email</label>
                                <input type="email" name="email" id="email" placeholder="enter your email" />
                            </div>
                            <div className="form-field">
                                <label for="password">password</label>
                                <div className="password-div">
                                    <input type="password" name="password" id="password" placeholder="enter your password" />
                                    <div className="password-svg-con pointer" onclick="visibility()">
                                        <svg id="show" className="visible" stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                                            </path>
                                        </svg>
                                        <svg id="hide" className="hidden" stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <clipPath>
                                                    <path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path>
                                                </clipPath>
                                            </defs>
                                            <path
                                                d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z">
                                            </path>
                                            <path
                                                d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="form-field">
                                <label for="confirm-password"> confirm-password</label>
                                <div className="password-div">
                                    <input type="password" name="password" id="confirm-password"
                                        placeholder="confirm your password" />
                                    <div className="password-svg-con pointer" onclick="visible()">
                                        <svg id="display" className="visible" stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z">
                                            </path>
                                        </svg>
                                        <svg id="deny" className="hidden" stroke="currentColor" fill="currentColor" stroke-width="0"
                                            viewBox="0 0 1024 1024" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <clipPath>
                                                    <path fill="none" d="M124-288l388-672 388 672H124z" clip-rule="evenodd"></path>
                                                </clipPath>
                                            </defs>
                                            <path
                                                d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z">
                                            </path>
                                            <path
                                                d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="form-submit">
                                <input type="submit" value="create account" className="submit" />
                                <p>By clicking creat account, you acknowledge that you have read and accept the <a
                                    href="/mycompany.html">Terms of service</a> and <a href="/mycompany.html">Privacy policy</a>
                                </p>
                            </div>
                        </form>
                    </section>
                </div>
            </main>
        </React.Fragment>
    )
}

export default page