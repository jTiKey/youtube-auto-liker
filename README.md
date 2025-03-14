# YouTube Auto-Like Extension

## Overview
This extension automatically likes while watching YouTube videos if subscribed with the notification bell on. It interacts with the YouTube page to detect the like button and performs the like action on behalf of the user.

## Features
- Automatically likes YouTube videos if the user is subscribed and has notifications on.
- Changes the color of the like button to gold after liking the video when it triggered.

## Permissions
- **`activeTab`**: Required to interact with the currently active tab in the browser.
- **`host_permissions`**: Necessary to access and modify content on YouTube pages.
- **`scripting`**: Required to inject and execute custom scripts on YouTube pages.
- **`webNavigation`**: Necessary to monitor and respond to changes in the user's navigation on YouTube.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/jTiKey/youtube-auto-liker.git
   ```
2. Navigate to the project directory:
   ```bash
   cd youtube-auto-liker
   ```
3. Load the extension in your browser:
   - Open the Extensions page in your browser.
   - Enable "Developer mode".
   - Click "Load unpacked" and select the project directory.

## Usage
1. Open YouTube and navigate to a video.
2. If you are subscribed to the channel and have the notification bell turned on, the extension will automatically like the video and change the like button color to gold.

## Development
### File Structure
- `main.js`: Initializes the observer to detect changes on the YouTube page.
- `scripts/likeVideo.js`: Contains the function to like the video.
- `scripts/changeLikeColor.js`: Contains the function to change the color of the like button.

### Running the Extension
1. Make changes to the code as needed.
2. Reload the extension in your browser to apply the changes.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.