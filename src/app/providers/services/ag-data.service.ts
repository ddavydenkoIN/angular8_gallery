import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class AgDataService implements InMemoryDbService {

  createDb() {

    const galleries =  [
      {
        id: 1,
        name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {},
          img: {
            float: 'left',
            width: '24%',
            margin: '5px',
            height: '200px'
          }
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 2,
        name: 'HOME.GALLERIES.GRID_TEMPLATE_ROWS_REPEAT',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(5, 1fr)',
            'grid-auto-rows': '200px',
            'grid-row-gap': '10px'
          },
          img: {}
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 3,
        name: 'HOME.GALLERIES.GRID_REPEAT_AUTOFIT_MINMAX',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-rows': '200px',
            'grid-row-gap': '10px'
          },
          img: {}
        },
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
      },
      {
        id: 4,
        name: 'HOME.GALLERIES.GRID_AUTO_FLOW_DENCE',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        styles: {
          container: {
            display: 'grid',
            'grid-template-columns': 'repeat(auto-fit, minmax(200px, 1fr))',
            'grid-auto-flow': 'dense',
            'grid-auto-rows': '200px',
            'grid-row-gap': '10px'
          },
          img: {
            filter: 'grayscale(1)'
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

