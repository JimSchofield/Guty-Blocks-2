module.exports = function loadCssAsString(content) {
    this.cacheable && this.cacheable();
    this.value = content;
    return "module.exports = " + JSON.stringify(content);
}
module.exports.seperable = true;