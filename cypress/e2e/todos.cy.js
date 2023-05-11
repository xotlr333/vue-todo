// Test suite
// describe('테스트 스위트 이름', 테스트 케이스들을 모아놓을 콜백함수)
describe('todo 관리', () => {

    // beforeEach: 각각의 테스트 케이스들을 수행하기 전에 동작시킬 코드
    beforeEach(() => {
        cy.visit('/'); // 사용자가 브라우저를 통해 todos 메인 페이지에 접속
        
        // 모달 창 열기 (Add Todo 버튼 클릭 시)
        cy.contains('Add Todo').click();

        // 모달 창 열렸는지 확인
        cy.get('[data-cy="modal-backdrop"]').should('exist');
        cy.get('[data-cy="modal-container"]').should('exist');
    });

    // 하나의 테스트 케이스
    // it('테스트 할 동작 서술', 실제 테스트 코드 작성할 콜백함수)
    it('Todo 모달 창을 배경화면을 선택하여 닫을 수 있다.', () => {
        
        // 모달 창 닫기(배경화면 선택 시)
        cy.get('[data-cy="modal-backdrop"]').click({ force: true});

        // 모달 창이 닫혔는지 확인
        cy.get('[data-cy="modal-backdrop"]').should('not.exist');
        cy.get('[data-cy="modal-container"]').should('not.exist');

    });

    it('Todo 모달 창을 Calcle 버튼을 클릭하여 닫을 수 있다.', () => {
        
        // 모달 창 닫기(Cancel 버튼 클릭 시)
        cy.contains('Cancel').click();

        // 모달 창이 닫혔는지 확인
        cy.get('[data-cy="modal-backdrop"]').should('not.exist');
        cy.get('[data-cy="modal-container"]').should('not.exist');
    });
    
    it('새로운 Todo를 작성할 수 있다.', () => {
        cy.get('#title').type('커피 마시기'); // type('입력할 텍스트') - 키보드 입력
        cy.get('#summary').type('커피를 마신다');


        cy.get('[data-cy="modal-container"]').contains('Add').click();

        // 모달 창이 닫혔는지 확인
        cy.get('[data-cy="modal-backdrop"]').should('not.exist');
        cy.get('[data-cy="modal-container"]').should('not.exist');

        // 추가가 되었는지 확인
        cy.get('li').should('have.length', 4);

        cy.get(':nth-child(4) > :nth-child(1) > div > [data-test="title"]').contains('커피 마시기');
        cy.get(':nth-child(4) > :nth-child(1) > div > .mt-2').contains('커피를 마신다');
    });

    
});