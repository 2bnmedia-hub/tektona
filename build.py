#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import sys

with open('app.compiled.js', 'r', encoding='utf-8') as f:
    compiled_js = f.read()

html = '''<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tektona — ניהול משרד אדריכלים</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body { height: 100%; }
    body {
      font-family: "Space Grotesk", "Heebo", "Arial", sans-serif;
      direction: rtl;
      overflow: hidden;
      background: #080808;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #root { width: 100vw; height: 100vh; }

    /* Scrollbar */
    ::-webkit-scrollbar { width: 4px; height: 4px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.12); border-radius: 2px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.25); }

    /* Keyframes */
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(16px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeInFast {
      from { opacity: 0; }
      to   { opacity: 1; }
    }
    @keyframes pageEnter {
      from { opacity: 0; transform: translateY(24px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideInRight {
      from { opacity: 0; transform: translateX(-32px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes lineGrow {
      from { transform: scaleX(0); }
      to   { transform: scaleX(1); }
    }
    @keyframes archFloat {
      0%,100% { transform: translateY(0) rotate(0deg); }
      50%      { transform: translateY(-20px) rotate(2deg); }
    }
    @keyframes drawLine { from{stroke-dashoffset:1000} to{stroke-dashoffset:0} }
    @keyframes circleGrow { from{stroke-dashoffset:283} }

    /* Calq-style heading underline */
    .calq-heading::after {
      content: '';
      display: block;
      width: 40px;
      height: 2px;
      background: currentColor;
      margin-top: 10px;
      transform-origin: right;
      animation: lineGrow .5s ease forwards;
    }

    /* Top nav link hover */
    .topnav-link {
      position: relative;
      text-decoration: none;
      letter-spacing: 0.05em;
      transition: opacity 0.2s;
    }
    .topnav-link:hover { opacity: 0.6; }
    .topnav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      right: 0; left: 0;
      height: 1px;
      background: currentColor;
    }

    /* Tab hover */
    .tab-btn { transition: color 0.15s, border-color 0.15s; }
    .tab-btn:hover { opacity: 0.75; }

    /* Project card hover */
    .proj-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
    .proj-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 40px rgba(0,0,0,0.5) !important;
    }

    /* Btn transitions */
    button { transition: opacity 0.15s, background 0.15s, transform 0.1s; }
    button:active { transform: scale(0.97); }

    /* Selection */
    ::selection { background: rgba(255,255,255,0.2); color: #fff; }
  </style>
</head>
<body>
  <div id="root"></div>
  <script>
''' + compiled_js + '''
  </script>
</body>
</html>'''

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print('✅ index.html built successfully!')
