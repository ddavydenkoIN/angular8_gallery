import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class AgDataService implements InMemoryDbService {

  createDb() {

    const galleries =  [
      {
        id: 1,
        name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
        propHeader: 'HOME.GALLERIES.PROPS_USED',
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
      },
      {
        id: 2,
        name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
        propHeader: 'HOME.GALLERIES.PROPS_USED',
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
      },
      {
        id: 3,
        name: 'HOME.GALLERIES.TRADITIONAL_FLOATS',
        propHeader: 'HOME.GALLERIES.PROPS_USED',
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

