#mySolar

- Backend application: Gets data from the PVOutput.org API, inserts it into a MySQL database
- Frontend application: Present Solar data from the MySQL database into the browser

Prerequisites:

- MySQL Schema: mysolar (created, but with no tables)
- User: mysolar - all priveleges on "mysolar" schema
- .env file in BACKEND folder with
  PVO_APIKEY=APIKEY
  PVO_SID=SITE
  MYSQL_USER=mysolar
  MYSQL_PASSWORD=PASSWORD
