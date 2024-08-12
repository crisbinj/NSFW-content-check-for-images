const nsfw = require('nsfwjs');
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

async function detectNSFW(imagePath) {
  // Load image
  const img = await loadImage(imagePath);
  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  // Load the NSFWJS model
  const model = await nsfw.load();

  // Classify the image
  const predictions = await model.classify(canvas);

  // Display results
  console.log('Predictions:');
  predictions.forEach((p) => {
    console.log(`${p.className}: ${p.probability.toFixed(4)}`);
  });

  const isNSFW = predictions.some(p => p.className === 'Porn' && p.probability > 0.5);
  if (isNSFW) {
    console.log('The image is likely NSFW.');
  } else {
    console.log('The image is likely SFW.');
  }
}

// Replace 'path_to_your_image.jpg' with the path to your image
detectNSFW('./image.jpg');
