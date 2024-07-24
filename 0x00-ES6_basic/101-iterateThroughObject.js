export default function iterateThroughObject(reportWithIterator) {
  let output = '';

  for (const [index, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    // Specify the radix parameter as 10 for decimal base
    if (parseInt(index, 10) !== reportWithIterator.length - 1) {
      output += ' | ';
    }
  }

  return output;
}
