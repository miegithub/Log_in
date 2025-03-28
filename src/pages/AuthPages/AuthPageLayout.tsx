import React, { useEffect, useState } from "react";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    // Monitor changes in the <html> class for real-time updates
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true });

    checkDarkMode(); // Initial check
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative p-6 bg-white dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}
        <div
          className={`items-center hidden w-full h-full lg:w-1/2 bg-cover bg-center lg:grid 
          ${isDarkMode ? "bg-[url('/images/darkimage.png')]" : "bg-[url('/images/lightimage.png')]"} `}
          style={{
            backgroundSize: "100% 100%",
          }}
        />
        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
