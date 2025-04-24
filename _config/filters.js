import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addFilter("readableDate", (dateObj, format, zone) => {
    // Formatting tokens for Luxon: https://moment.github.io/luxon/#/formatting?id=table-of-tokens
    return DateTime.fromJSDate(dateObj, { zone: zone || "utc" }).toFormat(
      format || "yyyy-LL-dd"
    );
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addFilter("getKeys", (target) => {
    return Object.keys(target);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter((tag) => ["all", "post"].indexOf(tag) === -1);
  });

  eleventyConfig.addFilter("sortAlphabetically", (strings) =>
    (strings || []).sort((b, a) => b.localeCompare(a))
  );
}
