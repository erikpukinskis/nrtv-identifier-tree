var library = require("nrtv-library")(require)

library.test(
  "getting ancestors of a node",
  ["./tree"],
  function(expect, done, Tree) {
    var tree = new Tree()

    tree.add("a", ["b"])
    tree.add("b", ["c"])

    expect(tree.ancestors("c")).to.have.members(["a","b"])

    done()
  }
)