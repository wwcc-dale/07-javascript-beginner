// utils.js — Session 10 example solution
export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
export function reverse(str) {
  return str.split("").reverse().join("");
}
export function isPalindrome(str) {
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return clean === reverse(clean);
}
