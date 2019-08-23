/**
 * Setting on the property field specifies the name, which this field could have in response model.
 * For example:
 * export class AgImages {
 *      @AgPropertyMap('sourceUrl')
 *      source: string = null;
 *      . . .
 * }
 * @param sourceProperty - string value, which would be replaced by the property name.
 */
export function AgPropertyMap(sourceProperty: string) {
  return function (target: any, propertyKey: string) {
    if (!target.constructor._propertyMap) {
      target.constructor._propertyMap = {};
    }
    target.constructor._propertyMap[propertyKey] = sourceProperty;
  };
}
