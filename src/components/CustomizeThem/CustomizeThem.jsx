import React, { useEffect, useState } from "react";
const CustomizeThem = () => {
  // State to store the current theme
  const [theme, setTheme] = useState("blue-theme");
  // Load theme from localStorage when the component mounts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "blue-theme";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-bs-theme", savedTheme); // Apply the saved theme to the HTML tag
  }, []);
  // Function to handle theme change
  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme); // Save the selected theme to localStorage
    document.documentElement.setAttribute("data-bs-theme", newTheme); // Apply the new theme to the HTML tag
  };
  return (
    <>
      {/* Customize button */}
      <button
        className="btn btn-grd btn-grd-primary position-fixed d-flex align-items-center gap-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        style={{
          bottom: "50px",
          right: "10px",
          transition: "all 0.5s ease-in-out",
        }}
      >
        <i className="material-icons-outlined">tune</i>Customize
      </button>
      
      {/* Offcanvas sidebar */}
      <div
        className="offcanvas offcanvas-end"
        data-bs-scroll="true"
        tabIndex="-1"
        id="staticBackdrop"
      >
        {/* Offcanvas header */}
        <div className="offcanvas-header border-bottom h-70">
          <div>
            <h5 className="mb-0">Theme Customizer</h5>
            <p className="mb-0">Customize your theme</p>
          </div>
          <button
            type="button"
            className="primaery-menu-close btn"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="material-icons-outlined">close</i>
          </button>
        </div>

        {/* Offcanvas body */}
        <div className="offcanvas-body">
          <div>
            <p>Theme variation</p>
            <div className="row g-3">
              {/* Blue Theme option */}
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="blue-theme"
                  checked={theme === "blue-theme"}
                  onChange={() => handleThemeChange("blue-theme")}
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="blue-theme"
                >
                  <span className="material-icons-outlined">contactless</span>
                  <span>Blue</span>
                </label>
              </div>

              {/* Light Theme option */}
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="light"
                  checked={theme === "light"}
                  onChange={() => handleThemeChange("light")}
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="light"
                >
                  <span className="material-icons-outlined">light_mode</span>
                  <span>Light</span>
                </label>
              </div>

              {/* Dark Theme option */}
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="dark"
                  checked={theme === "dark"}
                  onChange={() => handleThemeChange("dark")}
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="dark"
                >
                  <span className="material-icons-outlined">dark_mode</span>
                  <span>Dark</span>
                </label>
              </div>

              {/* Semi Dark Theme option */}
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="semi-dark"
                  checked={theme === "semi-dark"}
                  onChange={() => handleThemeChange("semi-dark")}
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="semi-dark"
                >
                  <span className="material-icons-outlined">contrast</span>
                  <span>Semi Dark</span>
                </label>
              </div>

              {/* Bordered Theme option */}
              <div className="col-12 col-xl-6">
                <input
                  type="radio"
                  className="btn-check"
                  name="theme-options"
                  id="bordered-theme"
                  checked={theme === "bordered-theme"}
                  onChange={() => handleThemeChange("bordered-theme")}
                />
                <label
                  className="btn btn-outline-secondary d-flex flex-column gap-1 align-items-center justify-content-center p-4"
                  htmlFor="bordered-theme"
                >
                  <span className="material-icons-outlined">border_style</span>
                  <span>Bordered</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CustomizeThem;
