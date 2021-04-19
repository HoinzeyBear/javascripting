var parentWrappers = document.getElementsByClassName("code-block-wrapper")
console.log(parentWrappers.length)
for(var i=0; i < parentWrappers.length; i++){
    var wrapper = parentWrappers[i]
    var children = wrapper.children
    var headers = wrapper.querySelectorAll(".cb-header")
    var blocks = wrapper.querySelectorAll(".code-block")

    console.log(headers.length)
    console.log(blocks.length)
}