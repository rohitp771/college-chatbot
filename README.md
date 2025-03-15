**To run the project on local**

1. Install MongoDB from below Link

https://www.mongodb.com/try/download/community

Version  - Current
Platform - windows X64
package  - MSI

Install setup after download

--------------------------------------------------------------------
2. Install node

https://nodejs.org/en/download
**Click on Windows Installer (.msi)**

Install setup after download

--------------------------------------------------------------------

3. Create connection and collection in mongoDB compass which is installed through first step

**Add new connection as "collegeDB"
Add new Collection as "collegeDB"**

4. Open Project Folder in VSCode and open terminal in it.

(Note : before running below command make sure mongoDB is running - check Task manager - services tab - serach for MongoDB - Status should be running)

Go inside backend folder in terminal.
Run below two commands after one another 
(first command to install dependency. 
second for starting node backend server)

npm install
node app.js


you can check app running on 
http://localhost:5000




