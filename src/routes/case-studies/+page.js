/** @type {import('./$types').PageLoad} */

export const prerender = true;

import caseStudies from '$lib/case-studies/';

const pages = {}
caseStudies.forEach(function(cs) {
  pages[cs.slug] = cs
});

export function load() {
  return pages
}
