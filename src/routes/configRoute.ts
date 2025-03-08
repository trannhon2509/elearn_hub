import { lazy } from 'react';
import routePaths from './routePath';
import DashboardLayout from '@/layouts/DashboardLayout';
import DefaultLayout from '@/layouts/DefaultLayout';


const configRoute = [
    { path: routePaths.DASHBOARD, component: lazy(() => import('../pages/Dashboard')), layout: DashboardLayout, key: 'dashboard' },
    { path: routePaths.COURSES, component: lazy(() => import('../pages/Courses')), layout: DefaultLayout, key: 'courses' },
    { path: routePaths.SCHEDULE, component: lazy(() => import('../pages/Schedule')), layout: DashboardLayout, key: 'schedule' },
    { path: routePaths.STUDY, component: lazy(() => import('../pages/Study')), layout: DashboardLayout, key: 'study' },
];

export default configRoute;