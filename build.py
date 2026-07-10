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
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <script crossorigin src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: "Heebo", "Arial", sans-serif; direction: rtl; overflow: hidden; }
    #root { width: 100vw; height: 100vh; }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: transparent; }
    ::-webkit-scrollbar-thumb { background: rgba(128,128,128,0.4); border-radius: 3px; }
    ::-webkit-scrollbar-thumb:hover { background: rgba(128,128,128,0.7); }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
    @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
    @keyframes slideIn { from{transform:translateX(100%)} to{transform:none} }
    @keyframes archFloat { 0%,100%{transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(2deg)} }
    @keyframes drawLine { from{stroke-dashoffset:1000} to{stroke-dashoffset:0} }
    @keyframes circleGrow { from{stroke-dashoffset:283} }
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
