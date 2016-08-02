import 'angular-ui-bootstrap';

angular.module('main.templates', []);

angular.module('issueTrackerApp', ['ui.bootstrap', 'main.templates']);

import {IssueTrackerCtrl} from './controllers/issue-tracker.controller.js';
import {ModalAddCtrl} from './controllers/modal-add.controller';
import {ModalEditCtrl} from './controllers/modal-edit.controller';
import {CommentAddCtrl} from './controllers/modal-comment-add.controller';
import {SettingsCtrl} from './controllers/modal-settings.controller.js';
import {HelpCtrl} from './controllers/modal-help.controller.js';
import {DialogCtrl} from './controllers/modal-dialog.controller.js';
import {issueAddService} from './services/issues-add.service.js';
import {issueEditService} from './services/issues-edit.service.js';
import {commentAddService} from './services/comments-add.service.js';
import {settingsService} from './services/settings.service.js';
import {helpService} from './services/help.service.js';
import {dialogService} from './services/dialog.service.js';
import {navMenu} from './directives/nav-menu.directive.js';

//CONTROLLERS
angular.module('issueTrackerApp').controller('IssueTrackerCtrl', IssueTrackerCtrl);
angular.module('issueTrackerApp').controller('ModalAddCtrl', ModalAddCtrl);
angular.module('issueTrackerApp').controller('ModalEditCtrl', ModalEditCtrl);
angular.module('issueTrackerApp').controller('CommentAddCtrl', CommentAddCtrl);
angular.module('issueTrackerApp').controller('SettingsCtrl', SettingsCtrl);
angular.module('issueTrackerApp').controller('HelpCtrl', HelpCtrl);
angular.module('issueTrackerApp').controller('DialogCtrl', DialogCtrl);
//SERVICES
angular.module('issueTrackerApp').service('issueAddService', issueAddService);
angular.module('issueTrackerApp').service('issueEditService', issueEditService);
angular.module('issueTrackerApp').service('commentAddService', commentAddService);
angular.module('issueTrackerApp').service('settingsService', settingsService);
angular.module('issueTrackerApp').service('helpService', helpService);
angular.module('issueTrackerApp').service('dialogService', dialogService);
//DIRECTIVES
angular.module('issueTrackerApp').directive('navMenu', () => new navMenu);



