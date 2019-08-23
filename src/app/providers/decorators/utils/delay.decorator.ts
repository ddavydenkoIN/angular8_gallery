export function AgDelay(milliseconds: number = 0) {

  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    return ({
      ...descriptor,
      value: (...args) => setTimeout(() => originalMethod.apply(this, args), milliseconds)
    });
  };
}
