// import Dashboard from 'views/Dashboard.js';
import SystemInfo from 'views/SystemInfo.js';
import Team from 'views/Team.js';
import StorageEquipments from 'views/StorageEquipments.js';
import Ticket from 'views/Ticket.js';
import KnowledgeBase from 'views/KnowledgeBase.js';
import testPage from 'views/testPage';

var routes = [
    {
        path: '/team',
        name: 'Team',
        icon: 'tim-icons icon-single-02',
        component: Team,
        layout: '/admin'
    },
    {
        path: '/system-info',
        name: 'System Info',
        icon: 'tim-icons icon-alert-circle-exc',
        component: SystemInfo,
        layout: '/admin'
    },
    {
        path: '/storage-equipments',
        name: 'Storage Equipments',
        icon: 'tim-icons icon-chart-pie-36',
        component: StorageEquipments,
        layout: '/admin'
    },
    {
        path: '/i-ticket',
        name: 'i-Ticket',
        icon: 'tim-icons icon-settings',
        component: Ticket,
        layout: '/admin'
    },
    {
        path: '/knowledge-base',
        name: 'Knowledge Base',
        icon: 'tim-icons icon-app',
        component: KnowledgeBase,
        layout: '/admin'
    },
    {
        collapse: true,
        name: 'Pages',
        icon: 'tim-icons icon-app',
        state: 'pageCollapse',
        views: [
            {
                path: '/test-page',
                name: 'Test Page',
                layout: '/admin',
                state: 'pageCollapse2'
            }
        ]
    }
];
export default routes;
