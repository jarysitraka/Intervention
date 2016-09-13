myApp.controller('PlanningCtrl',function ($scope, $rootScope,$filter,$cookies,$compile, $timeout,uiCalendarConfig) {

    $scope.$parent.pageTitle = 'Planning';//à mettre sur tous les controllers
    $scope.$parent.cookieUsername = $cookies.getObject('connected');//à mettre sur tous les controllers

    $scope.alertMessage=false;

    $scope.FiltreTechnicien = function( ){
        $scope.alertMessage=false;
    };
    var date = new Date();
    var d = date.getDate();
    var m = date.getMonth();
    var y = date.getFullYear();

    console.log(y,m,d);

    $scope.changeTo = 'Hungarian';
    /* event source that pulls from google.com */
    $scope.eventSource = {

    };
    /* event source that contains custom events on the scope */
    $scope.events = [
        {title: 'Vérificaction du bon fonctionnement',start: new Date(y, m, 9),end: new Date(y, m, 9),allDay: false},
        {title: 'Installation matériels',start: new Date(y, m, 8),end: new Date(y, m, 8),allDay: false},
        {title: 'Pré-installation matériels',start: new Date(y, m, 7),end: new Date(y, m, 7),allDay: false}
    ];
    /* event source that calls a function on every view switch */
    $scope.eventsF = function (start, end, timezone, callback) {
        var s = new Date(start).getTime() / 1000;
        var e = new Date(end).getTime() / 1000;
        var m = new Date(start).getMonth();
        var events = [{title: 'Feed Me ' + m,start: s + (50000),end: s + (100000),allDay: false, className: ['customFeed']}];
        callback(events);
    };

    $scope.calEventsExt = {
        color: '#f00',
        textColor: 'white',
        events: [
            {type:'party',title: 'Changement fil 03',start: new Date(y, m-1, 22, null, null),end: new Date(y, m-1, 22, null, null),allDay: false},
            {type:'party',title: 'Changement fil 04',start: new Date(y, m-1, 22),end: new Date(y, m-1, 22, null, null),allDay: false},
            {type:'party',title: 'Changement fil 05',start: new Date(y, m-1, 22),end: new Date(y, m-1, 22)}
        ]
    };

    $scope.proj = {
        color: '#ffeb3b',
        textColor: 'white',
        events: [
            {type:'party',title: 'Pack 3 en 1 Jary',start: new Date(y, m, 7, null, null),end: new Date(y, m, 10, null, null)},
            {type:'party',title: 'Verification des devices',start: new Date(y, m, 1),end: new Date(y, m, 30, null, null),allDay: false},
            {type:'party',title: 'Remplacement des câbles',start: new Date(y, m-1, 22),end: new Date(y, m-1, 22)},
            {type:'party',title: 'Pack 2 en 1 Tsito',start: new Date(y, m, 22),end: new Date(y, m, 25)}
        ]
    };

    $scope.insert = {
        color: '#00695c',
        textColor: 'white',
        events: [
            {type:'party',title: 'Installation matériel',start: new Date(y, m, 22, null, null),end: new Date(y, m, 22, null, null)},
            {type:'party',title: 'Pré-installation Client Francky',start: new Date(y, m+1, 3, null, null),end: new Date(y, m+1, 3, null, null)}
        ]
    };

    /* alert on eventClick */
    $scope.alertOnEventClick = function( date, jsEvent, view){
        $scope.alertMessage = (date.title);
    };
    /* alert on Drop */
    $scope.alertOnDrop = function(event, delta, revertFunc, jsEvent, ui, view){
        //$scope.alertMessage = ('l\'interventionintervention a été déplacé au '+event.start._d+' '  );
        Materialize.toast("Intallation matériel a bien été séplacé au 24 September 2016", 3000, 'green');
        console.log(event.start);
        console.log(event.start._d);//nouvel date
        console.log(event.start._i);//nouvel date
    };
    /* alert on Resize */
    $scope.alertOnResize = function(event, delta, revertFunc, jsEvent, ui, view ){
        $scope.alertMessage = ('Event Resized to make dayDelta ' + delta);
    };
    /* add and removes an event source of choice */
    $scope.addRemoveEventSource = function(sources,source) {
        var canAdd = 0;
        angular.forEach(sources,function(value, key){
            if(sources[key] === source){
                sources.splice(key,1);
                canAdd = 1;
            }
        });
        if(canAdd === 0){
            sources.push(source);
        }
    };
    /* add custom event*/
    $scope.addEvent = function() {
        $scope.events.push({
            title: 'Open Sesame',
            start: new Date(y, m, 28),
            end: new Date(y, m, 29),
            className: ['openSesame']
        });
    };
    /* remove event */
    $scope.remove = function(index) {
        $scope.events.splice(index,1);
    };
    /* Change View */
    $scope.changeView = function(view,calendar) {
        uiCalendarConfig.calendars[calendar].fullCalendar('changeView',view);
    };
    /* Change View */
    $scope.renderCalendar = function(calendar) {
        $timeout(function() {
            if(uiCalendarConfig.calendars[calendar]){
                uiCalendarConfig.calendars[calendar].fullCalendar('render');
            }
        });
    };
    /* Render Tooltip */
    $scope.eventRender = function( event, element, view ) {
        element.attr({'tooltip': event.title,
            'tooltip-append-to-body': true});
        $compile(element)($scope);
    };
    /* config object */
    $scope.uiConfig = {
        calendar:{
            height: 550,
            editable: true,
            header:{
                left: 'month basicWeek basicDay',

                center: 'title',
                right: 'today prev,next'
            },
            eventClick: $scope.alertOnEventClick,
            eventDrop: $scope.alertOnDrop,
            eventResize: $scope.alertOnResize,
            eventRender: $scope.eventRender,
            monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Decembre'],
            dayNamesShort: ["Dim","Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            buttonText: {
                today:'Aujourd\'hui',
                month: 'Mois',
                week: 'Semaine',
                day: 'Jour'
            }
        }
    };

    $scope.changeLang = function() {
        if($scope.changeTo === 'Hungarian'){
            $scope.uiConfig.calendar.dayNames = ["Vasárnap", "Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];
            $scope.uiConfig.calendar.dayNamesShort = ["Vas", "Hét", "Kedd", "Sze", "Csüt", "Pén", "Szo"];
            $scope.changeTo= 'English';
        } else {
            $scope.uiConfig.calendar.dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            $scope.uiConfig.calendar.dayNamesShort = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            $scope.changeTo = 'Hungarian';
        }
    };
    /* event sources array*/
    $scope.eventSources = [$scope.events, $scope.eventSource, $scope.eventsF];
    $scope.eventSources2 = [$scope.calEventsExt, $scope.proj, $scope.events, $scope.insert];

});
