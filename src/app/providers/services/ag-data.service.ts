import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class AgDataService implements InMemoryDbService {

  createDb() {

    const galleries =  [
      {
        id: 1,
        name: 'HOME.GALLERIES.BLACK_AND_WHITE',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-flow': 'dense',
            'grid-auto-rows': '200px',
            'grid-gap': '10px'
          },
          img: {
            filter: 'grayscale(1)',
            borderRadius: '0px'
          }
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 2,
        name: 'HOME.GALLERIES.SPINY_SEPIA',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-flow': 'dense',
            'grid-auto-rows': '200px',
            'grid-gap': '20px'
          },
          img: {
            filter: 'sepia(1)',
            borderRadius: '10px',
            animation: {
              animation: 'rollIn',
              duration: '1.5s'
            }
          }
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 3,
        name: 'HOME.GALLERIES.DARK_ONE',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-flow': 'dense',
            'grid-auto-rows': '200px',
            'grid-gap': '20px'
          },
          img: {
            filter: 'brightness(0.5)',
            borderRadius: '20px',
            animation: {
              animation: 'fadeInLeftToRight',
              duration: '1s'
            },

          }
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 4,
        name: 'HOME.GALLERIES.BLUR_ROUND',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-flow': 'dense',
            'grid-auto-rows': '200px',
            'grid-gap': '20px'
          },
          img: {
            filter: 'blur(3px)',
            borderRadius: '200px'
          }
        },
        isRandomSizeImages: true,
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery'
      }
    ];

    const images = {
      sourceFolder: '/assets/img/gallery/pics/',
      urlSuffixes: ["1", "2", "3", "4", "5", "6", "7", "8",
        "9", "10", "11", "12", "13", "14", "15", "16", "17",
        "18", "19", "20", "21", "22", "23", "24", "25", "26",
        "27", "28", "29", "30", "31", "32", "33", "34"],
      extension: 'webp'
    }

    return {galleries, images};
  }
}

