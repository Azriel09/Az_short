# Process:
## Submission
- User submits a link
- Validator checks if its a legitimate link format
- If successful, the backend checks if the link has already been shortened before via MySQL query
- If already exists, it will return the shortened link instead
- If the link doesn't exist yet, it will generate a random 4-character string as a code and insert it into the MySQL table together with the link submitted by the user
- If sucessful, backend will send a response that has the shortened link
- The shortened link will show up in the site

## Using the Shortened Link
- Backend will check the params id of the shortened link
- If it does not exist, backend will redirect the user to the error page
- If sucessful, it will redirect the user to the destined link
