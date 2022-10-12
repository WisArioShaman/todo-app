import { StepperComponent } from './stepper.component';

const counterSelector = '[data-cy=counter]';
const incrementSelector = '[aria-label=increment]';
const decrementSelector = '[aria-label=decrement]';


describe('StepperComponent', () => {
  it('mounts', () => {
    cy.mount('<app-stepper></app-stepper>', {
      declarations: [StepperComponent],
    });
  });

  it('stepper should default to 0', () => {
    // Arrange
    cy.mount('<app-stepper></app-stepper>', {
      declarations: [StepperComponent],
    });
    // Assert
    cy.get(counterSelector).should('have.text', '0');
  });

  it('supports an "Input()" count that sets the value', () => {
    // Arrange
    cy.mount('<app-stepper [count]="100"></app-stepper>', {
      declarations: [StepperComponent],
    });
    // Assert
    cy.get(counterSelector).should('have.text', '100');
  });

  it('when the increment button is pressed, the counter is incremented', () => {
    // Arrange
    cy.mount('<app-stepper></app-stepper>', {
      declarations: [StepperComponent],
    });
    // Act
    cy.get(incrementSelector).click();
    // Assert
    cy.get(counterSelector).should('have.text', '1');
  });

  it('when the decrement button is pressed, the counter is decremented', () => {
    // Arrange
    cy.mount('<app-stepper></app-stepper>', {
      declarations: [StepperComponent],
    });
    // Act
    cy.get(decrementSelector).click();
    // Assert
    cy.get(counterSelector).should('have.text', '-1');
  });
});
