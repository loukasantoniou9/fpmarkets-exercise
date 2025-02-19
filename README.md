# fpmarkets-exercise

## Getting Started

Follow these steps to set up and run the project.

### Clone the Repository

To clone the project using SSH, run the following command:

```sh
git clone https://github.com/loukasantoniou9/fpmarkets-exercise.git
```

### Navigate to the Project Directory

After cloning, move into the project directory:

```sh
cd fpmarkets-exercise
```

### Install Dependencies

Run the following command to install all dependencies from `package.json`:

```sh
npm install
```

### Install Gulp (if not already installed)

If you don't have Gulp installed globally on your computer, install it using:

```sh
npm install --global gulp-cli
```

### Run the Project

Start the project by running:

```sh
gulp
```

### Additional Notes

- It is recommended to wait approximately **5-6 minutes** for all photos to be placed into the `dist` folder, which will be created upon running the `gulp` command.
- **BrowserSync** was used during development to automatically reload the project when changes are saved.
- Tablet screens are also handled on the code, so it is responsive on all kind of devices. Since a **Figma** design wasn't provided for tablet screens, it was assumed that would be something between the mobile and the desktop version.

Thank you for your time!
