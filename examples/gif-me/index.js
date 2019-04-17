#! /usr/bin/env node

const fetch = require("isomorphic-unfetch");
const prettyMs = require("pretty-ms");
const { copy } = require("copy-paste");
const { green, bgYellow, black } = require("chalk");

const MY_SUPER_SECRET_API_KEY = "JPD6ckEmDDrWwc43S04daTOxhoE0XWKK";
const URL = "https://api.giphy.com";

function search(term) {
  return fetch(
    `${URL}/v1/gifs/search?api_key=${MY_SUPER_SECRET_API_KEY}&q=${encodeURIComponent(
      term.trim().toLowerCase()
    )}&limit=1`
  ).then(r => r.json());
}

const term = process.argv.pop();

console.clear();
console.log(`Searching for "${green(term)}" Gifs on https://giphy.com`);

const start = Date.now();

search(term).then(({ data }) => {
  const [{ url }] = data;
  const duration = Date.now() - start;

  copy(
    url,
    err =>
      !err &&
      console.log(
        `${black(
          bgYellow(
            `gif-me@${
              require("./package.json").version
            } - url copied to clipboard`
          )
        )}`
      )
  );

  console.clear();
  console.log(`Enjoy your gif! 🔥 (took ${prettyMs(duration)})

  ${green(url)}
  `);
});
