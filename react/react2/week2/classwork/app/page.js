"use client";

import TodoList from "./components/todolist";

export default function Page() {
  return (
    <main>
      <TodoList />
    </main>
  );
}

// import {
//   ThemeContext,
//   ThemeProvider,
//   Context,
// } from "./components/themecontext";
// import App from "./components/localization";
// export default function Home() {
//   return (
//     <>
//       <ThemeProvider theme={theme}>
//         <ThemeContext />
//       </ThemeProvider>
//     </>
//   );
// }

// "use client";

// import { useLanguage } from "./components/localization";
// import Button from "@mui/material/Button";

// export default function Page() {
//   const { language, setLanguage } = useLanguage();

//   return (
//     <div>
//       <h1>Current language: {language}</h1>
//       <Button
//         variant="contained"
//         onClick={() =>
//           setLanguage((prev) =>
//             prev === "en" ? "fr" : prev === "fr" ? "zh" : "en"
//           )
//         }
//       >
//         Switch Language
//       </Button>
//     </div>
//   );
// }
