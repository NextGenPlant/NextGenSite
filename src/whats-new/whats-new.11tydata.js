module.exports = {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) => {
      if (data.permalink) return data.permalink;
      const slug = data.page?.fileSlug;
      return slug ? `/whats-new/${slug}/` : undefined;
    },
  },
};
