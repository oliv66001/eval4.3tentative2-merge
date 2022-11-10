/*require("dotenv").config();
const fs = require("fs");
const { Directus } = require("@directus/sdk");

const getDirectusClient = async () => {
  const directus = new Directus(process.env.DIRECTUS_URL);

  if (directus.auth.token) return directus;

  if (process.env.DIRECTUS_EMAIL && process.env.DIRECTUS_PASSWORD) {
    await directus.auth.login({
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
    });
  } else if (process.env.DIRECTUS_STATIC_TOKEN) {
    await directus.auth.static(process.env.DIRECTUS_STATIC_TOKEN);
  }

  return directus;
};*/


module.exports = function (eleventyConfig) {
// blogposts collection
 
 eleventyConfig.addCollection("blogposts", function (collection) {
    return collection.getFilteredByGlob("./src/blog/*.md");
  });

    // copy files
    eleventyConfig.addPassthroughCopy("./src/blog/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/styles/");
    eleventyConfig.addPassthroughCopy("./src/_includes/");
    // override default config
    return {
      dir: {
        input: "src",
        output: "_site",
        data: "_data"
      }
    };
  };


/*
module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src");
  eleventyConfig.addPassthroughCopy({
    "node_modules/modern-normalize/modern-normalize.css":
      "css/modern-normalize.css",
  });
  eleventyConfig.addPassthroughCopy({
    "src/stylesheet/style.css": "styles/style.css",
  });

  eleventyConfig.setLiquidOptions({
    extname: ".njk",
    dynamicPartials: true,
    strictFilters: true,
  });

  eleventyConfig.addGlobalData("directus", getDirectusClient);

  eleventyConfig.addShortcode("getAssetURL", (id) => {
    if (!id) return null;
    return `${process.env.DIRECTUS_URL}/assets/${id}`;
  });

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html");
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          res.write(content_404);
          res.end();
        });
      },
    },
  });

  return { dir: { 
    input: "src",
    output: "_site"
} };
};*/