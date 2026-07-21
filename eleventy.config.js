module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "wp-content": "wp-content",
    "wp-includes": "wp-includes",
    CNAME: "CNAME",
    "src/robots.txt": "robots.txt",
  });

  eleventyConfig.addCollection("news", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/whats-new/*.md").sort((a, b) => b.date - a.date)
  );

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    if (!dateObj) return "";
    return new Intl.DateTimeFormat("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(dateObj);
  });

  eleventyConfig.addFilter("isoDate", (dateObj) => {
    if (!dateObj) return "";
    return dateObj.toISOString();
  });

  eleventyConfig.addFilter("limit", (arr, n) => (arr || []).slice(0, n));

  eleventyConfig.addFilter("thumb150", (imagePath) => {
    if (!imagePath) return "";
    return imagePath.replace(/(\.[^.]+)$/, "-150x150$1");
  });

  eleventyConfig.addFilter("thumb300", (imagePath) => {
    if (!imagePath) return "";
    return imagePath.replace(/(\.[^.]+)$/, "-300x300$1");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
