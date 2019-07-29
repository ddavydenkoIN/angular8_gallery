export default function AgLogger(target: Object, targetName: string, descriptor: TypedPropertyDescriptor<any>) {
  const originalMethod = descriptor.value;

  return ({
    ...descriptor,
    value: function(...args: any[]) {
      console.log(`%c🏁 Starting 🏁 ${targetName} with params:`, 'background: #222; color: #bada55', args);

      const result = originalMethod.apply(this, args);

      console.log(`%c🏁 Terminating 🏁 ${targetName}, it returns:`, 'background: #222; color: #bada55', result === undefined ? 'VOID' : result);
    }
  });
}
