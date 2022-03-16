import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
// import LogoRed from "../assets/Flagrant_logo_red.svg"
// import AniLink from "gatsby-plugin-transition-link/AniLink"

const Header = () => {
  return (
    <header className="p-4 flex flex-col lg:flex-row justify-between bg-pinktrans w-full items-center fixed z-10 shadow-sm lg:shadow-none">
      <Link to="/" aria-label="Flagrant logo - home" className="mb-3 lg:mb-0">
        LOGO
          {/* <LogoRed className="h-4 lg:h-8 fill-current text-red" /> */}
      </Link>
      <nav className="md:ml-6">
        <ul className="flex flex-row w-full items-center text-center lg:text-left justify-between m-0 uppercase">
          <li className="mb-0 font-mono uppercase mx-3 lg:mx-6 hover:bg-yellow hover:font-bold">
            {/* <AniLink paintDrip hex="#EA5C42" to="/about_us"> */}
            <Link to="/">
              About Us
            </Link>
            {/* </AniLink> */}
          </li>
          <li className="mb-0 font-mono uppercase mx-3 lg:mx-6 hover:bg-yellow hover:font-bold">
            {/* <AniLink paintDrip hex="#000000" to="/blog"> */}
            <Link to="/">
              Our Blog
            </Link>
            {/* </AniLink> */}
          </li>
          <li className="mb-0 font-mono uppercase mx-3 lg:mx-6 hover:bg-yellow hover:font-bold">
            {/* <AniLink paintDrip hex="#ffe708" to="/contact_us"> */}
            <Link to="/">
              Contact Us
            </Link>
            {/* </AniLink> */}
          </li>
        </ul>
      </nav>
    </header>
    
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header



// import React from "react";
// import { Link } from "gatsby";
// import github from "../img/github-icon.svg";
// import logo from "../img/logo.svg";

// const Navbar = class extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       active: false,
//       navBarActiveClass: "",
//     };
//   }

//   toggleHamburger() {
//     // toggle the active boolean in the state
//     this.setState(
//       {
//         active: !this.state.active,
//       },
//       // after state has been updated,
//       () => {
//         // set the class in state for the navbar accordingly
//         this.state.active
//           ? this.setState({
//               navBarActiveClass: "is-active",
//             })
//           : this.setState({
//               navBarActiveClass: "",
//             });
//       }
//     );
//   }

//   render() {
//     return (
//       <nav
//         className="navbar is-transparent"
//         role="navigation"
//         aria-label="main-navigation"
//       >
//         <div className="container">
//           <div className="navbar-brand bg-red-900">
//             <Link to="/" className="navbar-item" title="Logo">
//               <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
//             </Link>
//             {/* Hamburger menu */}
//             <div
//               className={`navbar-burger burger ${this.state.navBarActiveClass}`}
//               data-target="navMenu"
//               role="menuitem"
//               tabIndex={0}
//               onKeyPress={() => this.toggleHamburger()}
//               onClick={() => this.toggleHamburger()}
//             >
//               <span />
//               <span />
//               <span />
//             </div>
//           </div>
//           <div
//             id="navMenu"
//             className={`navbar-menu ${this.state.navBarActiveClass}`}
//           >
//             <div className="navbar-start has-text-centered">
//               <Link className="navbar-item font-bold text-2xl" to="/about">
//                 About
//               </Link>
//               <Link className="navbar-item" to="/products">
//                 Products
//               </Link>
//               <Link className="navbar-item" to="/blog">
//                 Blog
//               </Link>
//               <Link className="navbar-item" to="/contact">
//                 Contact
//               </Link>
//               <Link className="navbar-item" to="/contact/examples">
//                 Form Examples
//               </Link>
//             </div>
//             <div className="navbar-end has-text-centered">
//               <a
//                 className="navbar-item"
//                 href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <span className="icon">
//                   <img src={github} alt="Github" />
//                 </span>
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>
//     );
//   }
// };

// export default Navbar;
