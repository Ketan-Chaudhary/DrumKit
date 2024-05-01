
# JavaScript Drum Sound Project

This JavaScript project allows users to play different drum sounds by pressing specific keys on their keyboard. It utilizes various JavaScript concepts such as event listeners, data attributes, custom properties, transitionend, key events, and animations.

## Project Overview

In this project, we've created a simple drum kit interface where each key corresponds to a specific drum sound. When a user presses a key associated with a drum sound, the respective sound will be played. The project provides a fun and interactive way to create music using keyboard inputs.

## Technologies Used

- **HTML**: Provides the structure and layout of the drum kit interface.
- **CSS**: Styles the interface elements and provides animations.
- **JavaScript**: Implements the functionality of playing drum sounds and handling keyboard events.

## JavaScript Concepts Utilized

1. **Event Listeners**: Used to detect when a key is pressed and trigger the corresponding action.
2. **Data Attribute**: Used to associate each key element with the corresponding drum sound.
3. **Custom Property**: Utilized for storing and accessing the audio files' paths.
4. **Transitionend**: Event used to trigger actions after CSS transitions are completed, enhancing user feedback.
5. **Key Event**: Captures keyboard events to determine which key is pressed and play the associated drum sound.
6. **Animation**: Used to provide visual feedback when a drum key is pressed.

## Getting Started

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Ketan-Chaudhary/DrumKit.git
    ```

2. Open the `index.html` file in your web browser.

3. Press the keys associated with the drum sounds to play them.

## Directory Structure

```
.
├── index.html        # HTML file containing the drum kit interface
├── styles.css        # CSS file for styling the interface elements
├── script.js         # JavaScript file containing the functionality of the drum kit
└── sounds            # Directory containing drum sound audio files
    ├── kick.wav
    ├── snare.wav
    ├── hi-hat.wav
    └── (additional drum sound files)
```
