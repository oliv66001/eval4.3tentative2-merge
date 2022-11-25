const Image = require("@11ty/eleventy-img");

module.exports.data = async function() {
  return {
    permalink: "styles/style.css"
  };
};

module.exports.render = async function () {
  let stats = await Image("mariage1900.jpg", {
    formats: ["jpeg"],
    widths: [600],
  });

  return `#hero-div {
    background-image: url(${stats.jpeg[0].url});
  }`;
};