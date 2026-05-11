import { createBrowserRouter } from 'react-router';
import { Root } from './Root';
import { HomePage } from './pages/HomePage';
import { WorkflowPage } from './pages/WorkflowPage';
import { ContactPage } from './pages/ContactPage';
import { AppLayout } from './layouts/AppLayout';
import { AppDashboard } from './pages/app/AppDashboard';
import { SimulationPage } from './pages/app/SimulationPage';
import { VocabPage } from './pages/app/VocabPage';
import { KnowledgePage } from './pages/app/KnowledgePage';
import { RecordsPage } from './pages/app/RecordsPage';
import { ReportsPage } from './pages/app/ReportsPage';
import { PlaceholderPage } from './pages/PlaceholderPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'workflow', Component: WorkflowPage },
      { path: 'contact', Component: ContactPage },
      { path: '*', Component: HomePage }
    ],
  },
  {
    path: '/app',
    Component: AppLayout,
    children: [
      { index: true, Component: AppDashboard },
      { path: 'vocabulary', Component: VocabPage },
      { path: 'knowledge', Component: KnowledgePage },
      { path: 'simulation', Component: SimulationPage },
      { path: 'records', Component: RecordsPage },
      { path: 'reports', Component: ReportsPage },
    ]
  }
]);
