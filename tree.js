var library = require("nrtv-library")(require)

module.exports = library.export(
  "nrtv-tree",
  function() {
    function Tree() {
      this.dependencies = {}
      this.parents = {}
    }

    Tree.prototype.add =
      function(id, children) {
        this.dependencies[id] = children

        var parents = this.parents

        children.forEach(
          function(child) {
            if (!parents[child]) {
              parents[child] = []
            }

            parents[child].push(id)
          }
        )
      }

    Tree.prototype.ancestors =
      function(id) {
        var parents = this.parents[id] || []
        var ancestors = [].concat(parents)
        var tree = this

        parents.forEach(
          function(parent) {
            var grandparents = tree.ancestors(parent)

            ancestors = ancestors.concat(grandparents)
          }
        )

        return ancestors
      }

    return Tree
  }
)