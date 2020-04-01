import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { AuthContext } from "../contexts/AuthContext";

const NavBar = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  return (
    <nav
      style={{
        background: theme.ui,
        color: theme.textColor
      }}
    >
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;

// export default class NavBar extends React.Component {
//   static contextType = ThemeContext;
//   render() {
//     return (
//       <AuthContext.Consumer>
//         {authContext => {
//           const { isAuthenticated, toggleAuth } = authContext;
//           return (
//             <ThemeContext.Consumer>
//               {themeContext => {
//                 const { isLightTheme, light, dark } = themeContext;
//                 const theme = isLightTheme ? light : dark;
//                 return (
//                   <nav style={{ background: theme.ui, color: theme.textColor }}>
//                     <h1>Context App</h1>
//                     <div onClick={toggleAuth}>
//                       {isAuthenticated ? "Logged In" : "Logged Out"}
//                     </div>
//                     <ul>
//                       <li>Home</li>
//                       <li>About</li>
//                       <li>Contact</li>
//                     </ul>
//                   </nav>
//                 );
//               }}
//             </ThemeContext.Consumer>
//           );
//         }}
//       </AuthContext.Consumer>
//     );
//   }
// }
