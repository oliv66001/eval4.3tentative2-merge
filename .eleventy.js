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

  const Image = require("@11ty/eleventy-img");

  (async () => {
    let url = "./src/images/mariage1900.jpg";
    let stats = await Image(url, {
      widths: ['auto']
    });
  
    console.log( stats );
  })();

  