import { siteContent } from '../src/content/siteContent';

const failures: string[] = [];

if (siteContent.product.provisional || siteContent.product.name === 'Recipe App') {
  failures.push('Replace the provisional product name and identity.');
}

if (siteContent.primaryCta.provisional || !siteContent.primaryCta.href) {
  failures.push('Configure the production Google Play URL.');
}

if (siteContent.demo.provisional || !siteContent.demo.src || !siteContent.demo.poster || !siteContent.demo.captionTrack) {
  failures.push('Provide the final demo video, poster, and caption track.');
}

for (const [name, link] of Object.entries(siteContent.links)) {
  if (link.provisional || !link.href) failures.push(`Configure the ${name} destination.`);
}

if (failures.length > 0) {
  console.error('Release validation failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('Release content is configured.');
