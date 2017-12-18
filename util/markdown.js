const markdownRules = [
  { md: /#([^#].*)/, html: '<h1>$1</h1>' }
]

export function markdownToHTML (text) {
    text = '\n' + (text || '') + '\n'
    for (var i = markdownRules.length - 1; i >= 0; i--) {
      text = text.replace(markdownRules[i].md, markdownRules[i].html)
    }
    return text.trim()
}
