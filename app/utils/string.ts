/**
 * Converts a string to snake_case.
 *
 * @param {string} str input string
 * @returns {string} snake_cased version of `str`
 */
export function toSnakeCase(str: string): string {
  return str.trim().toLowerCase().replace(' ', '_')
}

/**
 * Converts a string to TitleCase
 *
 * @param {string} str input string
 * @returns {string} TitleCased version of `str`
 */
export function toTitleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Replace all non-alphanumeric character in a string with space
 *
 * @param {string} str input string
 * @returns {string} `str`, without non-alphanumeric characters
 */
export function replaceSpecialCharacterWithSpace(str: string): string {
  return str.replace(/[^a-zA-Z0-9]/g, ' ')
}

/**
 * Converts a string to kebab-case
 *
 * @param {string} str input string
 * @returns {string} kebab-cased version of `str`
 */
export function convertToKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_.]+/g, '-')
    .toLowerCase()
}

/**
 * Get a kebab-case version of a string
 *
 * @param {string} str input string
 * @returns {string} kebab-cased version of `str`
 */
export function getKebabCase(str?: string): string {
  return convertToKebabCase(replaceSpecialCharacterWithSpace(str ?? '').trim())
}

/**
 * Checks if all strings in an array are empty strings
 *
 * @param {string[]} array input array
 * @returns `true` if all strings in `array` are empty strings,
 * `false` otherwise
 */
export function isAllEmptyString(array: string[]) {
  return array.every((str) => !str.length)
}

/**
 * Get current time in seconds, formatted to 3 numbers behind commas precision
 *
 * @param {[number, number]} hrtime High resolution time, should be
 * `process.hrtime()`
 * @returns {string} time string, in seconds.
 */
export function toSecond(hrtime: [number, number]): string {
  return (hrtime[0] + hrtime[1] / 1e9).toFixed(3)
}

/**
 * Strips out HTML tags from a string
 *
 * @param str input string with HTML tags
 * @returns string without HTML tags
 */
export function stripTags(str: string): string {
  return str.replace(/(<([^>]+)>)/gi, '')
}
