'use strict';


/**
 * Creates an object composed of the picked object properties.
 *
 * @param {Object} object - The source object.
 * @param {string[]} keys - The property keys to pick.
 * @return {Object} The new object.
 */
function pick(object, keys) {
  const picked = keys.reduce((obj, key) => {
    if (typeof object[key] !== 'undefined') {
      obj[key] = object[key];
    }
    return obj;
  }, {});
  return picked;
}

module.exports.pick = pick;
