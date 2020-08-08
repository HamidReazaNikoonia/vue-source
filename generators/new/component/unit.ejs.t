---
to: "src/components/<%= h.changeCase.pascal(name) %>/index.unit.js"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
%>

import <%= importName %> from './index.vue'

describe('@components/<%= importName %>', () => {
  it('exports a valid component', () => {
    expect(<%= importName %>).toBeAComponent()
  })
})
