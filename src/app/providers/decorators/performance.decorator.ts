export function AgPerformance(target: Object, targetName: string, descriptor: TypedPropertyDescriptor<any>) {
  const originalMethod = descriptor.value;

  descriptor.value = function(...args: any[]) {
    const startTime = window.performance.now();
    const endTime = window.performance.now();

    console.log(`%c⌛ ${targetName} took ${endTime - startTime}ms to complete. ⌛`, 'background: #222; color: #bada55');

    return originalMethod.apply(this, args);
  };

  return descriptor;
}
