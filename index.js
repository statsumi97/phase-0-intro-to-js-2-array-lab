const cats = ['Milo', 'Otis', 'Garfield'];

//
function destructivelyAppendCat() {
    cats.push('Ralph');
}

//
function destructivelyPrependCat() {
    cats.unshift('Bob');
}

//
function destructivelyRemoveLastCat() {
    cats.pop();
}

//
function destructivelyRemoveFirstCat(){
    cats.shift();
}

//
function appendCat(name) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
}
console.log(newCatsArray('Broom'));

//
function prependCat(name) {
    const prependCatsArray = [name, ...cats];
    return prependCatsArray;
}
console.log(prependCatsArray('Arnold'));

//
function removeLastCat() {
    const removeCatsArray = cats.slice(0, -1);
    return removeCatsArray;
}

//
function removeFirstCat() {
    const removeFirstCatsArray = cats.slice(1);
    return removeFirstCatsArray;
}

/*
describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
  });
});
  */