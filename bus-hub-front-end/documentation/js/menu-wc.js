'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">bus-hub-front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ddb6de36b8ba23aa776a1c72c8eac88d"' : 'data-target="#xs-components-links-module-AppModule-ddb6de36b8ba23aa776a1c72c8eac88d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ddb6de36b8ba23aa776a1c72c8eac88d"' :
                                            'id="xs-components-links-module-AppModule-ddb6de36b8ba23aa776a1c72c8eac88d"' }>
                                            <li class="link">
                                                <a href="components/AddCustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddCustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddTicketComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddTicketComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AddbusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AddbusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CustomerDashbordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CustomerDashbordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteBusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteBusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteCustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeleteCustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeDashbordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeDashbordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmployeeloginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EmployeeloginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetBusByIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetBusByIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetBusByNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetBusByNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetBusBySourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetBusBySourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetBusBytypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetBusBytypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetCustomerBycustomerIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetCustomerBycustomerIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetCustomersBycustomerEmailIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetCustomersBycustomerEmailIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/GetCustomersBycustomerNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >GetCustomersBycustomerNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RegistrationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchByBusTypeComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchByBusTypeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchByIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchByIdComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchByNameComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchByNameComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchBySourceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchBySourceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdateCustomerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdateCustomerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/UpdatebusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UpdatebusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllBusComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllBusComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllCustomersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllCustomersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewAllticketsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewAllticketsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ViewticketByIdComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ViewticketByIdComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MyMaterialModule.html" data-type="entity-link" >MyMaterialModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Bus.html" data-type="entity-link" >Bus</a>
                            </li>
                            <li class="link">
                                <a href="classes/Customer.html" data-type="entity-link" >Customer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Employee.html" data-type="entity-link" >Employee</a>
                            </li>
                            <li class="link">
                                <a href="classes/Ticket.html" data-type="entity-link" >Ticket</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/BusService.html" data-type="entity-link" >BusService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CustomerService.html" data-type="entity-link" >CustomerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TicketService.html" data-type="entity-link" >TicketService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});