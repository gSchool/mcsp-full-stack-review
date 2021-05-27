(function() {
  const petArray = [];

  $.get('/api/pets', (res) => {
    res.forEach((row) => {
      petArray.push(row)
    })
  });
})();
