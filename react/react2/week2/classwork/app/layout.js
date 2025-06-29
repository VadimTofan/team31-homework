import { TodoProvider } from "./components/todo";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TodoProvider>{children}</TodoProvider>
      </body>
    </html>
  );
}

// import { ThemeProvider } from "./components/themecontext";

// export const metadata = {
//   title: "Classwork React2 Week2",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <ThemeProvider>
//         {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
// import { AppThemeProvider } from "./components/localization";

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <AppThemeProvider>{children}</AppThemeProvider>
//       </body>
//     </html>
//   );
// }
