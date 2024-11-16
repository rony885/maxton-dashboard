// import React from "react";

// const Overlay = () => {
//   return (
//     <>
//       <div class="overlay btn-toggle"></div>
//     </>
//   );
// };

// export default Overlay;

import React from "react";

const Overlay = ({ className = "", onClick }) => {
  return (
    <div className={`overlay btn-toggle ${className}`} onClick={onClick}></div>
  );
};

export default Overlay;
