import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo1 1.png";
import bgCity from "../assets/a87dd8f3ad506644b109e9981297a5e99c21cae2.jpg";
import carRed from "../assets/87666e71e5b01e92022004a6997be45b2752a057.png";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "#111",
        color: "#fff",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
      }}
    >
      {/* Navbar */}
      <header
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "18px 40px",
        }}
      >
        <Link to="/">
          <img src={logo} alt="Logo" style={{ height: "36px", objectFit: "contain" }} />
        </Link>
        <nav style={{ display: "flex", gap: "32px" }}>
          {[
            { label: "КАТАЛОГ АВТО", to: "/catalog" },
            { label: "TRADE-IN", to: "/trade-in" },
            { label: "ЭКСПРЕСС-КРЕДИТ", to: "/express-credit" },
            { label: "КОНТАКТЫ", to: "/" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              style={{
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.08em",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.target.style.color = "#e30613")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.85)")}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <div
        style={{
          position: "relative",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          overflow: "hidden",
        }}
      >
        {/* Background city image */}
        <img
          src={bgCity}
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            opacity: 0.35,
          }}
        />

        {/* Red gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(80,0,0,0.55) 0%, rgba(20,0,0,0.75) 60%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        {/* 404 text with car */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0px",
          }}
        >
          {/* Big 404 */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: "clamp(120px, 18vw, 220px)",
                fontWeight: 900,
                lineHeight: 0.9,
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "-0.02em",
                userSelect: "none",
                textShadow: "0 0 80px rgba(220,0,0,0.3)",
              }}
            >
              4
            </span>

            {/* Car image in place of the "0" */}
            <div
              style={{
                position: "relative",
                width: "clamp(140px, 20vw, 260px)",
                height: "clamp(120px, 15vw, 200px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 -8px",
              }}
            >
              <img
                src={carRed}
                alt="404 car"
                style={{
                  width: "120%",
                  objectFit: "contain",
                  filter: "drop-shadow(0 10px 30px rgba(227,6,19,0.4))",
                  transform: "translateY(8px)",
                  animation: "float404 3s ease-in-out infinite",
                }}
              />
            </div>

            <span
              style={{
                fontSize: "clamp(120px, 18vw, 220px)",
                fontWeight: 900,
                lineHeight: 0.9,
                color: "rgba(255,255,255,0.95)",
                letterSpacing: "-0.02em",
                userSelect: "none",
                textShadow: "0 0 80px rgba(220,0,0,0.3)",
              }}
            >
              4
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(18px, 3vw, 28px)",
              fontWeight: 700,
              color: "#fff",
              margin: "20px 0 16px",
              textAlign: "center",
              letterSpacing: "0.02em",
            }}
          >
            Страница не найдена!
          </h1>

          {/* Description */}
          <p
            style={{
              maxWidth: "480px",
              textAlign: "center",
              fontSize: "13px",
              lineHeight: 1.7,
              color: "rgba(255,255,255,0.55)",
              margin: "0 24px 32px",
              padding: "0 16px",
            }}
          >
            «Мы запустили новый сайт, чтобы его удобство и информативность.
            <br />
            Возможно, запрашиваемая Вами страница была перенесена или удалена.
            <br />
            Вы можете вернуться на неё и получить квалифицированную помощь наших специалистов»
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            style={{
              display: "inline-block",
              background: "#e30613",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 40px",
              borderRadius: "4px",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.1em",
              transition: "background 0.2s, transform 0.15s, box-shadow 0.2s",
              boxShadow: "0 4px 24px rgba(227,6,19,0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#c00010";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(227,6,19,0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#e30613";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(227,6,19,0.4)";
            }}
          >
            НА ГЛАВНУЮ
          </Link>
        </div>
      </div>

      {/* Float animation */}
      <style>{`
        @keyframes float404 {
          0%, 100% { transform: translateY(8px); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
}
