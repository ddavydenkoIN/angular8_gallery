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
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
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
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
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
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery/thumbnails'
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
        thumbnailImgName: 'thumbnail.webp',
        thumbnailImgFolder: '/gallery'
      }
    ];

    // const images = {
    //   source: 'https://unsplash.it/id/',
    //   urlSuffixes: ['1015/400/400', '1016/400/400', '1020/400/400', '1015/400/400', '103/400/400', '1036/400/400', '1042/400/400', '1048/400/400', '1071/400/400',
    //     '1084/400/400', '109/400/400', '11/400/400', '110/400/400', '111/400/400', '112/400/400', '113/400/400', '114/400/400', '115/400/400',
    //     '116/400/400', '117/400/400', '119/400/400', '12/400/400', '123/400/400', '121/400/400', '124/400/400', '128/400/400', '129/400/400',
    //     '13/400/400', '131/400/400', '132/400/400', '133/400/400', '134/400/400', '137/400/400', '139/400/400', '14/400/400', '15/400/400',
    //     '147/400/400', '152/400/400', '155/400/400', '159/400/400', '160/400/400', '169/400/400', '171/400/400', '175/400/400', '174/400/400'
    //   ]
    // }
    const images = {
      source: '/assets/img/gallery/pics/',
      urlSuffixes: ["1", "2", "3", "4", "5", "6", "7", "8",
        "9", "10", "11", "12", "13", "14", "15", "16", "17",
        "18", "19", "20", "21", "22", "23", "24", "25", "26",
        "27", "28", "29", "30", "31", "32", "33", "34"],
      extension: 'webp'
    }

    return {galleries, images};
  }
}

