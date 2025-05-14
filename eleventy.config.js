import pluginNavigation from "@11ty/eleventy-navigation";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

import pluginFilters from "./_config/filters.js";

/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */
export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({
    "./public": "/",
  });

  eleventyConfig.addBundle("css", {
    toFileDirectory: "dist/",
  });

  eleventyConfig.addShortcode("year", () => {
    return new Date().getFullYear();
  });

  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(pluginNavigation);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
		formats: ["avif", "webp", "auto"],
		failOnError: false,
		htmlOptions: {
			imgAttributes: {
				loading: "lazy",
				decoding: "async",
			}
		},

		sharpOptions: {
			animated: true,
		},
	});
  eleventyConfig.addPlugin(pluginFilters);
}

export const config = {
  templateFormats: ["md", "njk", "html", "liquid", "11ty.js"],

  dir: {
    input: "content",
    includes: "../_includes",
    data: "../_data",
    output: "_site",
  },
};
