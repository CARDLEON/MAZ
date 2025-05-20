import loadable from '@loadable/component';
import { LoadingFallback } from './LoadingFallback';

// Grids
export const LazyAboutGrid = loadable(() => import('../grids/AboutGrid.astro'), {
  fallback: LoadingFallback({ height: '300px' })
});

export const LazyProductGrid = loadable(() => import('@/src/components/grids/ProductGrid.astro'), {
  fallback: LoadingFallback({ height: '300px' })
});

export const LazyServicesGrid = loadable(() => import('../grids/ServicesGrid.astro'), {
  fallback: LoadingFallback({ height: '300px' })
});

// Products
export const LazyProductGallery = loadable(() => import('../products/ProductGallery.astro'), {
  fallback: LoadingFallback({ height: '400px' })
});

export const LazyProductDetail = loadable(() => import('../products/ProductDetail.astro'), {
  fallback: LoadingFallback({ height: '400px' })
});

// Hero
export const LazyHeroCarousel = loadable(() => import('../react/HeroCarousel'), {
  fallback: LoadingFallback({ height: '500px' })
}); 