import { navigateTo } from "../support/page_objects/navigationPage";
import {onFormLayoutsPage} from "../support/page_objects/formLayoutsPage";

describe('Test with PageObjects', () => {

  beforeEach('open application', () => {
    cy.visit('/')
  })

  it('verify navigation across the pages', () => {
    navigateTo.formLayoutsPage()
    navigateTo.datepickerPage()
    navigateTo.smartTablePage()
    navigateTo.tooltipPage()
    navigateTo.toasterPage()
  })

  it(' should submit Inline and Basic form and select tomorrow date in the calendar', () =>{
    navigateTo.formLayoutsPage()
    onFormLayoutsPage.submitInlineFormWithNameAndEmail('Artem', 'test@test.com')
    onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'password')
    navigateTo.datepickerPage()
  })



})
