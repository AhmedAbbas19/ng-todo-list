/** Detecting both XSS attacks and HTML tags */
export const SAFE_TEXT_REGEX = /^(?![\s\S]*<|[\s\S]*>)(?![\s\S]*\b(?:javascript:|on\w+\s*=))[\s\S]*$/;
