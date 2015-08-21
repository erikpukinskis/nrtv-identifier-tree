var test = require("nrtv-test")
var Tree = require("./tree")

test(
  "getting ancestors of a node",
  function(expect, done) {
    var tree = new Tree()

    tree.add("a", ["b"])
    tree.add("b", ["c"])

    expect(tree.ancestors("c")).to.have.members(["a","b"])

    done()
  }
)