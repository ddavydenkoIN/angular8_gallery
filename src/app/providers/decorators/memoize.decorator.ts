import * as memoize from 'lodash.memoize';

export type Resolver = (...args: any[]) => any;

export function AgMemoize(resolver?: Resolver) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    if (typeof descriptor.value !== 'function') {
      throw new Error('Memoization can be applied only to methods');
    }

    descriptor.value = memoize(descriptor.value, resolver);
    return descriptor;
  };
}
