sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'com/samsoft/hr/myteams/test/integration/FirstJourney',
		'com/samsoft/hr/myteams/test/integration/pages/teamsList',
		'com/samsoft/hr/myteams/test/integration/pages/teamsObjectPage',
		'com/samsoft/hr/myteams/test/integration/pages/membersObjectPage'
    ],
    function(JourneyRunner, opaJourney, teamsList, teamsObjectPage, membersObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('com/samsoft/hr/myteams') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheteamsList: teamsList,
					onTheteamsObjectPage: teamsObjectPage,
					onThemembersObjectPage: membersObjectPage
                }
            },
            opaJourney.run
        );
    }
);