sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'com.samsoft.hr.myteams',
            componentId: 'membersObjectPage',
            contextPath: '/teams/member'
        },
        CustomPageDefinitions
    );
});