# NSFW Image Detection

This project uses the `nsfwjs` library with Node.js to detect NSFW (Not Safe For Work) content in images. The script loads an image, classifies it using a pre-trained model, and outputs the likelihood of the image containing explicit content.

## Features

- Detects NSFW content in images using the NSFWJS model.
- Supports image formats like JPEG, PNG, etc.
- Simple and fast setup with Node.js.

## Prerequisites

- Node.js installed on your system.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/nsfw-detection.git
    cd nsfw-detection
    ```

2. Install the required packages:

    ```bash
    npm install nsfwjs canvas
    ```

## Usage

1. **Add your image:** Place the image you want to test in the project directory.

2. **Update the script:** Replace the `image.jpg` in the `index.js` script with the path to your image.

3. **Run the script:**

    ```bash
    node index.js
    ```

4. **Check the output:** The script will print the NSFW classification results to the console, including the probability of the image being NSFW.

### Example Output

```bash
Predictions:
Drawing: 0.7567
Hentai: 0.2331
Neutral: 0.0043
Porn: 0.0032
Sexy: 0.0027
The image is likely SFW.
