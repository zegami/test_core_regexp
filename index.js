function re () {
  const re = /a/.toString();
  try {
    // Don't even care if this matches, it should just not throw
    const re2 = new Function(re + '.test("a")');
  } catch (e) {
    return false;
  }
  return true;
};

document.body.style.background = re() ? 'green' : 'red';
