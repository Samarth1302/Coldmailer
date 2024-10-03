# Coldmailer
Send Cold mails automatically through BullMQ, Redis, and JS.

# Pre-requisites:-
- Google App Password
- Local Redis server
- Windows sub-system for Linux (WSL)

# Excel file format
- Based on the columns of excel file name, email, company in service/excelService.js can be changed. Default format is skipping the first row (slice(1)...) and reading column B (row[1]) for name, column C (row[2]) for email and column E (row[4]) for company.  

# Steps
1. Run **npm init**
2. Run **npm i** in the terminal
3. Change the content, subject, filename in service/emailService.js
4. Keep the excel file and resume in the root folder
5. Give excel filename as the excel path in util/scheduler.js
6. Create .env with **EMAIL_USER, EMAIL_PASS, REDIS_HOST=localhost, REDIS_PORT=6379**
7. Give the resume fielname as resumePath in index.js
8. Start Redis server locally in CMD/terminal -> **sudo service redis-server start** and -> **redis-server**
9. In new terminal on VS code run **node util/scheduler.js**
10. Another new terminal VS code run **node index.js**
11. Wait for the results (there will be some email delivery failures due to security/non-existing emails).
