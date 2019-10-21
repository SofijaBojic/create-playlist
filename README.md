
## Run project

npm install
npm start

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `About project`

For this project I used:
* React
* Redux
* TypeScript
* styled-components
* responsive design
* Unit testing (still in progress, is not done)

- The project represents app for making a personal playlist using jwplayer. It has one page (Main component). 
- The store contains the playlist and index of active video (since there is no API, an index is used instead of id).
- reducer: actions for adding item in the playlist and setting index of the active video.
Layout: 
- Header component - shows title.
- Player component - plays the playlist from the store. When the new video starts -action "setActiveVideo" will be dispatched.  It'll set active video.
- Form component - adding items in the playlist. All fields in the form are required. After clicking on the submit button, action addVideo" will be dispatched. It will add a video to the playlist. All files in the form will be empty then.
- VideoList component - shows all items in the playlist. Active video is marked with a white border. If someone clicks on the item of the list, the video will become active and it will start in the player.

