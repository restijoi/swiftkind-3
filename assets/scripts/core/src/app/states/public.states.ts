import { render } from '../utils/layout';
import { IndexComponent } from '../public/index/index.component';


export const publicStates: Object[] = [
  {name: 'index', url: '/', views: render(IndexComponent)},
]