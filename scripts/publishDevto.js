/**
 * Publish to Dev.to
 *
 * This script publishes articles to dev.to
 */

const fetch = require('node-fetch');
const matter = require('gray-matter');
const fs = require('fs');

/**
 * @type {Array<{ name: string, slug: string, section: string}>}
 */
const articles = [];

function getBanner(section, slug) {
  return `https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses/go/${section}/${slug}/banner.png`;
}

function getBody(slug) {
  const path = `data/courses/go/${slug}.mdx`;
  const content = fs.readFileSync(path);
  const frontmatter = matter(content.toString());

  return frontmatter.content.replace(
    /\]\(\/static\/courses/g,
    '](https://raw.githubusercontent.com/karanpratapsingh/portfolio/master/public/static/courses',
  );
}

function sleep(time) {
  return new Promise(resolve => setTimeout(resolve, time * 1000));
}

function getEnv(key) {
  const env = process.env[key];

  if (!env) {
    console.log(`[error]: ${key} env variable is required.`);
    process.exit(1);
  }

  return env;
}

function createDraft(apiKey, body) {
  return fetch('https://dev.to/api/articles', {
    method: 'POST',
    headers: {
      'api-key': apiKey,
      'content-type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(res => res.json());
}

(async function main() {
  const API_KEY = getEnv('DEVTO_API_KEY');

  for (const [, { name, section, slug }] of articles.entries()) {
    const title = `Go Course: ${name}`;
    const main_image = getBanner(section, slug);
    const tags = ['go', 'tutorial', 'beginners'];
    const canonical_url = 'https://github.com/karanpratapsingh/go-course';
    const series = 'Go Course';
    const body_markdown = getBody(slug);

    const body = {
      article: {
        title,
        main_image,
        tags,
        canonical_url,
        series,
        body_markdown,
      },
    };

    try {
      await createDraft(API_KEY, body);
      console.log(`Created article for: ${name}`);
      await sleep(10);
    } catch (error) {
      console.log(error);
      console.log(`Encountered error for article: ${name}`);
      process.exit(1);
    }
  }
})();
