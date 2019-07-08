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
            {name: 'margin', value: '5px'}
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
            {name: 'grid-template-columns', value: 'repeat(4, 1fr)'},
            {name: 'grid-gap', value: '10px'}
          ],
          child: []
        },
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      },
      {
        id: 3,
        name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
        propContainerHeader: 'HOME.GALLERIES.PROPS_CONTAINER',
        propImgHeader: 'HOME.GALLERIES.PROPS_IMG',
        props: {
          parent: [],
          child: [
            {name: 'float', value: 'left'},
            {name: 'width', value: '250px'},
            {name: 'margin-right', value: '20px'}
          ]
        },
        thumbnailImgName: 'thumbnail.png',
        thumbnailImgFolder: '/gallery-thumbnails'
      }
    ];

    return {galleries};
  }
}

