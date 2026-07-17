@echo off
chcp 65001 >nul
title J.Batista Guincho - Servidor Local
echo ============================================
echo  Iniciando servidor local do site...
echo  Pasta: %~dp0
echo ============================================
echo.
where python >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8080/
    python -m http.server 8080
    goto :fim
)
where py >nul 2>nul
if %errorlevel%==0 (
    start "" http://localhost:8080/
    py -m http.server 8080
    goto :fim
)
echo Python nao foi encontrado neste computador.
echo.
echo Opcao 1: instale o Python em https://www.python.org/downloads/
echo          (marque "Add Python to PATH" durante a instalacao)
echo          e rode este arquivo (iniciar-servidor.bat) de novo.
echo.
echo Opcao 2: use a extensao "Live Server" no VS Code:
echo          1. Abra a pasta site_fe no VS Code
echo          2. Clique com o botao direito em index.html
echo          3. Escolha "Open with Live Server"
echo.
pause
:fim
