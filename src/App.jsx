// import React from "react";

// const Button = (props) => {
//   const { children = "default", variant = "bg-black" } = props;
//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md ${variant} text-white`}
//       type="submit"
//     >
//       {children}
//     </button>
//   );
// };

// function App() {
//   return (
//     <div className="flex justify-center bg-yellow-600 min-h-screen items-center">
//       <div className="flex gap-3">
//         <Button variant="bg-yellow-700">Login</Button>
//         <Button variant="bg-orange-700">Iyasya</Button>
//         <Button>Utama</Button>
//         <Button></Button>
//       </div>
//     </div>
//   );
// }
// export default App;
import React from "react";

const Button = (props) => {
  const { children = "default", variant = "bg-black" } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md ${variant} text-white transition transform hover:scale-105 hover:shadow-lg`}
      type="submit"
    >
      {children}
    </button>
  );
};

function App() {
  return (
    <div className="flex justify-center bg-yellow-600 min-h-screen items-center">
      <div className="flex gap-3">
        <Button variant="bg-yellow-700">Login</Button>
        <Button variant="bg-orange-700">Iyasya</Button>
        <Button>Utama</Button>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;