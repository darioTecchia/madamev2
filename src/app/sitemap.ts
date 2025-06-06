import DB from '@/data/db'
import type { MetadataRoute } from 'next'

const getMenuUrls = (): MetadataRoute.Sitemap => {
  return DB.menus.map((menu) => ({
    url: `https://madamev2.vercel.app/menu/${menu.id}`,
    lastModified: '2025-06-06T11:18:45.013Z',
    changeFrequency: 'monthly',
    priority: 0.5,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  let siteMap: MetadataRoute.Sitemap = [];
  siteMap.push({
    url: 'https://madamev2.vercel.app',
    lastModified: '2025-06-06T11:18:45.013Z',
    changeFrequency: 'monthly',
    priority: 1,
  });

  siteMap.push({
    url: 'https://madamev2.vercel.app/contatti',
    lastModified: '2025-06-06T11:18:45.013Z',
    changeFrequency: 'yearly',
    priority: 0.8,
  });

  siteMap = siteMap.concat(getMenuUrls());

  return siteMap;
}