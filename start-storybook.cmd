@echo off
cd /d "%~dp0"
npx --yes storybook@8.3.0 dev -p 6006 --host 0.0.0.0
