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
        props: {
          parent: [],
          child: [
            {name: 'float', value: 'left'},
            {name: 'width', value: '24%'},
            {name: 'margin', value: '5px'},
            {name: 'height', value: '200px'}
          ]
        },
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      },
      {
        id: 2,
        name: 'HOME.GALLERIES.GRID_TEMPLATE_ROWS_REPEAT',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        props: {
          parent: [
            {name: 'display', value: 'grid'},
            {name: 'grid-template-columns', value: 'repeat(5, 1fr)'},
            {name: 'grid-auto-rows', value: '200px'},
            {name: 'grid-row-gap', value: '10px'},
          ],
          child: []
        },
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      },
      {
        id: 3,
        name: 'HOME.GALLERIES.GRID_REPEAT_AUTOFIT_MINMAX',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        props: {
          parent: [
            {name: 'display', value: 'grid'},
            {name: 'grid-template-columns', value: 'repeat(auto-fit, minmax(200px, 1fr))'},
            {name: 'grid-auto-rows', value: '200px'},
            {name: 'grid-row-gap', value: '10px'},
          ],
          child: []
        },
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      },
      {
        id: 4,
        name: 'HOME.GALLERIES.GRID_AUTO_FLOW_DENCE',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        props: {
          parent: [
            {name: 'display', value: 'grid'},
            {name: 'grid-template-columns', value: 'repeat(auto-fit, minmax(200px, 1fr))'},
            {name: 'grid-auto-rows', value: '300px'},
            {name: 'grid-auto-flow', value: 'dense'},
            {name: 'grid-gap', value: '10px'}
          ],
          child: []
        },
        isRandomSizeImages: true,
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      },

    ];

    const images = {
      source: 'https://unsplash.it/id/',
      urlSuffixes: ['1015/400/400', '1016/400/400', '1020/400/400', '1015/400/400', '103/400/400', '1036/400/400', '1042/400/400', '1048/400/400', '1071/400/400',
        '1015/400/400', '1016/400/400', '1020/400/400', '1015/400/400', '103/400/400', '1036/400/400', '1042/400/400', '1048/400/400', '1071/400/400',
        '1015/400/400', '1016/400/400', '1020/400/400', '1015/400/400', '103/400/400', '1036/400/400', '1042/400/400', '1048/400/400', '1071/400/400',
        '1015/400/400', '1016/400/400', '1020/400/400', '1015/400/400', '103/400/400', '1036/400/400', '1042/400/400', '1048/400/400', '1071/400/400'
      ]
    }

    return {galleries, images};
  }
}

