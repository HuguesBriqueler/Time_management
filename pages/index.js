
export default function Home() {
  return (
    <>
      {/* <!-- START NAV --> */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="../">
              <h1>Content Manager</h1>
            </a>
            <span className="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" className="navbar-menu">
            <div className="navbar-end">
              <div className=" navbar-item">
                <div className="control has-icons-left">
                  <input className="input is-rounded" type="email" placeholder="Search"/>
                  <span className="icon is-left">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
              <a className="navbar-item is-active is-size-5 has-text-weight-semibold">
                Home
              </a>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Examples
              </a>
              <a className="navbar-item is-size-5 has-text-weight-semibold">
                Features
              </a>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- END NAV --> */}

      {/* <!-- Image --> */}
      <section className="hero ">
        <div className="hero-body">
          <div className="container">
            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">December 25, 2018</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns">
                <div className="column is-8 is-offset-2">
                  <div className="content is-medium">
                    <h2 className="subtitle is-4">December 25, 2018</h2>
                    <h1 className="title">Getting Started</h1>
                    <p>This is a starter template for creating a beautiful, customizable blog with minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

      {/* <!-- newsletter --> */}
      <section className="section">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="container has-text-centered is-fluid">
              <div className="hero is-light">
                <div className="hero-body">
                  <h2 className="title is-4">Sign up for our newsletter</h2>
                    <div className="column is-6 is-offset-3">
                      <div className="field has-addons has-addons-centered">
                        <div className="control is-expanded">
                          <input className="input " type="text" placeholder="Email address"/>
                        </div>
                        <div className="control">
                          <a className="button is-info">
                            Subscribe
                          </a>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Articles --> */}

      <section className="hero ">
        <div className="hero-body">
          <div className="container">

            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1 ">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 23, 2018</h2>
                    <h1 className="title has-text-black is-3">Custom 404 Pages</h1>
                    <p className="has-text-dark">This starter template includes a custom 404 Not Found error page, located at
                      /source/404.blade.php.
                      To preview the 404 page, you can visit /404 in your browser. Depending...</p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Fuse Search</h1>
                    <p className="has-text-dark">To provide fast, local search of your blog, this starter template comes with a
                      pre-built Vue.js
                      component that uses Fuse.js. Fuse.js is a "lightweight fuzzy-search library with no...</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="is-divider"></div>

            <section className="section">
              <div className="columns is-variable is-8">
                <div className="column is-5 is-offset-1">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Getting Started</h1>
                    <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
                <div className="column is-5">
                  <div className="content is-medium">
                    <h2 className="subtitle is-5 has-text-grey">December 25, 2018</h2>
                    <h1 className="title has-text-black is-3">Getting Started</h1>
                    <p className="has-text-dark">This is a starter template for creating a beautiful, customizable blog with
                      minimal
                      effort. You’ll only have to change a few settings and you’re ready to go. As with all Jigsaw sites,
                      configuration settings can be found in config</p>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="content has-text-centered">
          <p>
            <strong>Bulma - Blog theme</strong> by <a href="https://gonzalojs.com">Gonzalo Gutierrez</a>. Based on the <a
              href="http://jigsaw-blog-staging.tighten.co/">jigsaw-blog</a>. The source code is licensed
            <a href="http://opensource.org/licenses/mit-license.php">MIT</a>
          </p>
        </div>
      </footer>

    </>
  )
}
