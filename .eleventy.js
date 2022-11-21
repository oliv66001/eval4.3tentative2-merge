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
  
  eleventyConfig.addCollection("randomizedPosts", function (collection) {
    return (
      collection
        // Change to the name of your tag
        .getFilteredByTag("post")
        .sort(() => {
          return 0.5 - Math.random();
        })
        // Optional limit, remove if unwanted
        .slice(0, 3)
    );
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



  
