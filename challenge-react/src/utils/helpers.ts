/**
 * calculates the sum of donations
 * @param {number[]} donations - the array containing the exisiting donation amounts
 * @returns {number} - the sum of donations
 */
export const summaryDonations = (donations: number[]): number =>
  donations.reduce((accumulator, value) => accumulator + value);
