const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
// blogposts collection

let options = {
  html: true,
  breaks: true,
  linkify: true
};

eleventyConfig.setLibrary("md", markdownIt(options));

 
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



  
