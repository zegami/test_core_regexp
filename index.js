function re () {
  const pat = /a/.toString();
  console.log('RegExp.toString():', pat);
  try {
    // Don't even care if this matches, it should just not throw
    const fn = new Function(`return ${pat}.test("a")`);
    console.log('Should match:', fn());
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

document.body.style.background = re() ? 'green' : 'red';
