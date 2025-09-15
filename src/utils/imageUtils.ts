import { CLOUDINARY_CONFIG } from '../config/cloudinary';

export function getCloudinaryUrl(imageId: string, transforms: string = ''): string {
  return `${CLOUDINARY_CONFIG.baseUrl}/${transforms}/${imageId}`;
}

export function getAiFaceUrl(imageId: string): string {
  // Apply specific transformations for AI faces
  const transforms = 'c_fit,h_300,w_300,q_auto';
  return getCloudinaryUrl(imageId, transforms);
}