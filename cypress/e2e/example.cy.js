// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/') // localhost:5173에 접속한다.
    cy.contains('h1', 'todos') // 접속한 페이지 내 랜더링된 엘리먼트들 중에서 h1태그는 todos이라는 문자열을 포함하고 있다.
  })
})
