# Visit Group React Assignment

Uses DummyAPI for data.

Packages used:

- axios
- react-router-dom
- react-query
- styled-components

**The edit button for posts is only visible when the user is located on the `/:id` (details) page.**

Editing and creating posts is implemented, as is creating new comments.

The data is fetched with axios using react-query, models and everything related to fetching is stored in the `src/api` folder. If its needed the `app-id` used for the API can be changed inside the `src/api/dummyApi.ts` file.

This project uses react-router-dom, page components can be found in the `src/pages` folder.

The rest of the custom components are stored inside the `src/components` folder.

## Start the project with `npm start`
